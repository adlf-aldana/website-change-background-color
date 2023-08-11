import { useEffect, useState } from 'react';
import style from './App.module.scss';

function App() {
  const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white"];
  const [color, setColor] = useState();

  const changeColor = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(newColor);
    document.body.style.backgroundColor = newColor;
  }

  useEffect(() => {
    changeColor();
  }, []);

  return (
    <div className={style.firstLayer}>
      <div className={style.secondLayer}>
        <h1 > Background Color: {color} </h1>
      </div>
      <button onClick={()=>changeColor()}>Change Background Color</button>      
    </div>
  );
}

export default App;
