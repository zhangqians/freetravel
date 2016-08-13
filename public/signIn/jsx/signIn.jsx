import React from 'react';
import '../css/signIn.css';

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
            // data: {name :name,password:password},

            success(result) {
//                    $("#div1").html(result);
                if(result=='success'){
                    alert('success');
                    // location.href='/rent'
                    self.location='/#/rent'
                }
                else if(result == "error") {
                    // location.href='#/'
                    alert('用户不存在');
                }
            },
            error(result){
                if (result == "error") {
                    // location.href='#/'
                    alert('用户-存在');
                }
            }
        });

    }

    render() {
        return (<div>
            <div className="top_div"></div>
            <div className="cont">
                <div className="onePart">
                    <div className="tou"></div>
                    <div className="initial_left_hand" id="left_hand"></div>
                    <div className="initial_right_hand" id="right_hand"></div>
                </div>
                <p className="pipe">
                    <span className="u_logo"></span>
                    <input className="ipt" type="text" placeholder="请输入用户名或邮箱" id="name" />
                </p>
                <p className="pos">
                    <span className="p_logo"></span>
                    <input className="ipt" id="password" type="password" placeholder="请输入密码" />
                </p>
                <div className="forget">
                    <p className="setMargin">
                        <span className="setPos" >
                            <a className="setColor">忘记密码?</a>
                        </span>
                        <span className="setPos">
                            <a className="setColor setM" >注册</a>
                            <a className="signIn" onClick={this.login}>登录</a>
                        </span>
                    </p>
                </div>
            </div>
        </div>)
    }
}

export default SignIn;