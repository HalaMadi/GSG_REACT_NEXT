import TodoItem from "../TodoItem/TodoItem";
import { ITodo } from "../../type";
import "./style.css"
interface IProps {
  items: ITodo[];
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: (id: number) => void;
}
const AllTodos = (props: IProps) => {
  return (
    <div>
      {props.items.map((item) => (
        <div key={item.id}>
          <TodoItem
            data={item}
            onToggle={props.onToggle}
            onDelete={props.onDelete}
          />
        </div>
      ))}
    </div>
  );
};

export default AllTodos;
