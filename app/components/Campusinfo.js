import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchCampusStudents, removeCampus } from '../redux/students'
// import { removeStory } from '../../redux/stories';

/* -----------------    COMPONENT     ------------------ */

 class CampusInfo extends React.Component {
  constructor (props) {
    super(props);
    this.removeUserCallback = this.removeUserCallback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  render () {
    {console.log(this.props, "student student Info", this.props.id)}
     const {id} = this.props.id;
    {console.log({id}, "CAMPUS ID")}
    return (

         <div className=" col-md-4">
                <Link to={`/campuses/${this.props.id}`}> <h3 onClick={() => this.handleSubmit(this.props.id)}> {this.props.campus} </h3>
                </Link>
                <img id={this.props.campus} src={(this.props.imageUrl)} />
                <div>
                  <button className="btn btn-default edit"  > Edit
              <span />
                  </button>
                  <button onClick={() => this.removeUserCallback(this.props.id)} className="btn btn-default remove"
                  >Remove
              <span />
                  </button>
                </div>
              </div>
            )



        }
       handleSubmit(id) {
    console.log("YAYYYY", id)
    fetchCampusStudents(id)
  }

  removeUserCallback(id) {
    console.log(id, "ID IN CAMPUS")
    event.stopPropagation();
    removeCampus(id);
  }



  }










/* -----------------    CONTAINER     ------------------ */

const mapState = ({campuses} ) => ( {campuses} );
const mapDispatch = { removeCampus, fetchCampusStudents };

export default connect(mapState, mapDispatch)(CampusInfo);






/* -----------------    CONTAINER     ------------------ */





