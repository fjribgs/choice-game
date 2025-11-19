import { useState } from "react";
import scenes from "./scenes/scenes";

function App() {
  const [currentScene, setCurrentScene] = useState("start");
  const scene = scenes[currentScene];

  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <h1>Choice Game</h1>

      <p>{scene.text}</p>

      <div>

        {scene.choices.map((choice, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentScene(choice.next)}>
              {choice.text}
            </button>
        ))}

      </div>

    </div>
  )
}

export default App;