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
    } else{
        next() //비밀번호를 바꾸지 않는 경우에는 next()를 넣어주어 함수를 탈출하게한다.
    }
})


userSchema.methods.comparePassword = function(plainPassword,cb){
    // plainPassword 입력한 패스워드 와 암호화된 패스워드가 같은지 체크해야함
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return cb(err),
        cb(null, isMatch)
    }) 
}

const User = mongoose.model('User', userSchema);

module.exports = { User };