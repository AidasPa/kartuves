import dom from "./dom.js";

class State {
  constructor(state) {
    this.state = state;
  }
  get() {
    return this.state;
  }
  set(newState) {
    this.state = this.appendObject(this.state, newState);
    return new Promise(res => {
      res();
    });
  }

  appendObject(oldState, newState) {
    for (const s in newState) {
      if (oldState[s] !== undefined) {
        if (typeof newProp === "object") {
          oldState[s] = this.appendObject(oldState[s], newState[s]);
        } else {
          oldState[s] = newState[s];
        }
      }
    }
  }
}

export default State;

/*
 */
