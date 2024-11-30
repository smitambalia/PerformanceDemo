import "./App.css";

import SlowComponent from "./SlowComponent";
import ButtonWithModal from "./ButtonWIthModal";
function App() {
  return (
    <>
      <ButtonWithModal />
      <div>Something is here</div>
      <div>Something is here</div>
      <SlowComponent />
    </>
  );
}

export default App;
