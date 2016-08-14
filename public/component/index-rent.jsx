import React from 'react';
import Tent001Img from '../images/tent-001.jpg';
import Tent02Img from '../images/tent-02.jpg';
import RainCoat01Img from '../images/raincoat-01.jpg';
import Umbrella01Img from '../images/umbrella-01.jpg';

import '../css/index-rent.css';

class RentIndex extends React.Component {
    render() {
        return (<div className="main-rent">
            <div className="rent-left">
                <a href="#">出租租赁</a>
            </div>

            <div className="rent-right">
                <div className="img-main">
                    <a href="#"><img src={Tent001Img}/><p>帐篷001</p></a>
                </div>
                <div className="img">
                    <a className="img-01" href="#"><img src={Tent02Img}/><p>帐篷002</p></a>
                </div>
                <div className="img">
                    <a className="img-02" href="#"><img src={RainCoat01Img}/><p>雨衣001</p></a>
                </div>
                <div className="img">
                    <a className="img-03" href="#"><img src={Umbrella01Img}/><p>伞001</p></a>
                </div>
            </div>
        </div>)
    }
}

export default RentIndex;