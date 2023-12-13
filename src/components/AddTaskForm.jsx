import { useState } from "react";
export default function AddTaskForm ( addTask ) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      value && addTask(value)
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Enter a title for this task…"
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit"><i class="fas fa-plus"></i></button>
      </form>
    );
  }