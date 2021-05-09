import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
export type PrivateRouteProps = RouteProps & {
  key: string;
};

export const PrivateRoute = ({ ...props }: PrivateRouteProps) => {
  return <Route {...props} />;
};
