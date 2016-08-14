import React from 'react';
import BrifeIntroduciton from './component/brief-introduction.jsx';
import PicturesWall from './component/pictures-wall.jsx';
import LoginAndRegisterNavs from './component/login-and-register-nav.jsx';
import TabsNavs from './component/navs.jsx';


export default class Index extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container-fluid">
                    <div>
                        <div className="conta">
                            <TabsNavs/>
                        </div>
                        <div className="pull-right loginNavs">
                            <LoginAndRegisterNavs/>
                        </div>
                    </div>
                </div>

                <div>
                    <PicturesWall/>
                </div>

                <div>
                    <BrifeIntroduciton/>
                </div>
            </div>
        );
    }
}