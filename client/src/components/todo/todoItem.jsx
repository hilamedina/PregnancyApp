import React from 'react';
import '../todo/appToDo.css';

function TodoItem({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.task}
      <div className="two-btn">
        <button className="btn-todo1" onClick={() => completeTodo(index)}>
          👌🏽
        </button>
        <button className="btn-todo2" onClick={() => removeTodo(index)}>
          🗑
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
