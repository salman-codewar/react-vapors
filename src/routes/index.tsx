import Dashboard from '../screens/dashboard';
import { PrivateRouteProps } from './PrivateRoute';

const PrivateRoutes: PrivateRouteProps[] = [
  {
    path: '/dashboard',
    key: '/Dashboard',
    exact: true,
    component: Dashboard
  }
];
export { PrivateRoutes };
