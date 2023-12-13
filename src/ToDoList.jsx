import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    value && addTask(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Enter a title for this task…"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    {
      text: 'Like',
      isCompleted: false,
    },
    {
      text: 'Comment',
      isCompleted: false,
    },
    {
      text: 'Subscribe',
      isCompleted: false,
    },
  ]);

  const addTask = (text) => setTasks([...tasks, { text }]);

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <h1>Active Quests</h1>
      {tasks.map((task, index) => (
        <div className="todo" key={index}>
          <span
            onClick={() => toggleTask(index)}
            className={task.isCompleted ? 'todo-text todo-completed' : 'todo-text'}
          >
            {task.text}
          </span>
          <button onClick={() => removeTask(index)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      ))}
      <AddTaskForm addTask={addTask} />
    </div>
  );
};

export default ToDoList;
