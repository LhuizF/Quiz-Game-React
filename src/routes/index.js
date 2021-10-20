import { Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Questions from '../pages/Questions';
import Score from '../pages/Score';
import Records from '../pages/Records';
import Page404 from '../pages/Page404';

export default function Routes() {
    return (
        <Switch>
            <PrivateRoute
                exact
                path="/Quiz-Game-React/"
                component={Home}
                header
            />
            {/* <PrivateRoute
                exact
                path="/Quiz-Game-React/login"
                component={Login}
            />
            <PrivateRoute
                exact
                path="/Quiz-Game-React/register"
                component={Register}
            /> */}
            <PrivateRoute
                exact
                path="/Quiz-Game-React/score"
                component={Score}
            />
            <PrivateRoute
                exact
                path="/Quiz-Game-React/records"
                component={Records}
            />
            <PrivateRoute
                exact
                path="/Quiz-Game-React/questions/:theme"
                component={Questions}
            />
            <PrivateRoute path="*" component={Page404} />
        </Switch>
    );
}
