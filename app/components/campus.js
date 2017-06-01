import React from 'react';
import { Link } from 'react-router';
import Student from './Student'
import { connect } from 'react-redux';


const OneCampus = (props) => {
 {console.log(props,  "prop!!!")}

 return (
  <div>

 {props.students.map(student => {
  return( <Student student={student.name} email={student.email} campus={student.campusnameId} id={student.id} />)
 })



 }



</div>

 )


}

const mapState = ({ students }) => ({ students });

const mapDispatch = null;

export default connect(mapState, mapDispatch)(OneCampus);
