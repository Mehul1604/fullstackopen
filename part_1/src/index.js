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
      <h1>{props.course}</h1>
    </React.Fragment>
  )
}

const Content = (props) =>{
  var l = []
  for(var i =0;i<props.exercises.length;i++){
    l.push(<Part part = {props.parts[i]}  exercise={props.exercises[i]}/>)
  }
  return l
}

const Footer = (props) =>{
  var ex_list = props.ex_l
  var sum = 0;
  sum = sum + ex_list[0] + ex_list[1] + ex_list[2]
  return(
    <React.Fragment>
        <p>Number of exercises {sum}</p>
    </React.Fragment>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  var exercises = []
  exercises.push(exercises1,exercises2,exercises3)
  var parts = []
  parts.push(part1 , part2 , part3)

  return (
    <div>
      <Header course = {course}/>
      <Content exercises = {exercises} parts = {parts}/>
      <Footer ex_l = {exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


