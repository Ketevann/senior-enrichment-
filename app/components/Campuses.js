import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


const Campuses = (props) => {
 {console.log(props,  "prop!!***********************!", props.campus, "BLA", props.campus.imageUrl, "TTT",Object.keys(props.campus) )}

 return(
  <div className="row">

{
  Object.keys(props.campus).map((some) => {
    console.log('some',some, 'props,', props.campus[some], "image", props.campus[some].imageUrl, props.campus[some].name)


      return(
        <div className="campuses col-sm-6">
        <h3>{props.campus[some].name}</h3>
       <Link to={`/campuses/${props.campus[some].id}`}> <img  id={props.campus[some].name}src={(props.campus[some].imageUrl)} />
       </Link>

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
