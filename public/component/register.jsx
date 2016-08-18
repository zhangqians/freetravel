import React, {Component} from "react";
import request from 'superagent';
require('../css/register.css');
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        }
    }

    render() {
        return <form onSubmit={this.onSumbit.bind(this)}>
            <div className="register">
                <div className="title"><h3>欢迎注册</h3></div>
                <div className="form-group">
                    <label>用户名</label>
                    <input type="name" className="form-control" id="name"
                           placeholder="请设置用户名" required
                           value={this.state.name}
                           onChange={this.onHandlerName.bind(this)}/>
                </div>
                <div className="form-group">
                    <label>邮箱</label>
                    <input type="email" className="form-control" id="email"
                           placeholder="请输入邮箱" required
                           value={this.state.email}
                           onChange={this.onHandlerEmail.bind(this)}/>
                </div>
                <div className="form-group">
                    <label>手机号码</label>
                    <input type="tel" className="form-control" id="phone"
                           placeholder="请输入手机号码" required pattern="^(\+86)?(1[0-9]{10})$"
                           value={this.state.phone}
                           onChange={this.onHandlerPhone.bind(this)}/>
                </div>
                < div className="form-group">
                    <label>设置密码</label>
                    <input type="password" className="form-control" id="password"
                           placeholder="请输入密码" required pattern="^.{6,18}$"
                           value={this.state.password}
                           onChange={this.onHandlerPassword.bind(this)}/>
                </div>
                <div className="form-group">
                    <label>确认密码</label>
                    <input type="password" className="form-control" id="confirm-password"
                           placeholder="请确认密码" required pattern="^.{6,18}$"
                           value={this.state.confirmPassword}
                           onChange={this.onHandlerConfirmPassword.bind(this)}/>
                </div>
                <input type="submit" value="注册" className="btn btn-primary"/>
                <span>有账号?<a className="to_register">登陆 </a></span>
            </div>
        </form>
    }

    onHandlerName(event) {
        this.setState({
            name: event.target.value
        });
    }

    onHandlerEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    onHandlerPhone(event) {
        this.setState({
                phone: event.target.value
            }
        )
    }

    onHandlerPassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    onHandlerConfirmPassword(event) {
        this.setState({
            confirmPassword: event.target.value
        })
    }

    onSumbit(event) {
        event.preventDefault();
        if (this.state.password != this.state.confirmPassword) {
            alert('confirm-password and password is not the same one!');
        }
        else {
            request.post('/api/user')
                .send({
                    name: this.state.name,
                    email: this.state.email,
                    phone: this.state.phone,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword
                })
                .end((err, res) => {
                    if (err) {
                        alert(res.statusCode + ',' + res.text);
                        return console.error(err + ',' + res.text)
                    }
                    console.log(res.statusCode);
                    if (res.statusCode == 201) {
                        alert(res.statusCode + ",register success!");
                        self.location = '/#/indexRent'
                    }
                    console.log(res.text);

                });
        }

    }
}


