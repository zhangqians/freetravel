import React from 'react';
import {Link} from 'react-router';

class Login extends React.Component {
    render() {
        return (<div>
            <form>
                <button>submit</button>
            </form>
            <Link to='/login'>login</Link>
        </div>)
    }
}

export default Login;