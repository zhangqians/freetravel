import express from 'express';
import {User} from '../db/schema';


const router = express.Router();

router.post('/', function (req, res, next) {
    console.log('----usersApi----');
    let name = req.body.name;
    let password = req.body.password;
    let email = req.body.email;
    let phone = req.body.phone;
    User.findOne({name: name}, function (err, docs) {
        if (err) res.send(err.message);

        if (docs == null) {
            console.log(name, password, email, phone);
            var user = new User({
                name: name,
                password: password,
                email: email,
                phone: phone
            });
            user.save(function (err) {
                console.log('save status:', err ? 'failed' : 'success');
                res.send('success');
            });
        }
        else {
            res.send('error');
        }
    });

});


export default router;
