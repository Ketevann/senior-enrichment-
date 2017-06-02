import React from 'react';
import { Link } from 'react-router';
import Student from './Student'
import SingleCampusEdit from './SingleCampusEdit'

import { connect } from 'react-redux';


const OneCampus = (props) => {
 {console.log(props,  "prop!!! ONE CAMPUS")}

 return (
  <div>
<SingleCampusEdit campus={props.campuses} />
 {props.students.map(student => {
  return(
    <div>

       <Student student={student.name} email={student.email} campus={student.campusnameId} id={student.id} />
      </div>)
 })



 }



</div>

 )


}

const mapState = ({ students, campuses }, ownProps) => {


 const param_id = Number(ownProps.params.campusId);

  let arr = []
console.log(param_id, students, campuses)
if(campuses){
  arr = campuses.filter(campus => (campus.id === param_id) )
  console.log(arr)}
  return {students, campuses : arr[0] }




};

const mapDispatch = null;

export default connect(mapState, mapDispatch)(OneCampus);
