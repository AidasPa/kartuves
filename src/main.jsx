import dom from "./dom.js";
import State from "./State.js";

import App from "./App.js";

// STATE INIT

const appState = new State({
  view: "start",
  game: {
    difficulty: null,
    word: null,
    letters: {},
    correctClicks: 0,
    wrongClicks: 0
  },
  modal: {
    display: false
  }
});

// UTILITY TO UPDATE THE CURRENT STATE & DOM

function updateState(obj) {
  appState.set(obj).then(state => {
    dom.h_render(<Index />);
  });
}
window.updateState = updateState;
window.appState = appState;
// INDEX

function Index() {
  return <App />;
}
dom.mount(document.querySelector("#app"), <Index />);

export { appState, updateState };
