import React from 'react';
import Logo from './img/logo.png';
import './navs.css';
import {Link} from 'react-router';

class Nav extends React.Component {
    render() {
        return (<div>
            <nav>
                <div className="pull-left">
                    <h2>FreeTravel</h2>
                </div>
                <div className="logo-lxy">
                    <img src={Logo}/>
                </div>
                <div>
                    <ul className="nav-tabs _nav-ul">
                        <li className="li-lxy"><Link to="/rent">首页</Link></li>
                        <li className="li-lxy"><Link to="#">出租租赁</Link></li>
                        <li className="li-lxy"><a href="#">个性服务</a></li>
                        <li className="li-lxy"><a href="#">驴友匹配</a></li>
                        <li className="li-lxy"><a href="#">一站到底</a></li>
                        <li className="li-lxy"><a href="#">关于我们</a></li>
                    </ul>
                </div>
            </nav>
        </div>)
    }
}

export default Nav;