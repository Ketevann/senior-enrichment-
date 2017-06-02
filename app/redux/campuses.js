import axios from 'axios';
import store from '../store'




const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';



/* ------------   ACTION CREATORS     ------------------ */



const deleteCampus = id => ({ type: REMOVE_CAMPUS, id });
const updateCampus = campus => ({ type: EDIT_CAMPUS, campus });



/* ------------       DISPATCHERS     ------------------ */

export const editCampus = (id, campus) => {
  axios.put(`/api/campus/${id}`, campus)
    .then(res => {
      store.dispatch(updateCampus(res.data))
    })
    .catch(console.error())
}

export const addCampus = (data) => {
  axios.post('/api/campus', data)
    .then(res => res.data)
    .then(campus => store.dispatch({ type: 'ADD_CAMPUS', campuses: campus }))
}

export const removeCampus = id => {
  store.dispatch(deleteCampus(id));
  axios.delete(`/api/campus/${id}`, id)
    .catch(console.error())

}

export const fetchCampuses = () => {
  axios.get('/api/campuses')
    .then(res => store.dispatch({ type: "GET_CAMPUS", campuses: res.data }))
    .catch(console.error())

};
export const fetchCampusStudents = (campusId) => {
  axios.get(`/api/${campusId}/students`, campusId)
    .then(res => store.dispatch({ type: "GET_STUDENT", students: res.data }))
    .catch(console.error())

};

















