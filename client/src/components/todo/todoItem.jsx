import React from 'react';
import '../todo/appToDo.css';

function TodoItem({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.task}
      <div>
        <button onClick={() => completeTodo(index)}>Status</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}
export default TodoItem;
