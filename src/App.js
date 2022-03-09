import MainContainer from "./MainContainer";

function App() {

  const SCREEN_HEIGHT = window.innerHeight;
  const SCREEN_WIDTH = window.innerWidth;

  return (
    <div className="OutterBox">
        <MainContainer
          SCREEN_HEIGHT = {SCREEN_HEIGHT}
          SCREEN_WIDTH = {SCREEN_WIDTH}
        />
    </div>
  );
}

export default App;
