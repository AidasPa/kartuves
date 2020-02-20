import dom from "./dom.js";
import State from "./state.js";
import App from "./App.js"; // STATE INIT

const appState = new State({
  view: "start",
  game: {
    difficulty: null,
    word: null,
    letters: []
  },
  modal: {
    display: false
  }
}); // UTILITY TO UPDATE THE CURRENT STATE & DOM

function updateState(obj) {
  appState.set(obj).then(state => {
    dom.h_render(dom.createElement(Index, null));
  });
}

window.updateState = updateState;
window.appState = appState; // INDEX

function Index() {
  return dom.createElement(App, null);
}

dom.mount(document.querySelector("#app"), dom.createElement(Index, null));
export { appState, updateState };