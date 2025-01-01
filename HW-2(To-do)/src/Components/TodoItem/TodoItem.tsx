import { Trash } from "@phosphor-icons/react";
import { ITodo } from "../../type";
import "./style.css"; // Add the CSS here

interface IProps {
  data: ITodo;
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ data, onToggle, onDelete }: IProps) => {
  const taskClass = data.isUrgent ? "todoItem urgent" : "todoItem";
  return (
    <div className={taskClass}>
      <input
        type="checkBox"
        id="completeTask"
        onChange={onToggle}
        data-id={data.id}
      />
      <span className="task">{data.task}</span>
      <span>
        <Trash
          size={24}
          color="#910303"
          weight="fill"
          onClick={() => onDelete(data.id)}
          className="deleteIcon"
        />
      </span>
    </div>
  );
};

export default TodoItem;
