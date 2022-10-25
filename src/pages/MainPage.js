import React from 'react';
import {Link} from "react-router-dom";

export const host = 'http://192.168.0.100:8080';

function MainPage(props) {
  return (
    <div>
      <h1>Main Page</h1>
      <div>
        <Link to={'/todo/list'}>Todo List</Link>
      </div>
      <div>
        <Link to={'/todo/time'}>GetTime</Link>
      </div>
    </div>
  );
}

export default MainPage;