import React from 'react';
import TodoItem from './todoItem';
import TodoForm from './todoForm';
import { useState, useEffect } from 'react';
import {
  getTodoData,
  addTodoData,
  setStatusTodo,
  removeItem,
} from '../../Api/Api';
import '../todo/appToDo.css';

const AppToDo = (props) => {
  const addTodo = (text) => {
    addTodoData(setTodoData, text);
  };

  const changeTodoStatus = (index) => {
    setStatusTodo(
      setTodoData,
      todoData[index].task,
      !todoData[index].isCompleted
    );
  };

  const deleteTodoItem = (index) => {
    removeItem(setTodoData, todoData[index].task);
  };

  const [todoData, setTodoData] = useState([]);
  useEffect(() => {
    getTodoData(setTodoData);
  }, []);

  // useEffect(() => {
  //   if (todoData.length === 0) {
  //     getTodoData(setTodoData);
  //   }

  return (
    <>
      <div className="app">
        <div className="list">
          {todoData.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              completeTodo={changeTodoStatus}
              removeTodo={deleteTodoItem}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
      <button onClick={props.returnToMainView}>Back</button>
    </>
  );
};

export default AppToDo;
