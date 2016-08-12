import React from 'react';
import {Link} from 'react-router';

class Navs extends React.Component {
    render() {
        return (<div>
            <ul className="nav nav-pills pull-right">
                <li role="presentation" className="active"><Link to="#">登录</Link></li>
                <li role="presentation"><Link to="/register">注册</Link></li>
            </ul>
        </div>)
    }
}

export default Navs;