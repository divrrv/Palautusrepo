import { useState } from 'react'

const Display = ({text, value}) => <div>{text}{value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood (good + 1)} text="good"/>
      <Button handleClick={() => setNeutral (neutral +1)} text="neutral"/>
      <Button handleClick={() => setBad (bad + 1)} text="bad"/>

      <h2>statistics</h2>
      <Display text="good " value={good}/>
      <Display text="neutral " value={neutral}/>
      <Display text="bad " value={bad}/>
    </div>
  )
}

export default App
