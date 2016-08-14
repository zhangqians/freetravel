import React from 'react';
import {Link} from 'react-router';

class TabsNavs extends React.Component {
    render() {
        return (<div>
            <ul className="nav nav-tabs">
                <li role="presentation" className="active"><a href="#">Home</a></li>
                <li role="presentation"><a href="#">Profile</a></li>
                <li role="presentation"><a href="#">Messages</a></li>
            </ul>
        </div>)
    }
}

export default TabsNavs;