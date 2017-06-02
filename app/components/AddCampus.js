 import React from 'react';
import { connect } from 'react-redux';
import {addCampus} from '../redux/students';


const handleSubmit = (event) => {
  event.preventDefault();
  let data = {
     name: event.target.name.value,
    imageUrl: event.target.imageUrl.value
  }
  addCampus(data)
  event.target.name.value = '';
  event.target.imageUrl.value = '';
};







  const AddCampus = (props) => {
   return (
    <div className="list-group-item min-content user-item">
        <form className="media" onSubmit={(val) => handleSubmit(val)} >
          <div className="media-left media-middle icon-container">
            <button
              type="submit"
              className="glyphicon glyphicon-plus clickable"
            />
          </div>
          <div className="media-body">
            <h4 className="media-heading tucked">
              <input
                name="name"
                type="text"
                required
                placeholder="Campus Name"
                className="form-like"
              />
            </h4>
            <h5 className="tucked">
              <input
                name="imageUrl"

                required
                placeholder="imageUrl"
                className="form-like"
              />
            </h5>
            </div>
        </form>
      </div>)



  }




const mapState = ({ campuses }) => ({ campuses });

const mapDispatch = {addCampus}

export default connect(mapState, mapDispatch)(AddCampus);





