import React from 'react';

const todo = () => {
  function Todo({ todo }) {
    return <div className="todo">{todo.text}</div>;
  }

  function AppToDo() {
    const [todos, setTodos] = React.useState([
      { text: 'Learn about React' },
      { text: 'Meet friend for lunch' },
      { text: 'Build really cool todo app' },
    ]);

    return (
      <div className="app-todo">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} />
          ))}
        </div>
      </div>
    );
  }
};

export default todo;
