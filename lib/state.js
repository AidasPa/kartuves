class State {
  constructor(state) {
    this.state = state;
    console.warn(this.state);
  }

  get() {
    return this.state;
  }

  set(newState) {
    this.state = this.mergeDeep(this.state, newState);
    return new Promise(res => {
      res();
    });
  } // FROM STACKOVERFLOW


  mergeDeep(...objects) {
    const isObject = obj => obj && typeof obj === "object";

    return objects.reduce((prev, obj) => {
      Object.keys(obj).forEach(key => {
        const pVal = prev[key];
        const oVal = obj[key];

        if (Array.isArray(pVal) && Array.isArray(oVal)) {
          prev[key] = pVal.concat(...oVal);
        } else if (isObject(pVal) && isObject(oVal)) {
          prev[key] = this.mergeDeep(pVal, oVal);
        } else {
          prev[key] = oVal;
        }
      });
      return prev;
    }, {});
  } // appendObject(oldState, newState) {
  //   for (const s in newState) {
  //     // console.log(this.state);
  //     if (oldState[s] !== undefined) {
  //       if (typeof newProp === "object") {
  //         oldState[s] = this.appendObject(oldState[s], newState[s]);
  //       } else {
  //         oldState[s] = newState[s];
  //       }
  //     }
  //   }
  // }


}

export default State;
/*
 */