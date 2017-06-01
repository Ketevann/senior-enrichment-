import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import store from '../store'
import {addStudent} from '../redux/students'
import Student from './Student'




const handleSubmit = (event) => {
  event.preventDefault();
  console.log(event.target.name.value, event.target.email.value, event.target.campus.value, "NAMEEEE")
  let data = { name: event.target.name.value, email: event.target.email.value, campus: event.target.campus.value }
  console.log(data)

  addStudent(data)
  event.target.name.value = '';
    event.target.email.value = '';
}


export default class Students extends React.Component {

  render() {
   // {console.log(this.props, " PROPS 300")}
    ///const studentsAll = this.props.students.students;

    return (
     <div className="container">
        <div className="user-query"></div>
        { console.log(this.props, " prop in student", this.props.students.all, Object.keys(this.props.students))}
       <br />
        <br />

        <div className="user-list">
        {this.props.students.students.map(student => <Student student={student.name} email={student.email} campus={student.campusnameId} id={student.id} />

        )}
      <Link to="students/add">
        <button>Add Students</button>
      </Link>
</div>
      </div>



    )

  }

}

