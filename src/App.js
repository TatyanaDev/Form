import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styles from './index.module.scss';
import SignInPage from './pages/SignIn';

const App = props => {
  const ourURL = window.location.href;
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            {ourURL === 'http://localhost:3000/' ? (
              <li className={styles.position}>
                <Link className={styles.signup} to='./sign-up'>
                  Signup
                </Link>
              </li>
            ) : (
              <li className={styles.position}>
                <Link className={styles.signup} to='./'>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={SignInPage} />
          <Route path='/sign-up' />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
