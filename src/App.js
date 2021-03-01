import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styles from './index.module.scss';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

class App extends Component {
  constructor (props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick () {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick () {
    this.setState({ isLoggedIn: false });
  }

  render () {
    const ourURL = window.location.pathname;
    return (
      <>
        <BrowserRouter>
          <nav>
            <ul>
              {ourURL === '/' ? (
                <li
                  onClick={this.handleLogoutClick}
                  className={styles.position}
                >
                  <Link className={styles.signup} to='/sign-up'>
                    Signup
                  </Link>
                </li>
              ) : (
                <li onClick={this.handleLoginClick} className={styles.position}>
                  <Link className={styles.signup} to='./'>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={SignInPage} />
            <Route path='/sign-up' component={SignUpPage}/>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
