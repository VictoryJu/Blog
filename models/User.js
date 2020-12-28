const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10; //10자리인 salt를 만들어서 암호화함
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //스페이스바 즉 공백을 없애주는 역할을 한다.
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: { //token유효기간
        type: Number
    }
});

userSchema.pre('save', function(next) {
    let user = this;  //user가 입력한 패스워드를 가져옴
    
    if (user.isModified('password')) {
    // 비밀번호 암호화 
    bcrypt.genSalt(saltRounds, function(err, salt){
        if(err) return next(err)

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err)
            user.password = hash
            next()
            })
        })
    }
})

const User = mongoose.model('User', userSchema);

module.exports = { User };