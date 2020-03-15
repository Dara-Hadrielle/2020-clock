import React from 'react';
import ComputerClock from './components/clock/ComputerClock'
import WorldClock from './components/clock/WorldClock'

function App(props) {
  return (<div>
    <h1>Clock : Exemplo de acesso a API externa</h1>
    <ComputerClock />
    <WorldClock />
    <WorldClock local="Europe/London" />
  </div>);
}

export default App;