import { useState } from "react";
import TaskForm from "./Components/TaskForm/TaskForm";
import TodoData from "./Components/Todo-Data/TodoData";
import AllTodos from "./Components/AllTodos/AllTodos";
import { ITodo } from "./type";

const App = () => {
  const [taskList, setTaskList] = useState<ITodo[]>([]);
  const date = new Date();

  const handleNewTask = (newTask: ITodo) => {
    setTaskList([...taskList, newTask]);
  };
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkBox = e.target.dataset["id"];
    const newTask = taskList.map((task) =>
      task.id == Number(checkBox) ? { ...task, isDone: !task.isDone } : task
    );
    setTaskList(newTask);
  };
  const handleDelete = (id: number) => {
    const deletedTask = taskList.filter((deleted) => deleted.id != id);
    setTaskList(deletedTask);
  };
  return (
    <>
      <div className="appComponent" >
        <h1>Todo App </h1>
        <p>{date.toDateString()}</p>
        <TaskForm onSubmit={handleNewTask} />
        <TodoData data={taskList} />
        <AllTodos
          items={taskList}
          onToggle={handleCheck}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default App;
