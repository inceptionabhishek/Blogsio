import React from 'react'
import Temppost from '../helpers/Temppost';
import Image from '../Images/react.jpg';
function Displaypost(props) {
  return (
    <div className="postdisplay">
      <h1 className="update">{Temppost.title}</h1>
      <img src={Image} alt="" className="postthumbnail" />
      <h4 className='update2' >{Temppost.body}</h4>
    </div>
  );
}

export default Displaypost