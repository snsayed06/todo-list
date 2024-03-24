import React from "react";
import { Route,  Switch} from "react-router-dom";
import TodoList from "../src/components/TodoList";
import Home from '../src/Pages/Home'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/todo' component={TodoList} />
      </Switch>
    </div>
  );
};

export default Routes;
