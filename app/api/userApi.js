import express from 'express';
import {User} from '../db/schema';
import _ from 'lodash';


const router = express.Router();

function getUserInformation(req) {
    const data = req.body;
    return data;
}

function isUserInformationLegal(data) {
    const regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    const regPhone = /^(\+86)?(1[0-9]{10})$/;

    console.log(regEmail.test(data.email));
    console.log(regPhone.test(data.phone) + 'Phone');

    if (data.name == '' || data.password == '' || data.email == '' || data.phone == '') {
        console.log(data);
        console.log('--data is null--');
        // res.status(400).send('Please finish the form');
        return {legal: false, message: 'Please finish the form'};
    }
    else if (regEmail.test(data.email) == false) {
        // res.status(400).send('The email is error');
        return {legal: false, message: 'The email is error'};
    }
    else if (data.phone.length != 11 || regPhone.test(data.phone) == false) {
        // res.status(400).send('The phone number is error');
        return {legal: false, message: 'The phone number is error'};
    }
    else return {legal: true, message: 'legal is true'};
}


router.post('/', function (req, res, next) {
    debugger;
    getUserInformation(req);
    const data = getUserInformation(req);
    console.log('data:' + data.name);
    const legal = isUserInformationLegal(data);
    console.log('legal:' + legal);
    console.log(legal.message);
    if (legal.legal == true) {
        User.findOne({name: data.name}, function (err, docs) {
            if (err) return next(err);

            if (docs == null) {
                var user = new User({
                    name: data.name,
                    password: data.password,
                    email: data.email,
                    phone: data.phone
                });
                user.save(function (err) {
                    console.log('save status:', err ? 'failed' : 'success');
                    res.status(201).send('register success');

                });
            }
            else if (docs != null) {

                res.status(409).send('Same name in db.');
            }
            else {
                res.status(201).send('?');
            }
        });
    }
    else {
        res.status(400).send(legal.message);
    }


});


export default router;
