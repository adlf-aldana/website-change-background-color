import './App.scss';

function App() {

  const changeColor = () => {
    document.body.style.backgroundColor = "red";
  }
  
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
