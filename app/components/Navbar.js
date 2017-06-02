import React from 'react';
import { Link } from 'react-router';
import Students from './Students'
import axios from 'axios';
import store from '../store'




export default class Nabar extends React.Component {
  constructor(props) {
    super(props)

  }
  handleClick() {
    axios.get('/api/students')
      .then(res => {
        return res.data
      })
      .then(student => {

      }


      )
  }

  render() {

    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">



        <div className="collapse navbar-collapse" id="navbarNav">
        <div className="buttons">
          <Link to='/Home'><button type="button" className="btn btn-info">Home</button></Link>
          <Link to='/students'>
            <button  type="button" className="btn btn-info">Students</button></Link>
            <Link to="/campuses">
            <button type="button" className="btn btn-info">Campuses</button>
          </Link>
          </div>
          <h4>{this.props.students}</h4>



        </div>
      </nav>

    );
  }
}




