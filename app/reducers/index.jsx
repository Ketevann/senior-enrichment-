import { combineReducers } from 'redux'



const initialState = { students: [], campuses: [] }

const rootReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_STUDENT':
      const newState = Object.assign({}, state, { students: action.students })
      return newState;

    case 'EDIT_STUDENT':
      const edited = state.students.map(student => (
        action.student.id === student.id ? action.student : student
      ));
      return { students: edited }

    case 'GET_STUDENT':
      const statenew = Object.assign({}, state, { students: action.students })
      return statenew

    case 'REMOVE_STUDENT':
      let arr = [];
      if (state.students.length > 1) {
        arr = state.students.filter((student) => {
          return (student.id !== action.id)
        });
      }
      return { students: arr, campuses: state.campuses }

    case 'GET_CAMPUS':
      return Object.assign({}, state, { campuses: action.campuses })


    case 'ADD_CAMPUS':
      const newCampusState = Object.assign({}, state, { campuses: action.campuses })
      return newCampusState;

    case 'REMOVE_CAMPUS':
      let campusArr = [];
      if (state.campuses.length > 1) {
        campusArr = state.campuses.filter((campus) => {
          return (campus.id !== action.id)
        });
      } return { students: state.students, campuses: campusArr }

    case 'EDIT_CAMPUS':
      const editedCampus = state.campuses.map(campus => (
        action.campus.id === campus.id ? action.campus : campus
      ));
      return { campuses: editedCampus, students: state.students }

    default: return state;
  }
};



export default rootReducer;
