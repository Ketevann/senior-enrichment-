import React from 'react';
import { Link } from 'react-router';
import Students from './Students'
import axios from 'axios';
import store from '../store'




export default class Nabar extends React.Component {
  constructor(props){
    super(props)

  }
handleClick() {
    console.log("****** LOVE CAKE")
    axios.get('/api/students')
      .then(res => {
        return res.data
      })
      .then(student => {
      //  console.log(student, "student!!!")

      }


      )
  }

render(){
  {console.log(" I AM IN NAVBAR", this.props)}

  return (
   <nav className="navbar navbar-toggleable-md navbar-light bg-faded">



  <div className="collapse navbar-collapse" id="navbarNav">

          <Link to='/Home'><button type="button" className="btn btn-info">Home</button></Link>
      <Link to='/students'>
      <button onClick={this.handleClick()}type="button" className="btn btn-info">Students</button></Link>
    <h4>{this.props.students}</h4>

<Link to="/campuses">
        <button>Campuses</button>
      </Link>


  </div>
</nav>

  );
}
}




