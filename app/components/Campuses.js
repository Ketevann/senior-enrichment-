import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {fetchCampusStudents, removeCampus} from '../redux/students'


const Campuses = (props) => {
 {console.log(props.campuses,  "prop!!***********************!" )}

const handleSubmit = id => {
  console.log("YAYYYY", id)
  fetchCampusStudents(id)
  }

const removeUserCallback = (id) => {
console.log(id, "ID IN CAMPUS")
    event.stopPropagation();
    removeCampus(id);
  }
 return(
  <div className="row">

{
 props.campuses.map((campus) => {

  console.log(campus, "CAMPUSSS")

      return(
        <div className=" col-md-4">
        <Link to={`/campuses/${campus.id}`}> <h3  onClick={() => handleSubmit(campus.id)}> {campus.name} </h3>


       </Link>

       <img

        id={campus.name}src={(campus.imageUrl)} />
        <div>

        <button className="btn btn-default edit"  > Edit
              <span />
            </button>
            <button onClick={() => removeUserCallback(campus.id)}                 className="btn btn-default remove"
                >Remove
              <span  />
            </button>
            </div>
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
