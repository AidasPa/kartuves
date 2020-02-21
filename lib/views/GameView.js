import dom from "../dom.js";
import chars from "../data/chars.js";
import leaveGame from "../services/leaveGame.js";
import Card from "../components/Card.js";
import Key from "../components/Key.js";
import EndGameModal from "../components/EndGameModal.js";
window.addEventListener("beforeunload", function (e) {
  if (appState.get().game.started) {
    e.preventDefault();
    e.returnValue = "";
  }
});
let hearts = [];

function Hearts() {
  hearts = [];

  for (let i = 0; i < appState.get().game.hearts; i++) {
    hearts.push(dom.createElement("span", null, "\u2764\uFE0F"));
  }

  return hearts;
}

function checkIfLetterFound(letter) {
  if (appState.get().game.letters[letter] !== undefined) {
    if (appState.get().game.letters[letter]) {
      return true;
    } else {
      return false;
    }
  } else {
    return null;
  }
}

function GameView() {
  console.log(appState.get().game.hearts);
  return dom.createElement("div", null, dom.createElement(EndGameModal, {
    a: "b"
  }), dom.createElement(Card, {
    noTitle: true,
    heightAuto: true
  }, dom.createElement("div", null, dom.createElement("div", {
    className: "card__title text--center"
  }, dom.createElement(Hearts, null), dom.createElement("hr", null), appState.get().game.word.split("").map(l => dom.createElement("div", {
    className: "letter"
  }, checkIfLetterFound(l) !== null && checkIfLetterFound(l) !== false ? l : ""))), dom.createElement("div", {
    className: "clear"
  }), dom.createElement("hr", null), chars.map(c => dom.createElement(Key, {
    key: c.toUpperCase(),
    classes: checkIfLetterFound(c) ? "key key--correct" : checkIfLetterFound(c) !== null ? "key key--wrong" : "key"
  })), dom.createElement("div", {
    className: "clear"
  }), dom.createElement("hr", null), dom.createElement("button", {
    onClick: () => leaveGame(),
    className: "btn btn--danger btn--block"
  }, "LEAVE GAME"))));
}

export default GameView;