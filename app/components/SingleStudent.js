import React from 'react';
import { connect } from 'react-redux';
import Student from './Student';
import { editStudent } from '../redux/students';
import _ from 'lodash';



const handleSubmit = (event, id) => {
  event.preventDefault();
  let data = { name: event.target.name.value, email: event.target.email.value, campus: event.target.campus.value, user: id }

  editStudent(id, data)
  //clears the values
  event.target.name.value = '';
  event.target.email.value = '';
  event.target.campus.value = '';
}


//displays a single student
const SingleStudent = (props) => {
  // the student  is invalid or data isn't loaded yet
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
            <input
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
};

//looks for the students that match the current student and sends it as props
const mapState = ({ students }, ownProps) => {
  const param_id = Number(ownProps.params.studenId);
  return {
    student: _.find(students, student => student.id === param_id)

  }
}


const mapDispatch = null;

export default connect(mapState, mapDispatch)(SingleStudent);
