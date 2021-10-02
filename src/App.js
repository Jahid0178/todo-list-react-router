import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Todos from "./components/Todos/Todos";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/todos">
          <Todos></Todos>
        </Route>
        <Route path="/todos/:todoId">
          <Todo></Todo>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
