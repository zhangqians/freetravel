import React from 'react';
import Navs from './login-navs/login-navs.jsx';
import TabsNavs from './navs-lxy/navs.jsx';


export default class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                {/*导航栏*/}
                <div>
                    <div className="conta">
                        <TabsNavs/>
                    </div>
                    <div className="pull-right loginNavs">
                        <Navs/>
                    </div>
                </div>
                {/*body*/}
                <div>
                    {this.props.children}
                </div>

            </div>
        );
    }
}