import React,{useState}from 'react';

import Button from './components/buttons';
import Statistics from './components/statstics';

const Stats = (props) =>{
  const [good,neutral,bad] = [props.good,props.neutral,props.bad];
  const all = neutral + bad + good;
  if(all){
  return(
    <table>
  
    <Statistics text = 'good' value = {good}/>
    <Statistics text = 'neutral' value = {neutral}/>
    <Statistics text = 'bad' value = {bad}/>
    <Statistics text = 'all' value = {all}/>
    <Statistics text = 'average'
      value = {props.calAverage(good,neutral,bad)}/> 
    <Statistics text = "postivity"
    value = {props.calPositive(good,neutral,bad)}/>
  </table>
  )}
  else{
    return(
      <h1>No feedback</h1>
    )
  }
}
const App = () => {

  const calAverage = (good,neutral,bad) =>{
    const all = (good+neutral+bad);
    return all ? (good - bad)/all : 0;
  }
  
  const calPositive = (good,neutral,bad) =>{
    const all = (good+neutral+bad)
    return all ? `${(good / all) * 100}%` : 0;
  }
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>Give Feedback</h1>
      <div></div>
      <Button onClick = {()=>setGood(good + 1)}
      text = "good"/>

      <Button onClick = {()=>setNeutral(neutral + 1)}
      text = "Neutral"/>

      <Button onClick = {()=>setBad(bad + 1)}
      text = "Bad"/>

      <br/>
      <br/>
      <h1>Statistics</h1>
      <Stats
      good={good}
      neutral={neutral}
      bad={bad}
      calAverage={calAverage}
      calPositive={calPositive}/>
        </div>
  )
}


export default App;
