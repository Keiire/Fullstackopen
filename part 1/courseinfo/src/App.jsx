
const Header = props => {

  return <h1>{props.course}</h1>
}
const Part = props => {

  return (
    <p>
    {props.partnumber} {props.exercisesnumber}
    </p>
  )
}

const Content = props => {

  return (
    <>
    <Part partnumber={props.part1} exercisesnumber={props.exercises1}/>
    <Part partnumber={props.part2} exercisesnumber={props.exercises2}/>
    <Part partnumber={props.part3} exercisesnumber={props.exercises3}/>
    </>
  )
}
const Total = props => {
  const totalexercices = props.exercises1 + props.exercises2 + props.exercises3
  return <p>Number of exercises {totalexercices}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
    <Header course={course}/>
    <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </>
  )
}

export default App