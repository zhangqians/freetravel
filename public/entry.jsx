import Index from './index.jsx';
import OrderPage from './component/order.jsx';
import Rent from './component/rent.jsx';
import GoodsDetails from './component/rent-details.jsx';
import SignIn from './component/sign-in.jsx'
import Hello from './hello.jsx';
import IndexRent from './component/index-rent.jsx';
import Register from './component/register.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
require('jquery');
require("bootstrap-webpack");

const router = <Router history={hashHistory}>
    <Route path="/" component={Index}>
        <IndexRoute component={Hello}/>
        <Route path='/login' component={SignIn}/>
        <Route path='/register' component={Register}/>
        <Route path='/indexRent' component={IndexRent}/>
        <Route path='/rent' component={Rent}/>
        <Route path='/goodsDetails' component={GoodsDetails}/>
        <Route path='/orderPage' component={OrderPage}/>
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