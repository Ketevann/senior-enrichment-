import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { removeStudent, editStudent } from '../redux/students'
// import { removeStory } from '../../redux/stories';

/* -----------------    COMPONENT     ------------------ */
console.log(removeStudent.toString())
 class CampusInfo extends React.Component {

  constructor (props) {
    super(props);
    this.removeUserCallback = this.removeUserCallback.bind(this);
  }

  render () {
    {console.log(this.props, "student oneee")}
    return (
      <div className="list-group-item min-content user-item">
        <div className="media">
          <div className="media-left media-middle icon-container">

          </div>
          <Link
            className="media-body"
            activeClassName="active"
            to={`/students/${this.props.id}`}>
            <h4 className="media-heading tucked">
              <span placeholder="Jean Doe"></span>
            </h4>
            <h5 className="tucked">
              <span></span>
            </h5>
            <h5 className="tucked">
              <span></span>
            </h5>
          </Link>
          <div className="media-right media-middle">
          <button
                className="btn btn-default"
                >
              <span className="glyphicon glyphicon-remove" />
            </button>
            <button
                className="btn btn-default"
               >
              <span className="glyphicon glyphicon-edit" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  removeUserCallback (event) {

    event.stopPropagation();
    removeStudent(this.props.id);
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state ) => ( state );
const mapDispatch = { removeStudent, editStudent };

export default connect(mapState, mapDispatch)(CampusInfo);
