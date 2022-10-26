import React, {useEffect, useState} from 'react';
import TodoAdd from "../../components/TodoAdd";
import axios from "axios";
import {host} from "../MainPage";
import {useSelector} from "react-redux";

const getList = async () => {
  const {data} = await axios.get(`${host}/todo/listall`);
  return data;
}

function TodoListPage(props) {
  const [todos, setTodos] = useState([]);
  const refresh = useSelector(state => state.todoReducer.refresh); // TodoSlice에 있는 상태값.

  useEffect(() => {
    getList().then((arr) => {
      setTodos(arr)
    })
  }, [refresh]);

  return (
    <div>
      <TodoAdd/>
      <hr/>
      <h1>Todo List</h1>
      {todos.map((item) => <li key={item.tid}>{item.tid} - {item.title} </li>)}
    </div>
  );
}

export default TodoListPage;