import React from 'react';
import '../css/signIn.css';

class SignIn extends React.Component {
    render() {
        return (<div>
            <div className="top_div"></div>
            <div className="cont">
                <div className="onePart">
                    <div className="tou"></div>
                    <div className="initial_left_hand" id="left_hand"></div>
                    <div className="initial_right_hand" id="right_hand"></div>
                </div>
                <p className="pipe"><span
                    className="u_logo"></span>
                    <input className="ipt" type="text" placeholder="请输入用户名或邮箱" />
                </p>
                <p className="pos">
                    <span className="p_logo"></span>
                    <input className="ipt" id="password" type="password" placeholder="请输入密码"  />
                </p>
                <div className="forget">
                    <p className="setMargin">
                        <span className="setPos" >
                            <a className="setColor">忘记密码?</a>
                        </span>
                        <span className="setPos">
                            <a className="setColor setM" >注册</a>
                            <a className="signIn">登录</a>
                        </span>
                    </p>
                </div>
            </div>
        </div>)
    }
}

export default SignIn;