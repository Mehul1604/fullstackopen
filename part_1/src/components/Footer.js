import React from 'react'

const Footer = (props) =>{

    let arr = props.course.parts
    let sum = 0;
    sum = arr.reduce((res,p) =>{
        return res + p.exercises
    } , 0)
    
    return(
      <React.Fragment>  
          <p>Number of exercises {sum}</p>
      </React.Fragment>
    )
  }

  export default Footer
