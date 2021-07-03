import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import UserInfo from './UserInfo';
import Clock from './Clock'
import Greeting from './Greeting'
import List from './List'
import Form from './Form'
import Calculator from './Calculator';
import WelcomeDialog from './Conposition'
const numbers = [1, 2, 3];
ReactDOM.render(
    <div>
      <UserInfo/>
      <Counter/>
      <Clock date={new Date()}/>
      <Greeting LoggedIn={true}/>
      <List numbers={numbers}/>
      <Form/>
      <Calculator/>
      <WelcomeDialog/>
    </div>,
  document.getElementById('root')
);
