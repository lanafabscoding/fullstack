import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const course = 'Full Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} />
      <Content exercises1={exercises1} /> 
      <Content part2={part2} />
      <p>
        {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
      <p>Content: {props.part1}, {props.exercises1}, {props.part2} </p>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
