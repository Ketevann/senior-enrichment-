import axios from 'axios';
import store from '../store'

/* -----------------    ACTIONS     ------------------ */



const ADD_STUDENT = 'ADD_STUDENT';
const GET_STUDENT = 'GET_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';






/* ------------   ACTION CREATORS     ------------------ */



const get = students => ({ type: GET_STUDENT, students });
const add = students => ({ type: 'ADD_STUDENT', students });
const remove = id => ({ type: REMOVE_STUDENT, id });
const edit = student => ({ type: EDIT_STUDENT, student });

const deleteCampus = id => ({ type: REMOVE_CAMPUS, id });
const updateCampus = campus => ({ type: EDIT_CAMPUS, campus });








/* ------------       DISPATCHERS     ------------------ */



export const fetchStudent = () => {
  axios.get('/api/students')
    .then(res => store.dispatch(get(res.data)))
    .catch(console.error())

};

export const addStudent = student => {
  axios.post('/api/students', student)
    .then(res => store.dispatch(add(res.data)))
    .catch(console.error())

}


export const removeStudent = id => {
  store.dispatch(remove(id));
  axios.delete(`/api/students/${id}`)
    .catch(console.error())

}
export const editStudent = (id, user) => {

  axios.put(`/api/students/${id}`, user)
    .then(res => {
      return store.dispatch(edit(res.data))
    })
    .catch(console.error())
}

