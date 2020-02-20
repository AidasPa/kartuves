import dom from "./dom.js";
import State from "./state.js";

// STATE INIT

const appState = new State({
  view: "home"
});

// UTILITY TO UPDATE STATE & DOM

function updateState(obj) {
  appState.set(obj).then(state => {
    dom.h_render(<App />);
  });
}

// APP MAIN

function togglePages() {
  if (appState.get().view === "home") {
    updateState({ view: "homepage" });
  } else {
    updateState({ view: "home" });
  }
}

function App() {
  return (
    <div>
      {appState.get().view == "home" ? "homepage" : "not home page"}
      <button onClick={() => togglePages()}>
        click me to go to the {appState.get().view}
      </button>
    </div>
  );
}
dom.mount(document.querySelector("#app"), <App />);

export { appState };
