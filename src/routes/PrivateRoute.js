import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({
    component: Component,
    isClosed,
    header,
    ...rest
}) {
    const isLoggedIn = false;

    if (isClosed && !isLoggedIn) {
        return <Redirect to="/login" />;
    }

    // eslint-disable-next-line
    return <Route {...rest} component={Component} />;
}

PrivateRoute.defaultProps = {
    isClosed: false,
    header: false
};

PrivateRoute.propTypes = {
    isClosed: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
    header: PropTypes.bool
};
