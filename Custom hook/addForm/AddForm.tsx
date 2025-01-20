import { IStudent } from "../../type";
import CoursesForm from "../CoursesForm/CoursesForm";
import useForm from "../../hooks/useForm";

interface IProps {
  onSubmit: (std: IStudent) => void;
}
const AddForm = (props: IProps) => {
const {data,handleChange,handleAddStudent,handleCourse,handleReset}=useForm(props.onSubmit);
  return (
    <div className="addForm">
      <div>
        <label htmlFor="studentName">Student Name : </label>
        <input
          type="text"
          id="studentName"
          name="name"
          value={data.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Student age : </label>
        <input
          type="text"
          id="age"
          name="age"
          value={data.age}
          onChange={(e) => handleChange("age", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="isGraduated">Is Graduated :</label>
        <input
          type="checkbox"
          id="isGraduated"
          name="isGraduated"
          checked={data.isGraduated}
          onChange={(e) => handleChange("isGraduated", e.target.checked)}
        />
      </div>
      <div>
        <CoursesForm value={data.coursesList}   onSubmit={handleCourse} />
      </div>
      <div className="Action">
        <button onClick={handleAddStudent}>Add Student</button>
        <button onClick={handleReset}>Clear</button>
      </div>
    </div>
  );
};

export default AddForm;
