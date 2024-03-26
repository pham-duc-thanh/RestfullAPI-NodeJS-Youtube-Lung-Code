const jwt = require('jsonwebtoken');
const _APP = require('./_APP');

// make => tạo mã
let make =  function(user) {
    return new Promise((resolve, reject) => {
        jwt.sign({data: user}, _APP.ACCESS_TOKEN, {
                algorithm: "HS256",
                expiresIn: _APP.TOKEN_TIME_LIFE,
        },
        function(err, _token) {
            if(err) {
                return reject(err)
            }
            return resolve(_token);
        }
        );
    });
}


// check => xác thực mã đúng, sai, hêt hạn
let check = function (tokent) {
    return new Promise((resolve, reject) => {
        jwt.verify(tokent, _APP.ACCESS_TOKEN, function(err, data) {
            if(err) {
                return reject(err);
            }
            return resolve(data);
            
        });
    })
}

module.exports = {
    make: make,
    check: check
}