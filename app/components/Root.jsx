import React, { Component } from 'react';
import Navbar from './Navbar'
import store from '../store'
import Campuses from './Campuses'
import Students from './Students'
import Home from './Home'

import { connect } from 'react-redux';
import axios from 'axios';
import {reset} from 'redux-form'




const Root = ({ children }) => (


  // componentDidMount() {

  //   const unsubscribe = store.subscribe(function () {
  //     console.log('----------------');
  //     console.log('State changed!!', store.getState());
  //   });
  // }


























      <div id="main" className="container-fluid">
        <Navbar />
        {
          children
        }



    </div>
    )



export default Root;
