import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import About from './About'
import './index.css';

ReactDOM.render(
  <Profile />,
  document.getElementById('root')
);

ReactDOM.render(
  <About />,
  document.getElementById('about')
)
