import React from 'react'
import ReactDOM from 'react-dom'

const Part = ({part,exercise}) =>{
  return(
    <p>{part} {exercise}</p>
  )
}

const Header = (props) =>{
  return(
    <React.Fragment>
      <h1>{props.course.name}</h1>
    </React.Fragment>
  )
}

const Content = (props) =>{
  var l = []
  for(var i =0;i<props.course.parts.length;i++){
    l.push(<Part part = {props.course.parts[i].name}  exercise={props.course.parts[i].exercises}/>)
  }
  return l
}

const Footer = (props) =>{
  
  let arr = props.course.parts
  let sum = 0;
  sum = sum + arr[0].exercises + arr[1].exercises + arr[2].exercises
  return(
    <React.Fragment>
        <p>Number of exercises {sum}</p>
    </React.Fragment>
  )
}

const App = () => {
  const course = {
    name : 'Half Stack application development',
     parts : [
      {
      name : 'Fundamentals of React',
      exercises : 10
    }
      ,
     {
      name : 'Using props to pass data',
      exercises : 7
    }
      ,
    {
      name : 'State of a component',
      exercises : 14
    }
  ]
}


  return (
    <div>
      <Header course = {course}/>
      <Content course = {course}/>
      <Footer course = {course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


