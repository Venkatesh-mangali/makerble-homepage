// src/components/TaskBoard.js
import React, { useState } from 'react';
import './TaskBoard.css';

function TaskBoard() {
  const [tasks, setTasks] = useState(['Sample Task 1', 'Sample Task 2']);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleCompleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="task-board">
      <h3>Task Board</h3>
      <div className="task-input">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <span>{task}</span>
            <button onClick={() => handleCompleteTask(index)}>Complete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskBoard;
