'use strict';
import request from 'supertest';
import app from '../app/server';
import finish from './finish';
import {User} from '../app/db/schema';


describe('uer test', () => {
    beforeEach((done)=> {
        User.find().remove(finish(done));
    });

    it('#1 getted right', (done)=> {
        request(app)
            .post('/api/user')
            .send({name: 'zyn', password: 'zyn199', email: 'zyn123@163.com', phone: '18292080565'})
            .expect(201, function (err, data) {
                finish(done)(err);
            });
    });

    it('#2 repeat name', (done) => {
        new User({
            name: 'zyn',
            password: 'zyn199',
            email: 'zyn123@163.com',
            phone: '18292080565'
        }).save(function (err, data) {
            if (err) return done.fail(err);

            User.find(function (err, users) {
                expect(users.length).toEqual(1);

                request(app)
                    .post('/api/user')
                    .send({name: 'zyn', password: 'zyn199', email: 'zyn123@163.com', phone: '18292080565'})
                    .expect(409, function (err, data) {
                        finish(done)(err);
                    });
            });
        });
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

