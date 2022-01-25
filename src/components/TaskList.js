// src/components/TaskList.js

import React from "react";

import { Task } from "./Task";

function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const events = {
    onPinTask,
    onArchiveTask,
  };
  if (loading) {
    return <div className="list-items">Loading...</div>;
  }
  if (!tasks.length) {
    return <div className="list-items">Empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

export { TaskList }