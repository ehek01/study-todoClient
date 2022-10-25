import React, {useState} from 'react';
import axios from "axios";
import {host} from "../pages/MainPage";

const postTodo = async (todo) => {
  const {data} = await axios.post(`${host}/todo/add`, todo);
  return data;
}

const initState = {
  title: ''
}

function TodoAdd(props) {

  const [todo, setTodo] = useState({...initState});


  const onClickBtn = () => {
    postTodo(todo)
      .then((value) => {
        console.log('추가완료!!');
        setTodo({...initState});
      })
      .catch(() => {alert('추가를 하는도중 에러가 발생했습니다.')});
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