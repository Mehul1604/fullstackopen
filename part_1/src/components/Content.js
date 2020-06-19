import React from 'react';
import Part from './Part'

const Content = (props) =>{
    var l = []
    l = props.course.parts.map((p) =>{
        return <Part key = {p.id} part = {p.name}  exercise={p.exercises}/>
    })
    return l
  }

  
  export default  Content