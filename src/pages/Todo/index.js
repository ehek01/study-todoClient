import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";
import TodoListPage from "./TodoListPage";
import TodoLayout from "../../templates/TodoLayout";
import TodoGetTime from "./TodoGetTime";

function Index(props) {
  return (
    <TodoLayout>
      <Switch>
        <Route path={'/todo/list'} component={TodoListPage}></Route>
        <Route path={'/todo/time'} component={TodoGetTime}></Route>
      </Switch>
    </TodoLayout>
  );
}

export default Index;