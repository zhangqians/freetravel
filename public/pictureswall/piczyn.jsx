import React from 'react';
import beauty from './pictrue/beauty.jpeg';
import country from './pictrue/country.jpg';
import friend from './pictrue/friends.jpg';
import tent from './pictrue/tent.jpg';
import water from './pictrue/water.jpg';
require("./csszyn.css");


class Pic extends React.Component {
    render() {
        return (
            <div id="ad-carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#ad-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#ad-carousel" data-slide-to="1"></li>
                    <li data-target="#ad-carousel" data-slide-to="2"></li>
                    <li data-target="#ad-carousel" data-slide-to="3"></li>
                    <li data-target="#ad-carousel" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item active">
                        <img src={beauty} alt="1 slide"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h2>遇见世界，遇见你</h2>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={country} alt="2 slide"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h2>身未动，心与世界邂逅</h2>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={friend} alt="3 slide"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h2>去追随</h2>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={tent} alt="4 slide"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h2>星空下的你星空下的你，如此美丽</h2>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={water} alt="5 slide"/>

                        <div className="container">
                            <div className="carousel-caption">
                                <h2>爱风景，爱生活</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="left carousel-control" href="#ad-carousel" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
                <a className="right carousel-control" href="#ad-carousel" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
            </div>
        )
    }
}
export default Pic;