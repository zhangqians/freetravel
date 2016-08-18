/**
 * Created by zhagnian on 16-8-17.
 */

'use strict';
import request from 'supertest';
import app from '../app/server';
import finish from './finish';
import {User} from '../app/db/schema';

describe('注册api测试', () => {

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

    it('用户名已经存在', (done) => {
        request(app)
            .post('/api/user')
            .send({
                name: 'lavender', password: '162533',
                email: '1242230116@qq.com', phone: '18829292614'
            })
            .expect(409,'Same name in db.',finish(done) )
    });

    it('四项中有未填写的项', (done) => {
        request(app)
            .post('/api/user')
            .send({
                name: '', password: '164533',
                email: '2545026281@qq.com', phone: ''
            })
            .expect(400,'Please finish the form', finish(done))
    });

    it('邮箱格式错误', (done) => {
        request(app)
            .post('/api/user')
            .send({
                name: 'biku', password: '164533',
                email: '2545026281qq.com', phone: '18829289385'
            })
            .expect(400,'The email is error', finish(done))
    });

    it('电话形式错误', (done) => {
        request(app)
            .post('/api/user')
            .send({
                name: 'xiao', password: '164533',
                email: '25456281@qq.com', phone: '1882'
            })
            .expect(400,'The phone number is error', finish(done))
    });
    it('电话包含其他符号', (done) => {
        request(app)
            .post('/api/user')
            .send({
                name: 'zhang', password: '164533',
                email: '2545026281@qq.com', phone: '188292923g1'
            })
            .expect(400,'The phone number is error', finish(done))
    });
});
