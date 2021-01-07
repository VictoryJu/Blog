import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';
import Nav from './components/views/NavBar/NavBar';

function App() {
  // useState는 ["value",value를 정정하는 함수]의 형태로 이루어져있다.
  // ES6의 destructuring문법 
  // a와b변수에 각각 useState 값을 담는다 
  // state는 변수대신 쓰는 데이터 저장공간이다.
  // state는 변경되면 html이 자동으로 재렌더링이 된다.
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/main" component={Auth(Nav, true)} />
        </Switch>
      </div>
    </Router>
  
  );
}

export default App;

