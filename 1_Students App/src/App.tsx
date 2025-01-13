import { useState, useEffect, useReducer } from "react";
import "./App.css";
import { IStudent } from "./types";

import Student from "./components/student/student.component";
import AddForm from "./components/add-form/add-form.component";
import useLocalStorage from "./hooks/local-storage.hook";
import reducer from "./state/Reducer";

function App() {
  // const [studentsList, setStudentsList] = useState<IStudent[]>([]);
  const [totalAbsents, setTotalAbsents] = useState(0);
  const [state, dispatch] = useReducer(reducer,{ std:[]})
  const { storedData } = useLocalStorage(state.std, "students-list");


  useEffect(() => {
    const stdList: IStudent[] = storedData || [];
    const totalAbs = stdList.reduce((prev, cur) => {
      return prev + cur.absents;
    }, 0);
    setTotalAbsents(totalAbs);
    dispatch({type:'INIT_STUDENT',payload:stdList})
  }, [storedData]);

  const removeFirst = () => {
    dispatch({type:'REMOVE_FIRST'})
  };

  const handleAbsentChange = (id: string, change: number) => {
    setTotalAbsents(totalAbsents + change);
   dispatch({type:'STUDENT_ABSENT',payload:{id,change}})

  };
  const handleAddStudent = (newStudent: IStudent) => {
    dispatch({type:"ADD_STUDENT",payload:newStudent})
  };

  const h1Style = { color: "#69247C", fontSize: "24px" };

  return (
    <div className="main wrapper">
      <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
      <AddForm className="addForm" onSubmit={handleAddStudent} />
      <div className="stats">
        <button onClick={removeFirst}>POP Student</button>
        <b style={{ fontSize: "12px", fontWeight: 100, color: "gray" }}>
          Total Absents {totalAbsents}
        </b>
      </div>
      {state.std.map((student) => (
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          age={student.age}
          absents={student.absents}
          isGraduated={student.isGraduated}
          coursesList={student.coursesList}
          onAbsentChange={handleAbsentChange}
        />
      ))}
    </div>
  );
}

export default App;
