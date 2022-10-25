import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Todo from "./pages/Todo";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/todo/*'} component={Todo}></Route>
        <Route path={'/'} component={MainPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
