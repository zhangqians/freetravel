import React from 'react';
import Tent001Img from '../images/index-rent/tent-001.jpg';
import Tent02Img from '../images/index-rent/tent-02.jpg';
import RainCoat01Img from '../images/index-rent/raincoat-01.jpg';
import Umbrella01Img from '../images/index-rent/umbrella-01.jpg';
import {Link} from 'react-router';

import '../css/index-rent.css';

export default class RentIndex extends React.Component {
    // constructor(){
    //
    // }
    render() {
        return (<div className="main-rent">
            <div className="rent-left">
                <a href="#">出租租赁</a>
            </div>

            <div className="rent-right">

                <div className="img-main">
                    <Link to="/goods-details"><img src='../images/index-rent/tent-001.jpg'/><p>帐篷001</p></Link>
                </div>
                <div className="img">
                    <a className="img-01" href="#"><img src='../images/index-rent/tent-02.jpg'/><p>帐篷002</p></a>
                </div>
                <div className="img">
                    <a className="img-02" href="#"><img src='../images/index-rent/raincoat-01.jpg'/><p>雨衣001</p></a>
                </div>
                <div className="img">
                    <a className="img-03" href="#"><img src='../images/index-rent/umbrella-01.jpg'/><p>伞001</p></a>
                </div>
            </div>
        </div>)
    }
}

// export default RentIndex;
