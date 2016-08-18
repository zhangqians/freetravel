import express from 'express';
import {User} from '../db/schema';


const router = express.Router();

function getUserInformation(req) {
    const data = req.body;
    return data;
}

function isUserInformationLegal(data) {
    const regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    const regPhone = /^(\+86)?(1[0-9]{10})$/;


    if (data.name == '' || data.password == '' || data.email == '' || data.phone == '') {
        return {legal: false, message: 'Please finish the form'};
    }
    else if (regEmail.test(data.email) == false) {
        return {legal: false, message: 'The email is error'};
    }
    else if (data.phone.length != 11 || regPhone.test(data.phone) == false) {
        return {legal: false, message: 'The phone number is error'};
    }
    else return {legal: true, message: 'legal is true'};
}


router.post('/', function (req, res, next) {
    getUserInformation(req);
    const data = getUserInformation(req);
    const legal = isUserInformationLegal(data);
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
        });
    }
    else {
        res.status(400).send(legal.message);
    }


});

export default router;
