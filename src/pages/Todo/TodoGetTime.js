import React, {useState} from 'react';
import axios from "axios";
import {host} from "../MainPage";

const getTimeApi = async () => {
  const {data} = await axios.get(`${host}/time`);
  return data;
}

function TodoGetTime(props) {
  const [time, setTime] = useState('');

  const onClickTimeBtn = () => {
    getTimeApi()
      .then(value => setTime(value))
      .catch(() => alert('서버에게서 응답이 없습니다'));
  }

  return (
    <div>
      <h1>현재 시간 : {time}</h1>
      <button onClick={onClickTimeBtn}>시간확인하기</button>
    </div>
  );
}

export default TodoGetTime;