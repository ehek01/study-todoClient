import React from 'react';
import TodoAdd from "../../components/TodoAdd";
import axios from "axios";
import {host} from "../MainPage";

const getList = async () => {
  const {data} = await axios.get(`${host}/todo/listall`);
  return data;
}

function TodoListPage(props) {

  getList().then((value) => {console.log(value)})

  return (
    <div>
      <TodoAdd />
      <hr/>
      <h1>Todo List</h1>
    </div>
  );
}

export default TodoListPage;