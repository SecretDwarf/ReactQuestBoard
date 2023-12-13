import {doc, updateDoc} from "firebase/firestore"
import AddTaskForm from "./components/AddTaskForm";
import { db } from "./firebase";
import { useState } from "react";

export default function Home () {
    
    const [tasks, setTasks] = useState([{
        text: "Start your Quest",
        isCompleted: false
      },{
        text: "Login/Create Account",
        isCompleted: false
      },{
        text: "Customize Avatar",
        isCompleted: false
      }]);

  const addTask = text => setTasks([...tasks, { text }]);

  const toggleTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
    docRef = doc(db, "users", "test")
    updateDoc(docRef, {
        tasks: newTasks
    })
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <div className="todo">
          <span onClick={() => toggleTask(index)} className={task.isCompleted ? "todo-text todo-completed" : "todo-text"}>
            {task.text}
          </span>
          <button onClick={() => removeTask(index)}><i class="fas fa-trash-alt"></i></button>
        </div>
      ))}
      <AddTaskForm addTask={addTask} />
    </div>
  );
}

// ReactDOM.render(<ToDoList />, document.getElementById('app'));