import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Student from './Student';
import {editStudent} from '../redux/students';


// import _ from 'lodash';
// import UserItem from './UserItem';
// import StoryItem from '../Story/StoryItem';
// import { addStory } from '../../redux/stories';

/* -----------------    COMPONENT     ------------------ */
console.log(editStudent, "!!!!!!!!!")

const handleSubmit = (event,id) => {
  event.preventDefault();
  console.log(event.target.name.value, event.target.email.value, event.target.campus.value, "NAMEEEE", id)
  let data = { name: event.target.name.value, email: event.target.email.value, campus: event.target.campus.value, campusID:id }
  console.log(data)

 editStudent(id, data)
  event.target.name.value = '';
    event.target.email.value = '';

}



 export default class SingleStudent extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    {console.log(this.props.students.students.name, 'SINGLE STUDENT',this.props.students.students[0], "***", this.props.students[0])}
     // the user id is invalid or data isn't loaded yet
    return (
      <div className="container">
      <Student student={this.props.students.students[0].name} email={this.props.students.students[0].email} campus={this.props.students.students[0].campusnameId} />
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h2 className="panel-title large-font">Info</h2>
          </div>
          <ul className="list-group">
            <form className="list-group-item story-item" onSubmit={(val) => handleSubmit(val, this.props.students.students[0].id)}>
              <input
                name="name"
                type="text"
                className="form-like"
                required
                placeholder="Name"
              />

              <input
                name="email"
                type="text"
                className="form-like"
                required
                placeholder="Email"
              />

              <input
                name="campus"
                type="text"
                className="form-like"
                required
                placeholder="campus"
              />
              <button type="submit" className="btn btn-warning btn-xs">
                <span className="glyphicon glyphicon-plus" />
              </button>
            </form>

          </ul>
        </div>
      </div>
    );
  }

  onSubmit(event) {
    event.preventDefault();
    const { addStory, user } = this.props;
    const story = {
      title: event.target.title.value,
      author_id: user.id
    };
    addStory(story);
    event.target.title.value = '';
  }
}

/* -----------------    CONTAINER     ------------------ */

// const mapState = ({ users, stories }, ownProps) => {
//   const param_id = Number(ownProps.params.id);
//   return {
//     user: _.find(users, user => user.id === param_id),
//     stories
//   };
// };

// const mapDispatch = { handleSubmit, editStudent };

// export default connect(state => state, mapDispatch)(SingleStudent);
