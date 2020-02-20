class State {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    for (var s in newState) {
      this.state[s] = newState[s];
    }
  }

}

const appState = new State({});
export default appState;
/*
 */