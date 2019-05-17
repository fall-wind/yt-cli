import Login from '../pages/login'
import App from '../pages/app';
import Page1 from '../pages/page1';

export const routeConfig = [
    {
        component: App,
        // exact: true, // ?????
        path: '/',
        routes: [{
            exact: true,
            component: Page1,
            path: '/page1',
        }]
    },
    {
        component: Login,
        path: '/login',
    },
];

export default routeConfig
