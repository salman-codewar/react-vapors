import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import { useState, useEffect } from 'react';
import { PrivateRoute } from './routes/PrivateRoute';
import './assets/fonts/Montserrat-Regular.ttf';
import { Router, Switch, Route } from 'react-router';
import PrimaryLayout from './layouts/primaryLayout';
import LandingPage from './screens/landingPage';
import { createBrowserHistory } from 'history';
import { getSession, isSession } from './helpers';
import { ApolloProvider } from '@apollo/client';
import setClient from './api/ApolloClient';
import { PrivateRoutes } from './routes';
import AppContext from './AppContext';
import { ROUTES } from './constants';

let history = createBrowserHistory();

function App() {
  const [loggedIn, setLoggedIn] = useState(isSession());
  const providerValues = {
    loggedIn,
    setLoggedIn
  };

  useEffect(() => {
    if (!getSession()) {
      setLoggedIn(false);
    }
    // eslint-disable-next-line
  }, [getSession()]);

  useEffect(() => {
    if (!loggedIn) {
      history.push(ROUTES.ROOT);
    }
  }, [loggedIn]);

  const client = setClient();
  return (
    <ApolloProvider client={client}>
      <AppContext.Provider value={providerValues}>
        <div className="App">
          <Router history={history}>
            <Switch>
              {!loggedIn ? (
                <Route path={ROUTES.ROOT} exact component={() => <LandingPage history={history} />} />
              ) : (
                <PrimaryLayout history={history}>
                  {PrivateRoutes.map(({ key, ...rest }) => {
                    return <PrivateRoute {...rest} key={key} />;
                  })}
                </PrimaryLayout>
              )}
            </Switch>
          </Router>
        </div>
      </AppContext.Provider>
    </ApolloProvider>
  );
}
export default App;
