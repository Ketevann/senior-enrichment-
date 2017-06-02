import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchCampusStudents, removeCampus } from '../redux/campuses'

//Displays all campuses on a page. Removes campuses by clicking on remove button by calling removeCampus function.
//links to a single campus page. after clicking on a specific campus - handlesubmit calls
//fetchcampuses function that gets all students associated with that particular campus
class CampusInfo extends React.Component {
  constructor(props) {
    super(props);
    this.removeCampusCallback = this.removeCampusCallback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    const { id } = this.props.id;
    return (
      <div className=" col-md-4">
        <Link to={`/campuses/${this.props.id}`}> <h3 onClick={() => this.handleSubmit(this.props.id)}> {this.props.campus} </h3>
        </Link>
        <img id={this.props.campus} src={(this.props.imageUrl)} />
        <div>
          <button onClick={() => this.removeCampusCallback(this.props.id)} className="btn btn-default remove" >Remove
          </button>
        </div>
      </div>)
  }
  handleSubmit(id) {
    fetchCampusStudents(id)
  }

  removeCampusCallback(id) {
    event.stopPropagation();
    removeCampus(id);
  }
}


const mapState = ({ campuses, students }) => ({ campuses, students });
const mapDispatch = { removeCampus, fetchCampusStudents };

export default connect(mapState, mapDispatch)(CampusInfo);











