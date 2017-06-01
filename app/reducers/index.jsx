import { combineReducers } from 'redux'

const url =["../public/img/luna.jpg", "../public/img/mars.jpg"]

const initialState = {students: [], campuses: [
  { name: "mars", imageUrl: 'http://media.salon.com/2015/09/mars-614x412.jpg' },
  { name: 'Luna', imageUrl: 'http://www.marthadebayle.com/wp-content/uploads/2015/12/Captura-de-pantalla-2015-12-23-a-las-10.58.29.png' },
  { name: 'terra', imageUrl: 'http://serc.carleton.edu/images/earthlabs/globe_from_terra.jpg' },
  { name: 'titan', imageUrl: 'http://img-3.newatlas.com/titan-sands-3.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C0%2C1918%2C1078&w=616&s=81b8f0b6b7d521c77618de38b78b5096' }
]}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_STUDENT':

       const newState = Object.assign({}, state, {students: action.students})
return newState;
     case 'GET_STUDENT':
     console.log(action.students, " reducer")
      const statenew = Object.assign({}, state, {students: action.students})
      return statenew

      case 'REMOVE_STUDENT':
      let arr = state.students.filter((student) => {
        console.log(student.id, action.id)
        return (student.id !== action.id)});
        return {students : arr}
      case 'GET_CAMPUS':
    console.log(action.campuses, " reducer campus")
      return  Object.assign({}, state, {campuses: action.campuses})


    case 'ADD_CAMPUS':
       return Object.assign({}, state, {campuses: action.campuses})

    default: return state;
  }
};



export default rootReducer;
