import dom from "../dom.js";
import Modal from "./Modal.js";
import leaveGame from "../services/leaveGame.js";

function EndGameModal(props) {
  return (
    <div>
      <Modal display={appState.get().modal.display}>
        <div>
          <h1>
            {appState.get().modal.won ? "🎉 You won! :)" : "😥 You lost! :("}
          </h1>
          {appState.get().modal.won ? (
            <p>
              You made{" "}
              <b>
                {appState.get().game.initHearts - appState.get().game.hearts}
              </b>{" "}
              {appState.get().game.initHearts - appState.get().game.hearts == 1
                ? "mistake"
                : "mistakes"}
              !
            </p>
          ) : (
            <p>
              The word was <b>{appState.get().game.word}!</b>
            </p>
          )}
          <hr />
          <button
            className={
              appState.get().modal.won
                ? "btn btn--success btn--block"
                : "btn btn--danger btn--block"
            }
            onClick={() => leaveGame()}
          >
            GO HOME
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default EndGameModal;
