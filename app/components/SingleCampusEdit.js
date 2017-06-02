import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { removeStudent, editStudent, editCampus } from '../redux/students'
// import { removeStory } from '../../redux/stories';

/* -----------------    COMPONENT     ------------------ */

 const handleSubmit = (event, id) => {
  event.preventDefault();
  console.log(event.target.name.value, event.target.imageUrl.value,  id, "EASYYYY")

   let data = { name: event.target.name.value, imageUrl: event.target.imageUrl.value, campusID:id }
//   console.log(data)

 editCampus(id, data)
  event.target.name.value = '';
  event.target.imageUrl.value = '';


}





 const SingleCampusEdit  =  (props) => {

    {console.log(props, "studentCAMPS oneee")}


  return (


        <div className="panel panel-warning">
          <div className="panel-heading">
            <h2 className="panel-title large-font">{props.campus.name}</h2>
          </div>
          <ul className="list-group">
            <form className="list-group-item story-item" onSubmit={(val) => handleSubmit(val, props.campus.id)}>
              <input
                name="name"
                type="text"
                className="form-like"
                required
                placeholder="Campus Name"
              />

              <input
                name="imageUrl"
                type="text"
                className="form-like"
                required
                placeholder="imageUrl"
              />


              <button type="submit" className="btn btn-warning btn-xs">
                <span className="glyphicon glyphicon-plus" />
              </button>
            </form>

          </ul>
        </div>

    );
  }








/* -----------------    CONTAINER     ------------------ */

const mapState = (campuses ) => ( campuses );
const mapDispatch = { removeStudent, editStudent };

export default connect(mapState, mapDispatch)(SingleCampusEdit);
