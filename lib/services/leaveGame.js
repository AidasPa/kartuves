function leaveGame() {
  sessionStorage.clear();
  updateState({
    view: "start",
    game: {
      started: false,
      word: null,
      wrongClicks: 0,
      correctClicks: 0
    },
    modal: {
      display: false,
      won: false
    }
  });
  appState.state.game.letters = {};
}

export default leaveGame;