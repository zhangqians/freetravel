import Hello from './hello.jsx';
import Index from './index.jsx';
import SignIn from './component/sign-in.jsx'
import App from './app.jsx';
import Rent from './component/index-rent.jsx';
import Register from './component/register.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
require('jquery');
require("bootstrap-webpack");

const router = <Router history={hashHistory}>
    <Route path="/" component={Index}>

    </Route>
    <Route path='/main' component={App}>
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

console.log($('#content').text());

if (module.hot) {
    module.hot.accept();
}