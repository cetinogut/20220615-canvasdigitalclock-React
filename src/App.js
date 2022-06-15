import './App.css';
import CanvasDigiClock from './Components/CanvasDigiClock';
//import { Button } from './utils/button'; // TODO use Button as a component in a later task

import * as React from 'react';

function App() {

  const [isOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="App">
      
      <CanvasDigiClock id="clock-digi" top="0" left="0" width="800" height="500" /> 
      
      <br></br>
      <Button onClick={handleClick}>DayMode</Button>

      {isOpen && <div>Change the background color to day mode (TODO)</div>}
    </div>
  );
}
const Button = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default App;