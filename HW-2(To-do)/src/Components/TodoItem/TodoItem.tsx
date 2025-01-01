import { Trash } from "@phosphor-icons/react";
import { ITodo } from "../../type";

interface IProps {
  data: ITodo;
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ data, onToggle, onDelete }: IProps) => {
  return (
    <div>
      <input
        type="checkBox"
        id="completeTask"
        onChange={onToggle}
        data-id={data.id}
      />
      <span>{data.task}</span>
      <span>
        <Trash
          size={32}
          color="#910303"
          weight="fill"
          onClick={() => onDelete(data.id)}
        />
      </span>
      <span>Is Urgent : {data.isUrgent.toString()}</span>
    </div>
  );
};

export default TodoItem;
