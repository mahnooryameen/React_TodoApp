import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

export default function App() {
  const [todo, setTodo] = useState('');
  const [todolist, setTodolist] = useState([]);

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodolist([...todolist, { text: todo, done: false }]);
      setTodo('');
    }
  };

  const markAsDone = (index) => {
    const updatedList = [...todolist];
    updatedList[index].done = true;
    setTodolist(updatedList);
  };

  const removeTodo = (index) => {
    const updatedList = todolist.filter((_, i) => i !== index);
    setTodolist(updatedList);
  };

  return (
    <div className="App">
      <img src="https://static.vecteezy.com/system/resources/previews/001/270/244/original/studying-and-learning-online-concept-vector.jpg" className='img-fluid rounded-circle shadow-lg my-5' alt="" srcset="" />
      <div className="input-container">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter your todo" className='border border-warning rounded'
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className="todo-list">
        {todolist.map((todoItem, index) => (
          <div key={index} className={`todo-item ${todoItem.done ? 'done' : ''}`}>
            <span>{todoItem.text}</span>
            {!todoItem.done && (
              <>
                <button onClick={() => markAsDone(index)}>Mark as Done</button>
                <button onClick={() => removeTodo(index)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
