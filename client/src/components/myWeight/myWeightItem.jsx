import React from 'react';
import '../myWeight/myWeight.css';

function MyWeightItem({ userWeight, index, completeTodo }) {
  return (
    <div
      className="weight"
      // style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {userWeight.wieght}
      <div>
        <button onClick={() => completeTodo(index)}>addWeight</button>
        {/* <button onClick={() => removeTodo(index)}>x</button> */}
      </div>
    </div>
  );
}
export default MyWeightItem;
