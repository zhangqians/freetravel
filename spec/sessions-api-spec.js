import request from 'supertest';
import app from '../app/server';
import finish from './finish';
import {User} from '../app/db/schema';
import db from '../app/db/db';
import async from 'async';

describe('sessions-spec tset', ()=> {
    beforeEach((done)=> {
        db.connect('test', (err) => {
            if (err) return done.fail(err);
            User.find().remove(finish(done));
        })
    });

    afterEach((done) => {
        db.close(finish(done));
    });

    fit('input right name and password',(done)=> {
        async.waterfall([
            (cb) =>new User({
                name:'123',
                password:'111111'
            }).save((err) => {
                if (err) return done.fail(err);
                request(app).post('/api/sessions').send({
                    name: '123',
                    password: '111111'
                }).expect(201, cb);
            })
        ], finish(done));
    });
    fit('wrong password',(done)=> {
        async.waterfall([
            (cb) =>new User({
                name:'123',
                password:'111111'
            }).save((err) => {
                if (err) return done.fail(err);
                request(app).post('/api/sessions').send({
                    name: '123',
                    password: 'wrong password'
                }).expect(401, cb);
            })
        ], finish(done));
    });
    fit('wrong name',(done)=> {
        async.waterfall([
            (cb) =>new User({
                name:'123',
                password:'111111'
            }).save((err) => {
                if (err) return done.fail(err);
                request(app).post('/api/sessions').send({
                    name: 'wrong name',
                    password: '111111'
                }).expect(401, cb);
            })
        ], finish(done));
    });
    fit('name is null',(done)=> {
        async.waterfall([
            (cb) =>new User({
                name:'123',
                password:'111111'
            }).save((err) => {
                if (err) return done.fail(err);
                request(app).post('/api/sessions').send({
                    name: '123',
                    password: ''
                }).expect(400, cb);
            })
        ], finish(done));
    });
    fit('password is null',(done)=> {
        async.waterfall([
            (cb) =>new User({
                name:'123',
                password:'111111'
            }).save((err) => {
                if (err) return done.fail(err);
                request(app).post('/api/sessions').send({
                    name: '123',
                    password: ''
                }).expect(400, cb);
            })
        ], finish(done));
    });
    fit('password is null',(done)=> {
        async.waterfall([
            (cb) =>new User({
                name:'123',
                password:'111111'
            }).save((err) => {
                if (err) return done.fail(err);
                request(app).post('/api/sessions').send({
                    password: '123'
                }).expect(401, cb);
            })
        ], finish(done));
    });
    fit('password is null',(done)=> {
        async.waterfall([
            (cb) =>new User({
                name:'123',
                password:'111111'
            }).save((err) => {
                if (err) return done.fail(err);
                request(app).post('/api/sessions').send({
                    name: '123'
                }).expect(401, cb);
            })
        ], finish(done));
    });
});
