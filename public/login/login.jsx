import React, {Component} from 'react';
require('./login.css');
class LoginForm extends React.Component {
    render() {
        return (
            <button type="submit" className="btn" name="submit">登录</button>
        );
    }
}
class LoginUserName extends React.Component {
    render() {

        return (
            <div className="login__row">


                <svg className="login__icon name svg-icon" viewBox="0 0 20 20">
                    <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8"/>
                </svg>
                <input type="text" className="form-control" placeholder="登录用户名" required/>

            </div>
        );
    }
}
class LoginUserPassword extends React.Component {
    render() {
        return (
            <div className="login__row">
                <svg className="login__icon pass svg-icon" viewBox="0 0 20 20">
                    <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0"/>
                </svg>
                <input type="password" className="form-control" name="password" placeholder="登录密码" required/>
            </div>
        );
    }
}
class MainPage extends React.Component {
    render() {
        return (


            <div className="demo">
                <div className="login1">
                    <div className="login__check"></div>
                    <div className="login">
                        <div className="login__form">
                            <form>
                                <LoginUserName/>
                                <LoginUserPassword/>
                                <LoginForm/>
                            </form>
                            <p className="login__signup">没有轻遇账号？ &nbsp;<a>免费注册一个</a></p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default MainPage;
