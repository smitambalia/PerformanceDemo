import "./App.css";

import SlowComponent from "./SlowComponent";
import ButtonWithModal from "./ButtonWIthModal";
import RefectorComponent from "./components/RefectorComponent";
function App() {
  return (
    <>
      <RefectorComponent>
        <ButtonWithModal />
        <div>Something is here</div>
        <div>Something is here</div>
        <SlowComponent />
      </RefectorComponent>
    </>
  );
}

export default App;
