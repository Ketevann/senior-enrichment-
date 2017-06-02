import React from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../redux/students';


//Form for adding students (name, email, campusname)
//calls a submithandler after submitting the form
//submithandler calls addStudents function which adds a new student
class StudentAdd extends React.Component {
    render() {
    return (
      <div className="list-group-item min-content user-item">
        <form className="media" onSubmit={(val) => this.handleSubmit(val)} >
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
  handleSubmit(event) {
    event.preventDefault();
    let data = { name: event.target.name.value, email: event.target.email.value, campus: event.target.campus.value }

    addStudent(data);
    //clears the input values
    event.target.name.value = '';
    event.target.email.value = '';
    event.target.campus.value = '';


  }
}
const mapDispatch = { addStudent };

export default connect(state => state, mapDispatch)(StudentAdd);

