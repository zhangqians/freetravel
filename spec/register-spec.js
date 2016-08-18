'use strict';
import request from 'supertest';
import app from '../app/server';
import finish from './finish';
import {User} from '../app/db/schema';
import db from '../app/db/db';
describe('注册api测试', () => {
    beforeEach((done)=> {
        db.connect('test', (err) => {
            if (err) return done.fail(err);
            User.find().remove(finish(done));
        })
    });
    describe('合法输入', ()=> {

        beforeEach((done)=> {
            User.find().remove(finish(done));
        });

        it('当输入信息全部合法正确', (done) => {
            request(app)
                .post('/api/user')
                .send({
                    name: 'lavender', password: '162533',
                    email: '1242230116@qq.com', phone: '18829292614'
                })
                .expect(201,'register success', finish(done))
        });

    });
    describe('异常情况输入', ()=> {
        it('用户名已经存在', (done) => {
            new User({
                name: 'lavender',
                password: '162533',
                email: '1242230116@qq.com',
                phone: '18829292614'
            }).save(function (err, data) {
                if (err) return done.fail(err);

                User.find(function (err, users) {
                    expect(users.length).toEqual(1);

                    request(app)
                        .post('/api/user')
                        .send({name: 'lavender', password: '162533', email: '1242230116@qq.com', phone: '18829292614'})
                        .expect(409, function (err, data) {
                            finish(done)(err);
                        });
                });
            });
        });
        it('四项中有未填写的项', (done) => {
            request(app)
                .post('/api/user')
                .send({
                    name: '', password: '164533',
                    email: '2545026281@qq.com', phone: ''
                })
                .expect(400, 'Please finish the form', finish(done))
        });
        it('邮箱格式错误', (done) => {
            const correctData = {
                name: 'bikuo',
                password: '164533',
                phone: '18829289385'
            };
            request(app)
                .post('/api/user')
                .send(Object.assign({}, correctData, { email: '2545026281qq.com' }))
                .expect(400, 'The email is error', finish(done))
        });

        it('电话形式错误', (done) => {
            const correctData = {
                name: 'xiao',
                password: '164533',
                email: '25456281@qq.com'
            };
            request(app)
                .post('/api/user')
                .send(Object.assign({}, correctData, {phone: '189385'}))
                .expect(400, 'The phone number is error', finish(done))
        });

        it('电话包含其他符号', (done) => {
            const correctData = {
                name: 'zhang',
                password: '164533',
                email: '2545026281@qq.com'
            };
            request(app)
                .post('/api/user')
                .send(Object.assign({}, correctData, {phone: '188292923g1'}))
                .expect(400, 'The phone number is error', finish(done))
        });
    });

    afterEach((done) => {
        db.close(finish(done));
    });
});
