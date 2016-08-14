import React from 'react';
import '../css/sign-in.css';

class SignIn extends React.Component {
    login() {
        let name = $('#name').val();
        let password = $('#password').val();

        $.ajax({
            url: './login',
            type: 'POST',
            async: true,
            contentType: 'application/json',
            data: JSON.stringify({name: name, password: password}),

            success(result) {
                if (result == 'success') {
                    alert('success');
                    self.location = '/#/rent'
                }
                else if (result == "error") {
                    alert('用户不存在');
                }
            },
            error(result){
                if (result == "error") {
                    alert('用户-存在');
                }
            }
        });
    }

    render() {
        return (<div>
            <div className="content">
                <div className="top-part">
                    <div className="tou-img"></div>
                    <div className="left-hand"></div>
                    <div className="right-hand"></div>
                </div>
                <p className="username">
                    <span className="user-logo"></span>
                    <input className="input-field" type="text" placeholder="请输入用户名或邮箱" id="name"/>
                </p>
                <p className="password">
                    <span className="password-logo"></span>
                    <input className="input-field" id="password" type="password" placeholder="请输入密码"/>
                </p>
                <div className="down-footer">
                    <p className="footer-text">
                        <span className="pull-right">
                            <a className="setTextColor">忘记密码?</a>
                        </span>
                        <span className="pull-right">
                            <a className="setTextColor">注册</a>
                            <a className="sign-in" onClick={this.login}>登录</a>
                        </span>
                    </p>
                </div>
            </div>
        </div>)
    }
}

export default SignIn;