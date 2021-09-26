import { Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Questions from '../pages/Questions';
import Score from '../pages/Score';

export default function Routes() {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Home} header />
            <PrivateRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/register" component={Register} />
            <PrivateRoute exact path="/score" component={Score} />
            <PrivateRoute
                exact
                path="/questions/:theme"
                component={Questions}
            />
        </Switch>
    );
}
