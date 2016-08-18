'use strict';
import request from 'supertest';
import app from '../app/server';
import finish from './finish';
import {User} from '../app/db/schema';
import db from '../app/db/db';
import async from 'async';


describe('uer test', () => {
    beforeEach((done)=> {
        db.connect('test', (err) => {
            if (err) return done.fail(err);
            User.find().remove(finish(done));
        })
    });

    afterEach((done) => {
        db.close(finish(done));
    });

    it('init', (done)=> {
        async.waterfall([
            (cb) => request(app).post('/register').expect(200, cb),
            (res, cb) => User.find(cb),
            (user, cb) => {
                cb();
            }
        ], finish(done));
    });

    it('saved json in mongodb', (done)=> {
        async.waterfall([
            (cb) =>request(app).post('/api/user').send({
                name: 'xy',
                password: 'zyn199',
                email: 'zyn123@163.com',
                phone: '18292080565'
            }).expect(201, cb)
        ], finish(done));
    });


    fit('#2 repeat name', (done) => {
        async.waterfall([
            (cb) => new User({
                name: 'xy',
                password: 'zyn199',
                email: 'zyn123@163.com',
                phone: '18292080565'
            }).save((err, data) => {
                if (err) return done.fail(err);
                request(app).post('/api/user').send({
                    name: 'xy',
                    password: 'zyn199',
                    email: 'zyn123@163.com',
                    phone: '18292080565'
                }).expect(409, cb)
            })
        ], finish(done));
    });


    it('#3 uncompleted', (done) => {
        request(app)
            .post('/api/user')
            .send({name: 'lxy', password: 'zyn129', email: 'yyn123@163.com', phone: ''})
            .expect(400, function (err, data) {
                finish(done)(err);
            });
    });


    it('#4 email wrong', (done) => {
        request(app)
            .post('/api/user')
            .send({name: 'zqs', password: 'zyn129', email: 'yyn123163.com', phone: '18292080565'})
            .expect(400, function (err, data) {
                finish(done)(err);
            });
    });

    it('#5 phone formation wrong', (done) => {
        request(app)
            .post('/api/user')
            .send({name: 'qf', password: 'zyn129', email: 'yyn@123163.com', phone: '28292080565'})
            .expect(400, function (err, data) {
                finish(done)(err);
            });
    });


    it('#5.1', (done) => {
        request(app)
            .post('/api/user')
            .send({name: 'xy', password: 'zyn129', email: 'yyn123@163.com', phone: '1829208065'})
            .expect(400, function (err, data) {
                finish(done)(err);
            });
    });

    it('#6 phone content wrong', (done) => {
        request(app)
            .post('/api/user')
            .send({name: 'ltjn', password: 'zyn129', email: 'yyn123@163.com', phone: '182920805*5'})
            .expect(400, function (err, data) {
                finish(done)(err);
            });
    });
});

