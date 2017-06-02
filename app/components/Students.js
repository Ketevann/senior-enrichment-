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


 class Students extends React.Component {

  render() {
   // {console.log(this.props, " PROPS 300")}
    ///const studentsAll = this.props.students.students;

    return (
     <div className="container">
        <div className="user-query"></div>
        { console.log(this.props, this.props.students.length, " prop in student", this.props.students.all, Object.keys(this.props.students))}
       <br />
        <br />

        <div className="user-list">
        <Link to ="students/add">
                    <button type="button" className="btn btn-info">Add Students</button>

      </Link>
        { this.props.students.length  > 0 ?
          this.props.students.map(student => <Student student={student.name} email={student.email} campus={student.campusnameId} id={student.id} />

        ) : null}

</div>
      </div>



    )

  }

}


const mapState = ({ students }) => ({ students });

const mapDispatch = { addStudent };

export default connect(mapState, mapDispatch)(Students);
