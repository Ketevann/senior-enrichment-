import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Student from './Student';
import {editStudent} from '../redux/students';


// import _ from 'lodash';
// import UserItem from './UserItem';
// import StoryItem from '../Story/StoryItem';
// import { addStory } from '../../redux/stories';

/* -----------------    COMPONENT     ------------------ */
console.log(editStudent, "!!!!!!!!!")
let removed = false;
const handleSubmit = (event,id) => {
  event.preventDefault();
  console.log(event.target.name.value, event.target.email.value, event.target.campus.value, "NAMEEEE", id)
  let data = { name: event.target.name.value, email: event.target.email.value, campus: event.target.campus.value, campusID:id }
  console.log(data)

 editStudent(id, data)
  event.target.name.value = '';
    event.target.email.value = '';
    event.target.campus.value = '';
}

console.log(handleSubmit, "8")

const handleChange = (event) =>  {
  console.log(event)
}
const SingleStudent = (props) => {




    {console.log(props, 'SINGLE STUDENT', "***", removed, "removed", handleSubmit )}

     // the user id is invalid or data isn't loaded yet

     if (!props.student) return <div />
    return (
      <div className="container">

      <Student student={props.student.name} email={props.student.email} campus={props.student.campusnameId} id={props.student.id} />
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h2 className="panel-title large-font">Info</h2>
          </div>
          <ul className="list-group">
            <form className="list-group-item story-item" onSubmit={(event) => handleSubmit(event, props.student.id)}>
              <input onChange={handleChange}
                name="name"
                type="text"
                className="form-like"
                required
                placeholder="Name"
              />

              <input
                name="email"
                type="text"
                className="form-like"
                required
                placeholder="Email"
              />

              <input
                name="campus"
                type="text"
                className="form-like"
                required
                placeholder="campus"
              />
              <button type="submit" className="btn btn-warning btn-xs">
                <span className="glyphicon glyphicon-plus" />
              </button>
            </form>

          </ul>
        </div>

      </div>
    );
  }




/* -----------------    CONTAINER     ------------------ */

//const mapState = ({ students }) => ({ students });

const mapState = ({ students }, ownProps) => {
  console.log(ownProps.params.studenId, students, students[0], "params")
  const param_id = Number(ownProps.params.studenId);
let arr = []
if (students.length > 1){
    arr = students.filter(student => (student.id === param_id) )
     return {student : arr[0]}}
     else return {student : students[0]}


};

 const mapDispatch = null;

 export default connect(mapState, mapDispatch)(SingleStudent);
