import dom from "../dom.js";
import chars from "../data/chars.js";

import leaveGame from "../services/leaveGame.js";

import Card from "../components/Card.js";
import Key from "../components/Key.js";
import EndGameModal from "../components/EndGameModal.js";

window.addEventListener("beforeunload", function(e) {
  if (appState.get().game.started) {
    e.preventDefault();
    e.returnValue = "";
  }
});

let hearts = [];


function Hearts() {
  hearts = [];

  for (let i = 0; i < appState.get().game.hearts; i++) {
    hearts.push(<span>❤️</span>);
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
  return (
    <div>
      <EndGameModal a="b"/>
      <Card noTitle={true} heightAuto={true}>
        <div>
          <div className="card__title text--center">
            <Hearts />
            <hr />
            {appState
              .get()
              .game.word.split("")
              .map(l => (
                <div className="letter">
                  {checkIfLetterFound(l) !== null &&
                  checkIfLetterFound(l) !== false
                    ? l
                    : ""}
                </div>
              ))}
          </div>
          <div className="clear"></div>
          <hr />
          {chars.map(c => (
            <Key
              key={c.toUpperCase()}
              classes={
                checkIfLetterFound(c)
                  ? "key key--correct"
                  : checkIfLetterFound(c) !== null
                  ? "key key--wrong"
                  : "key"
              }
            />
          ))}
          <div className="clear"></div>
          <hr />
          <button
            onClick={() => leaveGame()}
            className="btn btn--danger btn--block"
          >
            LEAVE GAME
          </button>
        </div>
      </Card>
    </div>
  );
}

export default GameView;
