import dom from "./dom.js"; // VIEWS

import StartView from "./views/StartView.js";
import GameView from "./views/GameView.js";

function View() {
  switch (appState.state.view) {
    case "start":
      return dom.createElement(StartView, null);

    default:
      return dom.createElement(GameView, null);
  }
}

function App(props) {
  return dom.createElement(View, null);
}

export default App; // start -> word hidden + difficulty
// game -> word underlined divs + keyboard styled letters synchronized with the keyboard
// |> won -> modal congratulating the player
// |> lost -> modal stating that the player lost