import dom from "../dom.js";
import chars from "../data/chars.js";

import Card from "../components/Card.js";
import Key from "../components/Key.js";

import Modal from "../components/Modal.js";

function leaveGame() {
  sessionStorage.clear();
  updateState({ view: "start", game: {} });
}

let hearts = [];

function Hearts() {
  hearts = [];
  console.log(appState.get().game.hearts);

  for (let i = 0; i < appState.get().game.hearts; i++) {
    hearts.push(<span>❤️</span>);
  }
  return hearts;
}

function checkIfLetterFound(letter) {
  console.log(appState);
  console.log(appState.get().game.letters.indexOf(letter));
  
  // if (appState.get().game.letters.indexOf(letter) >= 0) {
  //   return "key key--correct";
  // } else {
  //   return "key";
  // }
}

function GameView() {
  
  console.log(appState);
  return (
    <div>
      <Card noTitle={true} heightAuto={true}>
        <div>
          <div className="card__title text--center">
            <Hearts />
            <hr />
            {appState.get().game.word.split("").map(() => (
              <div className="letter"></div>
            ))}
          </div>
          <div className="clear"></div>
          <hr />
          {chars.map(c => (
            <Key key={c.toUpperCase()} classes={checkIfLetterFound(c)} />
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
