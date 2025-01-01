import React, { useState } from "react";
import { ITodo } from "../../type";

interface IProps {
  onSubmit: (newTask: ITodo) => void;
}
const TaskForm = (props: IProps) => {
  const [task, setTask] = useState<ITodo[]>([
    { id: 0, task: "", isUrgent: false, isDone: false },
  ]);
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
    }
  };
  
  return (
    <>
      <form onSubmit={handleAddTask}>
        <div
          style={{ display: "flex", flexDirection: "column", margin: "5px" }}
        >
          <input type="text " id="taskForm" placeholder="Type Task here..." />
          <button type="submit">Add New Task</button>
          <div>
            <label htmlFor="urgent">Urgent task</label>
            <input type="checkbox" id="urgent" name="urgent" />
          </div>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
