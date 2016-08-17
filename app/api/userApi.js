import express from 'express';
import {User} from '../db/schema';
import _ from 'lodash';


const router = express.Router();

router.post('/', function (req, res, next) {
    console.log('----usersApi----');
    // const name = req.body.name;
    // const password = req.body.password;
    // const email = req.body.email;
    // const phone = req.body.phone;
    // const confirmPassword = req.body.confirmPassword;
    const data = req.body;
    const regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    const regPhone = /^(\+86)?(1[0-9]{10})$/;
    console.log(regEmail.test(data.email));
    console.log(regPhone.test(data.phone) + 'Phone');
    if (data.name == '' || data.password == '' || data.email == '' || data.phone == '') {
        console.log(data);
        console.log('--data is null--');
        // res.send('error').status(400);
        res.status(400).send('Please finish the form');
    }
    else if (data.phone.length != 11 || regPhone.test(data.phone)==false) {
        res.status(400).send('The phone number is error');
    }
    // else if(!data.email.includes('@')){
    else if (regEmail.test(data.email) == false) {
        res.status(400).send('The email is error');
    }

    else {
        User.findOne({name: data.name}, function (err, docs) {
            // if (err) res.send(err.message);
            if (err) return next(err);

            // if (docs == null) {
            //     var user = new User({
            //         name: data.name,
            //         password: data.password,
            //         email: data.email,
            //         phone: data.phone
            //     });
            //     user.save(function (err) {
            //         console.log('save status:', err ? 'failed' : 'success');
            //         // res.send('success');
            //         // console.log(name);
            //         res.sendStatus(201);
            //         // res.status(201).send('success');
            //
            //     });
            // }
            if (docs != null) {
                res.status(409).send('Same name in db.');
            }
            else {
                res.status(201).send('success');
                // res.sendStatus(201);
            }
        });
    }

});


export default router;
