import "./App.css";
import SlowComponent from "./SlowComponent";
import { useState, memo } from "react";
import Model from "./Model";
const MemoisedMemo = memo(SlowComponent);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && <button onClick={() => setIsOpen(true)}>Open Model</button>}
      {isOpen && <Model close={() => setIsOpen(false)} />}
      <div>Something is here</div>
      <div>Something is here</div>
      <MemoisedMemo />
    </>
  );
}

export default App;
