import React from 'react';
import { Link } from 'react-router';

//displays Home, Campus and Students buttons
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="buttons">
          <Link to='/Home'><button type="button" className="btn btn-info">Home</button></Link>
          <Link to='/students'>
            <button type="button" className="btn btn-info">Students</button></Link>
          <Link to="/campuses">
            <button type="button" className="btn btn-info">Campuses</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;


