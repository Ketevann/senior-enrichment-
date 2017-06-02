import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchCampusStudents, removeCampus } from '../redux/campuses'
import CampusInfo from './CampusInfo';

//sends down campus information  to campusInfo which displays all campuses on a page
 const Campuses = (props) => {

    return (
      <div className="row">
        <Link to="campuses/add">
          <button type="button" className="addcampus btn btn-info button">Add Campus</button>
        </Link>
        {props.campuses.length > 0 ?
          props.campuses.map(campus => <CampusInfo campus={campus.name} imageUrl={campus.imageUrl} id={campus.id} />
          ) : null}
      </div>)

}

const mapState = ({ campuses }) => ({ campuses });

const mapDispatch = { fetchCampusStudents, removeCampus };

export default connect(mapState, mapDispatch)(Campuses);
















