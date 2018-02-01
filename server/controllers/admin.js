const userModel = require('../model/users/system_user');
const jwt = require('jsonwebtoken');
const secret = 'aaa';

module.exports = {
    async adminLogin(ctx) {
        let data = {};

        function verificationUse() {
            let user = ctx.request.body;
            user.password = md5(user.password);
            return new Promise((resolve, reject) => {
                userModel.findOne(user, function (err, use) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(use)
                    }
                })
                // userModel.create(user, function (err, use) {
                //     if (err) {
                //         reject(err)
                //     } else {
                //         resolve(use)
                //     }
                // })
            });
        }

        await verificationUse().then((res) => {
            if (res === null) {
                data.err_code = '1000';
                data.conent = '用户名或密码错误'
            } else {
                let token = jwt.sign({
                    username: res.username
                }, secret, {
                    expiresIn: 10000 * 6 * 60
                });
                // console.log(token);
                data.err_code = '0000';
                data.conent = '登录成功';
                data.username = res.username;
                data.token = token;
            }
        }).catch((err) => {
        });

        ctx.body = data;
    },
    async verification(ctx) {
        let token = ctx.request.query.token;
        jwt.verify(token, secret, function (err, decoded) {
            let data = {}
            data.status = true
            if (!err) {
                console.log(decoded)
                data.username = decoded.username
            } else {
                data.status = false
            }
            ctx.body = data
        })
    }
};

function md5(str) {
    return require('crypto').createHash('md5').update(str).digest('hex');
}