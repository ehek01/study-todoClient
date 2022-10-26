import React, {useState} from 'react';
import axios from "axios";
import {host} from "../pages/MainPage";
import {useDispatch} from "react-redux";
import {changeRefresh} from "../reducers/TodoSlice";

const postTodo = async (todo) => {
  const {data} = await axios.post(`${host}/todo/add`, todo);
  return data;
}

const initState = {
  title: ''
}

function TodoAdd(props) {
  const [todo, setTodo] = useState({...initState});
  const dispatch = useDispatch();


  const onClickBtn = () => {
    postTodo(todo)
      .then((value) => {
        setTodo({...initState});
        dispatch(changeRefresh())
        console.log('Todo 추가완료!!');
      })
      .catch(() => {alert('Todo를 추가 하는도중 에러가 발생했습니다.')});
  }

  const onChangeEvent = (prop, value) => {
    todo[prop] = value;
    setTodo({...todo});
  }

  return (
    <div>
      <h1>Todo Add</h1>
      <input type={"text"} value={todo.title} onChange={(e) => {onChangeEvent('title', e.target.value)}}/>
      <button onClick={() => {onClickBtn()}}>add</button>
    </div>
  );
}

export default TodoAdd;