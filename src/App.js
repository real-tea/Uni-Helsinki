import React,{useState}from 'react';

import Button from './components/buttons';

const App = () => {
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <Button onClick = {()=>setCounter(counter + 1)}
      text = "Increment"/>

      <Button onClick = {()=>setCounter(0)}
      text = "Reset"/>
    </div>
  )
}


export default App;
