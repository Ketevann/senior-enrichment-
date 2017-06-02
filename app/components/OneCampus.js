import React from 'react';
import Student from './Student'
import SingleCampusEdit from './SingleCampusEdit'
import { connect } from 'react-redux';
import _ from 'lodash';


//sends down props to singleCampusEdit and Student that display the students
//table and the current Campus
const OneCampus = (props) => {
  console.log(props, "props")
  if (!props.campuses) return <div />
  return (
    <div>
      <SingleCampusEdit campus={props.campuses} />
      {props.students.map(student => {
        return (
          <div>
            <Student student={student.name} email={student.email} campus={student.campusnameId} id={student.id} />
          </div>);
        })
      }
    </div>);
};

const mapState = ({ students, campuses }, ownProps) => {
  const paramId = Number(ownProps.params.campusId);
  return {
    campuses: _.find(campuses, campus => campus.id === paramId),
    students
  };
};
const mapDispatch = null;

export default connect(mapState, mapDispatch)(OneCampus);
