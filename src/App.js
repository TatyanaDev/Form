import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

class App extends Component {
  render () {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={SignInPage} />
            <Route path='/sign-up' component={SignUpPage} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
