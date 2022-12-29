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

  const all = good+neutral+bad
  const average = (good - bad)/all
  const positive = (good/all)*100+ " %"

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
      <Display text="all " value={all}/>
      <Display text="average " value={average}/>
      <Display text="positive " value={positive}/>
      
    </div>
  )
}

export default App
