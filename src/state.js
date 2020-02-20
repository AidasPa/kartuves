import dom from "./dom.js";

class State {
  constructor(state) {
    this.state = state;
  }
  get() {
    return this.state;
  }
  set_elements(element) {
    this.rendering = element;
  }
  set(newState) {
    for (var s in newState) {
      this.state[s] = newState[s];
    }
    return new Promise(res => {
      res(this.state);
    });
  }
}

export default State;

/*
 */
