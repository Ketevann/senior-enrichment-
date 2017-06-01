'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import store from './store'
import Root from './components/Root.jsx'
import Students from './components/Students'
import {Home} from './components/Home'
import {fetchStudent, fetchCampuses, fetchCampusStudents} from './redux/students'
import {StudentAdd} from './components/StudentAdd'
import {AddCampus} from './components/AddCampus'
import Campuses from './components/Campuses'
import SingleStudent from './components/SingleStudent'

import campus from './components/campus'





render(

  <Provider store={store}>
    <Router history={hashHistory}>
   <Route path="/" component={Root} onEnter={fetchStudent}  >
    <IndexRoute component={Home} />

     <Route path="/students" component={Students} onEnter={fetchStudent} />
     <Route path="/Home" component={Home} onEnter={fetchCampuses()}  />
      <Route path="/students/add" component={StudentAdd} />
       <Route path="/campuses" component={Campuses} onEnter={fetchCampuses} />
       <Route path="/campuses/add" component={AddCampus} />
     <Route path="/students/:studenId" component={SingleStudent} />
     <Route path="/campuses/:campusId" component={campus} />

    <Route path="*" component={Home} />
    </Route>

    </Router>



  </Provider>,
  document.getElementById('main')
)

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~")

function fetch(){
  console.log("fetching!")
  fetchUsers()
  fetchCampuses();

}
const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchUsers());

    // what other data might we want to fetch on app load?
  }
})


//export default connect(mapProps, mapDispatch)(Routes);
