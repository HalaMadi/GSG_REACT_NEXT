import { ITodo } from "../../type";
import "./style.css"
interface IProps {
  data: ITodo[];
}
const TodoData = (props: IProps) => {
  const created = props.data.length;
  const urgent = props.data.filter((data) => data.isUrgent).length;
  const done = props.data.filter((data) => data.isDone).length;
  return (
    <div
    className="Dashboard"
    >
      <div className="taskInfo">
        <span>{created}</span>
        <b>created task</b>
      </div>
      <div className="taskInfo">
        <span>{urgent}</span>
        <b>Urgent task</b>
      </div>
      <div className="taskInfo">
        <span>{done}</span>
        <b>completed task</b>
      </div>
    </div>
  );
};

export default TodoData;
