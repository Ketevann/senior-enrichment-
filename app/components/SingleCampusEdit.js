import React from 'react';
import { connect } from 'react-redux';
import { editCampus } from '../redux/campuses'
import { removeStudent, editStudent} from '../redux/students'


const handleSubmit = (event, id) => {
  event.preventDefault();

  let data = { name: event.target.name.value, imageUrl: event.target.imageUrl.value, campusID: id }
  editCampus(id, data)
  //clearing input
  event.target.name.value = '';
  event.target.imageUrl.value = '';
}
//updates a campus after submitting the form. submithandler calls edit Campus function
const SingleCampusEdit = (props) => {
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
};



const mapState = (campuses) => (campuses);
const mapDispatch = { removeStudent, editStudent };

export default connect(mapState, mapDispatch)(SingleCampusEdit);
