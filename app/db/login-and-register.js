import {User} from './schema';


exports.insert = function (req, res) {
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
};

exports.login = function (req, res) {
    let name = req.body.name;
    let password = req.body.password;
    console.log('---finding---');
    User.findOne({name: name, password: password}, function (err, docs) {
        if (err) res.send(err.message);

        if (docs != null) {
            res.json({name: docs.name, type: 'success'});
        } else {
            res.send('error');
        }
    });
};

exports.remove = function (req, res) {
    let name = req.body.name;
    let password = req.body.password;
    User.remove({
        name: name,
        password: password
    }, function (e) {
        if (e) res.send(e.message);
        else res.send("删除成功");
    });
}
