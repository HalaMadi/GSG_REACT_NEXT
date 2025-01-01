import { ITodo } from "../../type";

interface IProps {
  data: ITodo[];
}
const TodoData = (props: IProps) => {
  const created = props.data.length;
  const urgent = props.data.filter((data) => data.isUrgent).length;
  const done = props.data.filter((data) => data.isDone).length;
  return (
    <div
    // style={{
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "center",
    // }}
    >
      <div>
        <span>{created}</span>
        <b>created task</b>
      </div>
      <div>
        <span>{urgent}</span>
        <b>Urgent task</b>
      </div>
      <div>
        <span>{done}</span>
        <b>completed task</b>
      </div>
    </div>
  );
};

export default TodoData;
