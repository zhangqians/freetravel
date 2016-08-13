import Hello from './hello.jsx';
import SignIn from './signIn/jsx/signIn.jsx';
import App from './app.jsx';
import Rent from './index-rent-lxy/index-rent.jsx';
import Register from './register/register-qufan.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
require('jquery');
require("bootstrap-webpack");


const router = <Router history={hashHistory}>
    <Route path='/' component={App}>
        <IndexRoute component={Hello}/>
        <Route path='/login' component={SignIn}/>
        <Route path='/register' component={Register}/>
        <Route path='/rent' component={Rent}/>
    </Route>
</Router>;


ReactDOM.render(
    router,
    document.getElementById("content")
);

// use jquery
console.log($('#content').text());

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
    module.hot.accept();
}
