import React, {Component} from 'react';
import request from 'superagent';
import {hashHistory} from 'react-router';

export default class PersonalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'unknown',
            password: 'unknown'
        }
    }

    componentWillMount() {
        request
            .get('/api/personal')
            .end((err, res) => {
                console.log(err);
                if (err) {
                    if (res.statusCode === 401) {
                        alert('please login!');
                        return hashHistory.push('/login');
                    } else {
                        return alert(err);
                    }
                }
                console.log("statusCode:"+res.statusCode);
                const {name, password} = res.body;
                this.setState({name, password});
            })
    }

    render() {
        return <div>
            <div>Personal Page</div>
            <div>Username: {this.state.name}</div>
            <div>Greeting: {this.state.password}</div>
        </div>;
    }
}
