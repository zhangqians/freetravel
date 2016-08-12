import React from 'react';
import Img01 from './img/tent-001.jpg';
import Img02 from './img/tent-02.jpg';
import Img03 from './img/raincoat-01.jpg';
import Img04 from './img/umbrella-01.jpg';

import './index-rent.css';

class Rent extends React.Component {
    render() {
        return (<div className="main-rent-lxy">
            <div className="rent-left-lxy">
                <a href="#">出租租赁</a>
            </div>

            <div className="rent-right-lxy">
                <div className="img-lxy-main">
                    <a  href="#"><img src={Img01} /><p>帐篷001</p></a>
                </div>
                <div className="img-lxy">
                    <a className="img-lxy-01" href="#"><img src={Img02} /><p>帐篷002</p></a>
                </div>
                <div className="img-lxy">
                    <a className="img-lxy-02" href="#"><img src={Img03} /><p>雨衣001</p></a>
                </div>
                <div className="img-lxy">
                    <a className="img-lxy-03" href="#"><img src={Img04} /><p>伞001</p></a>
                </div>
            </div>
            </div>)
    }
}

export default Rent;