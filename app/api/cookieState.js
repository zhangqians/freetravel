import express from 'express';
import sha1 from 'sha1';
import {User} from '../db/schema';
import _ from 'lodash';

const router = express.Router();

// router.get('/', function (req, res) {
//     const token = req.cookies['token'];
//     console.log(token);
//     // if (validateToken(token)) {
//     //     const username = getUsernameFromToken(token);
//     //     return res.json({username, greeting: 'Hello, logged user!'});
//     // }
//     // res.sendStatus(401);
//     if (validateToken(token)) {
//         const username = getUsernameFromToken(token);
//         return res.json({username, greeting: 'Hello, logged user!'});
//     }
//     res.sendStatus(401);
// });
//
// function generateToken(username, password) {
//     return username + ':' + sha1(password);
// }
//
// function getUsernameFromToken(token) {
//     const separatorIndex = _.lastIndexOf(token, ':');
//     return token.substring(0, separatorIndex);
// }
//
// function validateToken(token) {
//     if (token === null || token.length === 0 || !token.includes(':')) {
//         return false;
//     }
//     const username = getUsernameFromToken(token);
//     const user = findUser(username, function (err, name) {
//         if (name) {
//             const {password} = user;
//             return generateToken(username, password) === token;
//         }
//     });
//     // if (user) {
//     //     const {password} = user;
//     //     return generateToken(username, password) === token;
//     // }
//     // return false;
// }
//
// function findUser(username, callback) {
//     // return _.find(users, {username});
//     User.findOne(username, (err, doc) => {
//         callback(null, 123);
//     });
// }
//
// export default router;
router.get('/', function (req, res) {
    const info = req.cookies['info'];

    if (info === null || info.length === 0 || !info.includes(':')) {
        return false;
    }
    const name = getUserIdFromInfo(info);
    User.findOne({name: name}, function (err, user, next) {
        if (err) return next(err);
        if (user) {
            const password = user.password;
            if (generateInfo(name, password) === info) {
                return res.status(200).send({name, password});
            }
            return res.sendStatus(401);
        }
    });
});

function getUserIdFromInfo(info) {
    const separatorIndex = _.lastIndexOf(info, ':');
    return info.substring(0, separatorIndex);
}
function generateInfo(name, password) {
    return name + ':' + sha1(password);
}

export default router;

