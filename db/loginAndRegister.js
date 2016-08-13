/**
 * Created by Leonard on 16/8/13.
 */
var mongoose = require('mongoose');


var User = mongoose.model('User', {
    name: String,
    password: String,
    email:String,
    phone:Number,
});

mongoose.connect("mongodb://localhost/freetravel-db");

exports.insert = function (request, response) {
    let name = request.body.name;
    let password = request.body.password;
    let email = request.body.email;
    let phone = request.body.phone;
    User.findOne({name: name}, function (e, docs) {
        if (e) response.send(e.message);

        if (docs == null) {
            console.log(name, password,email,phone);
            var user = new User({
                name: name,
                password: password,
                email:email,
                phone:phone
            });
            user.save(function (err) {
                console.log('save status:', err ? 'failed' : 'success');
                response.send('success');

            });
        }
        else {
        //
        response.send('error');
        // var tpl = '<script>alert("用户已存在")</script>';
        // response.send(tpl); //你传回去的HTML码流将在客户的浏览器中执行
        // response.redirect('./signin');
        }
    });

};

exports.login = function (request, response) {
    let name = request.body.name;
    let password = request.body.password;
    console.log('---finding---');
    User.findOne({name: name, password: password}, function (e, docs) {
        if (e) response.send(e.message);

        if (docs != null) {
            // response.location('https://www.baidu.com');
            // response.redirect('./');
            response.send('success');
            // response.send(docs+'<br><br>login success');
        } else {
            // response.redirect('./login');
            response.send('error');

        }
    });

};

exports.remove = function(request, response) {
    // mongoose.connect("mongodb://localhost/mongodb-find-demo-db");
    let name = request.body.name;
    let password = request.body.password;
    User.remove({
        name: name,
        password:password
    }, function(e) {
        if (e) response.send(e.message);
        else response.send("删除成功");
    });
}