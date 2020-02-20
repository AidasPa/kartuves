import dom from "./dom.js";

// VIEWS
import StartView from "./views/StartView.js";
import GameView from "./views/GameView.js";

function View() {
  console.log(sessionStorage.getItem("game") === undefined);

  if (sessionStorage.getItem("game") !== null) {
    return <GameView />;
  } else {
    switch (appState.get().view) {
      case "start":
        return <StartView />;

      default:
        return <GameView />;
    }
  }
}
function App(props) {
  return <View />;
}

export default App;

// start -> word hidden + difficulty
// game -> word underlined divs + keyboard styled letters synchronized with the keyboard
// |> won -> modal congratulating the player
// |> lost -> modal stating that the player lost
