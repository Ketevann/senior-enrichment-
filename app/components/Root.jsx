import React, { Component } from 'react';
import Navbar from './Navbar'
import store from '../store'
import Campuses from './Campuses'
import Students from './Students'
import { connect } from 'react-redux';
import axios from 'axios';
import {reset} from 'redux-form'




export default class Root extends Component {
  constructor() {
    super()
    this.state = store.getState();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    console.log(this.state, " SATE!!!!!!")
  }

  // componentDidMount() {

  //   const unsubscribe = store.subscribe(function () {
  //     console.log('----------------');
  //     console.log('State changed!!', store.getState());
  //   });
  // }


  handleChange(event) {
    console.log(event.target.value)
  }




  handleClick() {
    console.log("****** LOVE CAKE")
    axios.get('/api/students')
      .then(res => {
        return res.data
      })
      .then(student => {
        console.log(student, "student!!!")
        return store.dispatch({ type: 'GET_STUDENT', students: student })
      }


      )
  }














  render() {
    console.log(this.state, " SATE", this.props.children, "***")
    if (!this.state) { return null }


    const props = Object.assign({}, this.state, {
      campus: store.getState().campuses,
      handleChange: this.handleChange,

      handleClick: this.handleClick,
     students: store.getState()

    });





    return (
      <div id="main" className="container-fluid">
        <Navbar handleClick={this.handleClick} />
        {
          this.props.children && React.cloneElement(this.props.children, props)
        }
       }

    </div>
    )
  }
}



const mapStateToProps = (state, ownProps = {}) => {
  console.log(state, "$#$#$#$#"); // state
  console.log(ownProps); // undefined
  return {
    students : state.students
  }
}


function mapDispatchToProps(dispatch) {
  return null;
}

// var a = connect(mapStateToProps, mapDispatchToProps)(Root)

// console.log(a)


