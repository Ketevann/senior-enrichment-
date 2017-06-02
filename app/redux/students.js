import axios from 'axios';
import store from '../store'

/* -----------------    ACTIONS     ------------------ */

// const GET_USERS = 'INITIALIZE_USERS';
// const ADD_USER     = 'CREATE_USER';
// export const REMOVE = 'REMOVE_USER';
// const UPDATE     = 'UPDATE_USER';
// const SET_USER = 'SET_USER';
// const REM_USER = 'REM_USER';

const ADD_STUDENT = 'ADD_STUDENT';
const GET_STUDENT = 'GET_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';





/* ------------   ACTION CREATORS     ------------------ */



const get = students => ({ type: GET_STUDENT, students });
const add = students => ({ type: 'ADD_STUDENT', students });
const remove = id => ({ type: REMOVE_STUDENT, id });
const edit = student => ({ type: EDIT_STUDENT, student });
const deleteCampus = id => ({ type: REMOVE_CAMPUS, id });
const updateCampus = campus => ({ type: EDIT_CAMPUS, campus});





console.log("IN REDUCER")



/* ------------       DISPATCHERS     ------------------ */

// export const fetchUsers = () => dispatch => {
//   axios.get('/api/users')
//     .then(res => dispatch(init(res.data)));
// };

export const fetchStudent = ()=> {
  axios.get('/api/students')
     .then(res => store.dispatch(get(res.data)))
    .then(() => { console.log("dataaa") })

};

export const addStudent = student  => {
  console.log("HEREERERERERER")
  axios.post('/api/students', student)
    .then(res => store.dispatch(add(res.data)))

    .catch(err => console.error(`Creating user: ${student} unsuccesful`, err))

}


export const removeStudent = id  => {
 store.dispatch(remove(id));
  axios.delete(`/api/students/${id}`)
    .catch(err => console.error(`Creating user: ${id} unsuccesful`, err))

}
export const editStudent = (id, user)  => {

  axios.put(`/api/students/${id}`,  user)
  .then(res => {
    console.log(res.data, "redDAta")
    return  store.dispatch(edit(res.data)) })

    .catch(err => console.error(`Creating user: ${id} unsuccesful`, err))

}

export const editCampus = (id, campus)  => {

  axios.put(`/api/campus/${id}`,  campus)
  .then(res => {
    console.log(res.data, "UPD")
    store.dispatch(updateCampus(res.data))})
    .catch(err => console.error(`Creating user: ${id} unsuccesful`, err))

}

export const addCampus = (data) => {
  axios.post('/api/campus', data)
    .then(res => res.data)
    .then(campus => store.dispatch({ type: 'ADD_CAMPUS', campuses: campus }))

}

export const removeCampus = id  => {
  console.log(id, "remove campus ID ")
 store.dispatch(deleteCampus(id));
  axios.delete(`/api/campus/${id}`, id)
    .catch(err => console.error(`Creating user: ${id} unsuccesful`, err))

}

export const fetchCampuses = ()  => {
  axios.get('/api/campuses')
    .then(res => store.dispatch({ type: "GET_CAMPUS", campuses: res.data }))
    .then(() => { console.log("dataaa capmpus") })

};
export const fetchCampusStudents = (campusId)  => {
  console.log("getting")
  axios.get(`/api/${campusId}/students`, campusId)
    .then(res => store.dispatch({ type: "GET_STUDENT", students: res.data }))
    .then(() => { console.log("dataaa") })

};
