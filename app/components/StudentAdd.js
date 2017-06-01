 import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import store from '../store'
import {addStudent} from '../redux/students';



const handleSubmit = (event) => {
  event.preventDefault();
  console.log(event.target.name.value, event.target.email.value, event.target.campus.value, "NAMEEEE")
  let data = { name: event.target.name.value, email: event.target.email.value, campus: event.target.campus.value }
  console.log(data)

  addStudent(data)
  event.target.name.value = '';
    event.target.email.value = '';

}







  export const StudentAdd = (props) => {
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
                placeholder="Jean Doe"
                className="form-like"
              />
            </h4>
            <h5 className="tucked">
              <input
                name="email"
                type="email"
                required
                placeholder="email@website.com"
                className="form-like"
              />
            </h5>
            <h5 className="tucked">
              <input
                name="campus"
                type="tel"
                placeholder="campus"
                className="form-like"
              />
            </h5>
          </div>
        </form>
      </div>
    );
  }







