import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function Routes() {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Home} header />
            <PrivateRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/register" component={Register} />
        </Switch>
    );
}
