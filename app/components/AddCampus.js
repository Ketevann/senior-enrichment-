 import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import store from '../store'
import {addCampus} from '../redux/students';


console.log(addCampus.toString())
const handleSubmit = (event) => {
  event.preventDefault();
  console.log(event.target, "!!!", event.target.name.value)
  //console.log(event.target.name.value,  event.target.imageUrl.value, "NAMEEEE")



  let data = { name: event.target.name.value, imageUrl: event.target.imageUrl.value }
  console.log(data)

  addCampus(data)
  event.target.name.value = '';
    event.target.imageUrl.value = '';


}







  export const AddCampus = (props) => {
   return (
     <div>{console.log("FSFSFSFSFSFSFS(((!!!")}
 <form name="myform" onSubmit={(val) => handleSubmit(val)} className="form-inline">
          <label className="sr-only" for="inlineFormInput" >Campus Name</label>
          <input value={props.campus.name} name="name" type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Campus Name" />
          <label className="sr-only" for="inlineFormInputGroup">Image Url</label>
          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <input name="imageUrl" type="text" className="form-control" id="inlineFormInputGroup" placeholder="Image Url" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>)
 }
