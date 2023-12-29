import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default App;
