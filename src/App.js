
import { useState } from 'react';
import './App.css';
import scene1BackgroundImg from "./images/scene-1/background-scene-1.png"
import scene2BackgroundImg from "./images/scene-2/background-scene-2.png"
import scene3BackgroundImg from "./images/scene-3/background-scene-3.png"
import { usePlayer } from './hooks/usePlayer';
import { MovingArea } from './components/MovingArea';
import { Quiz } from './components/Quiz';


function App() {
  const [scene, setScene] = useState(0)
  const { player, movePlayer } = usePlayer(localStorage.getItem("player"))
  const [quiz, setQuiz] = useState({})
  const [barriers, setBarriers] = useState([
    {
      width: 150,
      height: 250,
      left: 1000,
    }
  ])
  const getScene = () => {
    const images = [
      scene1BackgroundImg,
      scene2BackgroundImg,
      scene3BackgroundImg
    ]
    return images[scene]
  }

  return (
    <div className="App" style={{
      width: "1280px",
      height: "720px",
      position: "relative"
    }}>
      {quiz?.title ? <Quiz quiz={quiz} setQuiz={setQuiz} scene={scene} setBarriers={setBarriers} /> :
        (<>
          <img src={getScene()} style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: -100
          }}></img>
          <MovingArea scene={scene} player={player} movePlayer={movePlayer} barriers={barriers} setQuiz={setQuiz} />
        </>
        )}
    </div>
  );
}

export default App;
