import express from 'express';
import {User} from '../db/schema';
let router = express.Router();
import {validateEmail, validatePhone} from '../shared/user-field-validation'


function existEmpty(data) {
    if (data.name == '' || data.password == '' || data.email == '' || data.phone == '') {
        console.log(data);
        console.log('--data is null--');
        return false;
    }
    return true;
}

function isEmailRight(data) {
    if (validateEmail(data) == false) {
        return false;
    }
    return true;
}

function isPhoneRight(data) {
    if (validatePhone(data) == false) {
        return false;
    }
    return true;
}

function isUserInformationLegal(data) {
    const isEmpty = existEmpty(data);
    const isEmail = isEmailRight(data);
    const isPhone = isPhoneRight(data);

    if(isEmpty === false){
        return {legal: false, message: 'Please finish the form'};
    }else if(isEmail === false){
        return {legal: false, message: 'The email is error'};
    }else if(isPhone === false){
        return {legal: false, message: 'The phone number is error'};
    }
    return {legal: true, message: 'legal is true'};
}

router.post('/', function (req, res, next) {
    const data = req.body;
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
