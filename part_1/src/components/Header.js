import React from 'react';

 const  Header = (props) =>{
    return(
      <React.Fragment>
        <h1>{props.course.name}</h1>
      </React.Fragment>
    )
  }

  export default Header