import React from "react";
import rent from "./icon/rent.png";
import free from "./icon/free.png";
import friend from './icon/friend.png';

class brife extends React.Component {
    render() {
        return (
            <div className="container summary">
                <div className="row" id="summary-container">
                    <div className="col-md-4">
                        <img className="img-circle" src={rent}/>
                        <h2>出租</h2>
                        <p>让你出门更轻松</p>
                        <p><a className="btn btn-default" href="#" role="button">点我了解</a></p>
                    </div>

                    <div className="col-md-4">
                        <img className="img-circle" src={free}/>
                        <h2>个性化</h2>
                        <p>让生活更轻松</p>
                        <p><a className="btn btn-default" href="#" role="button">点我了解</a></p>
                    </div>
                    <div className="col-md-4">
                        <img className="img-circle" src={friend}/>
                        <h2>旅友</h2>
                        <p>驴友带你飞</p>
                        <p><a className="btn btn-default" href="#" role="button">点我了解</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default brife;