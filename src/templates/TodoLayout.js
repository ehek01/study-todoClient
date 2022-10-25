import React from 'react';
import {Link} from "react-router-dom";

function TodoLayout(props) {
  return (
    <div>
      <div>
        <Link to={'/'}>Main으로 이동</Link>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default TodoLayout;