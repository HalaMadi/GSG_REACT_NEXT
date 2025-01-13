import { IStudent } from "../types";

interface IState {
  std: IStudent[];
}

interface Action {
  type: string;
  payload?: any;
}
const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case 'INIT_STUDENT':{
      if(state.std.length===0){
        return {...state,std:action.payload}
      }
      return state
    }
    case "ADD_STUDENT": {
      const newStudent = action.payload;
      return { ...state, std: [...state.std, newStudent] };
    }
    case "REMOVE_FIRST": {
      return { ...state, std: state.std.slice(1) };
    }
    case "STUDENT_ABSENT": {
      return {
        ...state,
        std: state.std.map((std) =>
          std.id === action.payload.id
            ? { ...std, absents: std.absents + action.payload.change }
            : std
        ),
      };
    }
    default:{
      return state;
    }
  }

};
export default reducer;
