import React from "react";
import { Route,  Switch} from "react-router-dom";
import Todo from "../src/Pages/Todo";
import Home from '../src/Pages/Home'
import PaginationPage from '../src/Pages/Pagination'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/todo' component={Todo} />
        <Route exact path='/pagination' component={PaginationPage} />
      </Switch>
    </div>
  );
};

export default Routes;
