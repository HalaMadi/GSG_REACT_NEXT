import React, { useState } from "react";
import { ITodo } from "../../type";
import "./style.css";
interface IProps {
  onSubmit: (newTask: ITodo) => void;
}
const TaskForm = (props: IProps) => {
  const [task, setTask] = useState<string>("");
  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const task = e.currentTarget["taskForm"].value;
    const isUrgent = e.currentTarget["urgent"].checked;
    if (task.length > 3) {
      const newTask = {
        id: Date.now(),
        task: task,
        isUrgent,
        isDone: false,
      };
      props.onSubmit(newTask);
      setTask("");
    }
  };
  return (
    <>
      <form onSubmit={handleAddTask} className="taskForm">
        <div
          style={{ display: "flex", flexDirection: "column", margin: "5px" }}
        >
          <input
            type="text "
            id="taskForm"
            placeholder="Type Task here..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Add New Task</button>
          <div className="custom-checkbox">
        <input
          type="checkbox"
          id="urgent"
        />
            <label htmlFor="urgent">Urgent task</label>
      </div>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
