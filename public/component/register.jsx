import React from 'react';
import '../css/register.css'

class Register extends React.Component {
    commit() {
        let name = $('#name').val();
        let password = $('#password').val();
        let email = $('#email').val();
        let phone = $('#phone').val();

        $.ajax({
            url: './api/user',
            type: 'POST',
            async: true,
            contentType: 'application/json',
            data: JSON.stringify({name: name, password: password, email: email, phone: phone}),

            success(result) {
                console.log(result);
                if (result == 'success') {
                    alert('success');
                    self.location = '/#/rent'
                }
                // else if (result.responseText == "error") {
                //     alert('用户已存在');
                // }
            },
            error(result){
                // console.log(result);
                // if (result.responseText == "error") {
                    alert(result.responseText);
                // }
            }
        });
    }

    render() {
        return (
            <div className="register">
                <div className="title"><h3>欢迎注册</h3></div>
                <div className="form-group">
                    <label>用户名</label>
                    <input type="name" className="form-control" id="name"
                           placeholder="请设置用户名" required/>
                </div>
                <div className="form-group">
                    <label>邮箱</label>
                    <input type="email" className="form-control" id="email"
                           placeholder="请输入邮箱" required/>
                </div>
                <div className="form-group">
                    <label>手机号码</label>
                    <input type="tel" className="form-control" id="phone"
                           placeholder="请输入手机号码" required pattern="/^1[3|4|5|7|8]\d{9}$/"/>
                </div>
                <div className="form-group">
                    <label>设置密码</label>
                    <input type="password" className="form-control" id="password"
                           placeholder="请输入密码" required pattern="^[a-zA-Z]\w{5,17}$"/>
                </div>
                <div className="form-group">
                    <label>确认密码</label>
                    <input type="password" className="form-control" id="confirmPassword"
                           placeholder="请确认密码" required pattern="^.{6,18}$"/>
                </div>
                <input type="submit" value="注册" className="btn btn-primary" onClick={this.commit}/>
                <span>有账号?<a className="to_register">登陆 </a></span>
            </div>
        )
    }
}

export default Register;
