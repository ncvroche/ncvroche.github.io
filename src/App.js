import './App.css';
import {useState} from 'react'
import Pickle from './comps/pickle'

function App() {

  const [pickles, setPickles] = useState([])

  const startGame = () => {
    var gamestate = []

    for (var i=1; i<=4; i++) {
      for (var j=1; j<=4; j++) {
        gamestate = [...gamestate, {
          "value": 2,
          "key":i*10+j
        }]
      }
    }
    

    setPickles(gamestate)
    console.log(pickles)
  }

  
  return (
    <div className="App">
      <div className="gameContainer">
        <button onClick={startGame} className="startButton">New Game</button>
        <div className="gridContainer">
          <div className="grid">
            {pickles.map (pickle => (
              <Pickle pickle={pickle}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
