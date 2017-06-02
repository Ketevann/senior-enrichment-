import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchCampusStudents, removeCampus } from '../redux/students'
import CampusInfo from './CampusInfo';


class Campuses extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="row">


          {this.props.campuses.length > 0 ?
            this.props.campuses.map(campus => <CampusInfo campus={campus.name} imageUrl={campus.imageUrl} id= {campus.id}/>

            ) : null}

        <Link to="campuses/add">
          <button>Add Campus</button>
        </Link>

      </div>

    )

  }
}













const mapState = ({ campuses }) => ({ campuses });

const mapDispatch = { fetchCampusStudents, removeCampus };

export default connect(mapState, mapDispatch)(Campuses);
















