const express = require('express')
const app = express()
const config = require('./config/key');
const users = require('./api/userinfo/userinfoHandler');

app.use('/users',users);

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))
  
const port = 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))