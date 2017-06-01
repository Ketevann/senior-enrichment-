import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {fetchCampusStudents} from '../redux/students'


const Campuses = (props) => {
 {console.log(props,  "prop!!***********************!", props.campus, "BLA", props.campus.imageUrl, "TTT",Object.keys(props.campus) )}

const handleSubmit = id => {
  console.log("YAYYYY", id)
  fetchCampusStudents(id)
  }

 return(
  <div className="row">

{
  Object.keys(props.campus).map((some) => {
    console.log('some',some, 'props,', props.campus[some], "image", props.campus[some].imageUrl, props.campus[some].name)


      return(
        <div className="campuses col-sm-6">
        <Link to={`/campuses/${props.campus[some].id}`}> <h3  onClick={() => handleSubmit(props.campus[some].id)}> {props.campus[some].name}</h3>
       </Link>
       <img

        id={props.campus[some].name}src={(props.campus[some].imageUrl)} />


        </div>
        )
    })


}

<Link to="campuses/add">
        <button>Add Campus</button>
      </Link>

</div>

 )


}

const mapState = ({ campuses }) => ({ campuses });

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Campuses);
