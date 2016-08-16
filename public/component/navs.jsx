import React from 'react';
import LogoPic from '../images/navs/logo.png';
import '../css/navs.css';
import {Link} from 'react-router';

class Nav extends React.Component {
    render() {
        return (<div>
            <nav>
                <div className="pull-left">
                    <Link to='/'><h2>FreeTravel</h2></Link>
                </div>
                <div className="logo">
                    <img src={LogoPic}/>
                </div>
                <div>
                    <ul className="nav-tabs nav-ul">
                        <li className="li"><Link to="/indexRent">首页</Link></li>
                        <li className="li"><Link to="/rent">出租租赁</Link></li>
                        <li className="li"><Link to="#">个性服务</Link></li>
                        <li className="li"><Link to="#">驴友匹配</Link></li>
                        <li className="li"><Link to="#">一站到底</Link></li>
                        <li className="li"><Link to="#">关于我们</Link></li>
                    </ul>
                </div>
            </nav>
        </div>)
    }
}

export default Nav;