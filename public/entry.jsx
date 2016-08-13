import SignIn from './signIn/jsx/signIn.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
require('jquery');
require("bootstrap-webpack");

ReactDOM.render(
  <SignIn />,
  document.getElementById("content")
);

// use jquery
console.log($('#content').text());

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
  module.hot.accept();
}
