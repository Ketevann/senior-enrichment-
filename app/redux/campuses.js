import axios from 'axios';
import store from '../store'

/* -----------------    ACTIONS     ------------------ */

// const GET_USERS = 'INITIALIZE_USERS';
// const ADD_USER     = 'CREATE_USER';
// export const REMOVE = 'REMOVE_USER';
// const UPDATE     = 'UPDATE_USER';
// const SET_USER = 'SET_USER';
// const REM_USER = 'REM_USER';

const ADD_CAMPUS = 'ADD_CAMPUS';
const GET_CAMPUS = 'GET_CAMPUS';


/* ------------   ACTION CREATORS     ------------------ */



const get = campuses => ({ type: INITIALIZE, campuses });
const add = campuses => ({ type: ADD_STUDENT, campuses });






/* ------------       REDUCER     ------------------ */

export default function reducer(campuses = [], action) {
  console.log('action', action)

  switch (action.type) {

    case ADD_CAMPUS:
      return [action.campuses, ...campuses];

    case GET_CAMPUS:
      return action.campuses;

    case INITIALIZE:
      return action.users;
    default:
      return campuses;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
    .then(res => dispatch(get(res.data)))
    .then(() => { console.log("dataaa capmpus") })

};
export const addCampus = campus => dispatch => {
  axios.post('/api/campus', campus)
    .then(res => dispatch(add(res.data)))
    .catch(err => console.error(`Creating user: ${campus} unsuccesful`, err))

}



export const fetchCampusStudents = () => dispatch => {
  axios.get('/api/students/:campusId')
    .then(res => store.dispatch({ type: "GET_STUDENT", students: res.data }))
    .then(() => { console.log("dataaa") })

};


















