import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import store from '../store'
import { addStudent } from '../redux/students'
import Student from './Student'



//displays all students - sends down student info(id, campusid, name, email)to
//Student component
const Students = (props) => {

  return (
    <div className="container">
      <div className="user-query"></div>
      <br />
      <br />
      <div className="user-list">
        <Link to="students/add">
          <button type="button" className="btn btn-info">Add Students</button>
        </Link>
        {props.students.length > 0 ?
          props.students.map(student => <Student student={student.name} email={student.email} campus={student.campusnameId} id={student.id} />
          ) : null}
      </div>
    </div>);
};



const mapState = ({ students }) => ({ students });

const mapDispatch = { addStudent };

export default connect(mapState, mapDispatch)(Students);
