import React from 'react';
import { Link } from 'react-router';

const handleClick =() => {
  fetch()

}
const Campuses = (props) => {
 {console.log(props,  "prop!!***********************!")}

 return(
  <div className="row">

{
  Object.keys(props.campus).map((some) => {
    console.log('some',some, 'props,', props.campus[some], "image", props.campus[some].imageUrl, props.campus[some].name)


      return(
        <div className="campuses col-sm-6">
        <h3>{props.campus[some].name}</h3>
       <Link to={`/campuses/${props.campus[some].id}`}> <img onClick={handleClick} id={props.campus[some].name}src={(props.campus[some].imageUrl)} />
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

export default Campuses;
