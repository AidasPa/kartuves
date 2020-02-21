import dom from "../dom.js";
import Modal from "./Modal.js";
import leaveGame from "../services/leaveGame.js";

function EndGameModal(props) {
  return dom.createElement("div", null, dom.createElement(Modal, {
    display: appState.get().modal.display
  }, dom.createElement("div", null, dom.createElement("h1", null, appState.get().modal.won ? "🎉 You won! :)" : "😥 You lost! :("), appState.get().modal.won ? dom.createElement("p", null, "You made", " ", dom.createElement("b", null, appState.get().game.initHearts - appState.get().game.hearts), " ", appState.get().game.initHearts - appState.get().game.hearts == 1 ? "mistake" : "mistakes", "!") : dom.createElement("p", null, "The word was ", dom.createElement("b", null, appState.get().game.word, "!")), dom.createElement("hr", null), dom.createElement("button", {
    className: appState.get().modal.won ? "btn btn--success btn--block" : "btn btn--danger btn--block",
    onClick: () => leaveGame()
  }, "GO HOME"))));
}

export default EndGameModal;