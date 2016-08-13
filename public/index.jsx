/**
 * Created by Leonard on 16/8/13.
 */
import React from 'react';
import Brife from './brief/brizyn.jsx';
import Pic from './pictureswall/piczyn.jsx';
import Navs from './login-navs/login-navs.jsx';
import TabsNavs from './navs-lxy/navs.jsx';


export default class Index extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                {/*导航栏*/}
                <div className="container-fluid">
                    <div>
                        <div className="conta">
                            <TabsNavs/>
                        </div>
                        <div className="pull-right loginNavs">
                            <Navs/>
                        </div>
                    </div>
                    {/*/!*body*!/*/}
                    {/*<div>*/}
                    {/*{this.props.children}*/}
                    {/*</div>*/}
                </div>

                <div>
                    <Pic/>
                </div>

                <div>
                    <Brife/>
                </div>
            </div>
        );
    }
}