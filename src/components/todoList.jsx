import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const handleInputChange = (event) => {
    setInputTask(event.target.value);
  };

  const handleAddTask = () => {
    if (inputTask.trim() !== "") {
      setTasks([...tasks, inputTask]);
      setInputTask("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={inputTask}
          onChange={handleInputChange}
          placeholder="Enter your task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
