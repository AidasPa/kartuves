import dom from "./dom.js";
import State from "./state.js"; // STATE INIT

const appState = new State({
  view: "home"
}); // UTILITY TO UPDATE STATE & DOM

function updateState(obj) {
  appState.set(obj).then(state => {
    dom.h_render(dom.createElement(App, null));
  });
} // APP MAIN


function togglePages() {
  if (appState.get().view === "home") {
    updateState({
      view: "homepage"
    });
  } else {
    updateState({
      view: "home"
    });
  }
}

function App() {
  return dom.createElement("div", null, appState.get().view == "home" ? "homepage" : "not home page", dom.createElement("button", {
    onClick: () => togglePages()
  }, "click me to go to the ", appState.get().view));
}

dom.mount(document.querySelector("#app"), dom.createElement(App, null));
export { appState };