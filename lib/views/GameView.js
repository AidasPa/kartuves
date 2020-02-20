import dom from "../dom.js";
import chars from "../data/chars.js";
import Card from "../components/Card.js";
import Key from "../components/Key.js";
import Modal from "../components/Modal.js";

function leaveGame() {
  sessionStorage.clear();
  updateState({
    view: "start",
    game: {}
  });
}

let hearts = [];

function Hearts() {
  hearts = [];
  console.log(appState.get().game.hearts);

  for (let i = 0; i < appState.get().game.hearts; i++) {
    hearts.push(dom.createElement("span", null, "\u2764\uFE0F"));
  }

  return hearts;
}

function checkIfLetterFound(letter) {
  console.log(appState);
  console.log(appState.get().game.letters.indexOf(letter)); // if (appState.get().game.letters.indexOf(letter) >= 0) {
  //   return "key key--correct";
  // } else {
  //   return "key";
  // }
}

function GameView() {
  console.log(appState);
  return dom.createElement("div", null, dom.createElement(Card, {
    noTitle: true,
    heightAuto: true
  }, dom.createElement("div", null, dom.createElement("div", {
    className: "card__title text--center"
  }, dom.createElement(Hearts, null), dom.createElement("hr", null), appState.get().game.word.split("").map(() => dom.createElement("div", {
    className: "letter"
  }))), dom.createElement("div", {
    className: "clear"
  }), dom.createElement("hr", null), chars.map(c => dom.createElement(Key, {
    key: c.toUpperCase(),
    classes: checkIfLetterFound(c)
  })), dom.createElement("div", {
    className: "clear"
  }), dom.createElement("hr", null), dom.createElement("button", {
    onClick: () => leaveGame(),
    className: "btn btn--danger btn--block"
  }, "LEAVE GAME"))));
}

export default GameView;