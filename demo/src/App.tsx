import * as React from 'react';
import { hot } from 'react-hot-loader';
import { renderRoutes } from 'react-router-config';
import { HashRouter as Router } from 'react-router-dom';
import routeConfig from './router/routerConfig'

// addVConsole()

let AppRoot = () => {
    return (
        <Router>{renderRoutes(routeConfig)}</Router>
    );
}

if (process.env.NODE_ENV === 'development') {
    AppRoot = hot(module)(AppRoot)
}

export default AppRoot
