import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white"];
  const [color, setColor] = useState("yellow");

  const changeColor = () => {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }

  useEffect(() => {
    changeColor();
  }, [color]);

  return (
    <div>
      <div>
        <h1>Background Color: Red</h1>
      </div>
      <button onClick={changeColor}>Change Background Color</button>      
    </div>
  );
}

export default App;
