import { useState } from "react";
export default function AddTask ( addTask ) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      value && addTask(value)
      setValue(value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Our next adventure is..."
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
    );
  }