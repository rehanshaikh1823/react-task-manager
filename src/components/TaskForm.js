import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContextProvider";
const TaskForm = () => {
  const { addTask, clearAllTask, editItem, editTask, tasks } = useContext(
    TaskListContext
  );

  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        value={title}
        type="text"
        className="task-input"
        placeholder="Add Task..."
        required
      />

      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? "Edit Task" : "Add Task"}
        </button>

        <button
          disabled={tasks.length ? false : true}
          onClick={clearAllTask}
          className="btn clear-btn"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
