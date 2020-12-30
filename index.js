const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

const config = require('./config/key');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,
{
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected!'))
  .catch(err=>console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register',(req,res)=>{
  
  // 회원 가입 할 때 필요한 정보들을 client에서 가져오면 
  // 그것들을 데이터 베이스에 넣어준다.

  //req.body에는 json형식으로 데이터가 담겨있음
    const user = new User(req.body)


    user.save((err, userInfo)=>{//mongodb메소드 정보들이 user에 저장됨
      if(err) return res.json({success: false,err})

      return res.status(200).json({
        success: true
      })
    }) 
})

app.post('/login',(req,res)=>{

  //요청된 이메일을 데이터베이스에서 일치하는지 검색
  User.findOne({email: req.body.email},(err,user)=>{
    if(!user){
      return json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      })
    }
  // 이메일이 맞다면 비밀번호가 같은지 검증

    user.comparePassword(req.body.password , (err, isMatch) =>{

      if(!isMatch)
      return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다."})
  
      // 비밀번호가 맞다면 토큰 생성
      user.generateToken((err,user) =>{
        
      })

    })

  })
  

  


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})