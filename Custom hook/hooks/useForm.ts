import React, { useState } from "react";
import { IStudent } from "../type";
const initialValue = {
  id: "",
  name: "",
  age: 0,
  absents: 0,
  isGraduated: false,
  coursesList: [],
};
const useForm = (onSubmit:( (std: IStudent) => void)) => {
  const [data, setData] = useState<IStudent>(initialValue);

  const handleChange = (filed: string, value: any) => {
    setData({ ...data, [filed]: value });
  };
  const handleAddStudent = () => {
    const newStudent: IStudent = { ...data, id: Date.now().toString() };
    onSubmit(newStudent);
    handleReset();
  };
  const handleReset = () => {
    setData(initialValue);
  };
  const handleCourse = (list: string[]) => {
    const newCourse = { ...data, coursesList: list };
    setData(newCourse);
  };
  return {
     data,
    handleChange,
    handleAddStudent,
    handleCourse,
    handleReset,
  };
};

export default useForm;
