import React from 'react';

class Hello extends React.Component {
    render() {
        return (<div>
            <div className="container">
                <div className="col-md-12">
                    <h2 className="margin-bottom-15 text-center">登                      录</h2>
                    <form className="form-horizontal templatemo-container templatemo-login-form-1 margin-bottom-30" role="form" >
                        <div className="form-group">
                            <div className="col-xs-8">
                                <div className="control-wrapper">
                                    <label for="username" className="control-label fa-label"><i className="fa fa-user fa-medium"></i></label>
                                    <input type="text" className="form-control" id="username" placeholder="Username" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12">
                                <div className="control-wrapper">
                                    <label for="password" className="control-label fa-label"><i className="fa fa-lock fa-medium"></i></label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12">
                                <div className="checkbox control-wrapper">
                                    <label>
                                        <input type="checkbox" />记住我
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12">
                                <div className="control-wrapper">
                                    <input type="submit" value="Log in" className="btn btn-info" />
                                        <div className="text-right pull-right">忘记密码？</div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="text-center">
                        <a href="#" className="templatemo-create-new pull-left">注册一个新账号<i className="fa fa-arrow-circle-o-right"></i></a>
                    </div>
                </div>
            </div>
            </div>)
    }
}

export default Hello;