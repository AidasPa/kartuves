import dom from "../dom.js";
let correctClicks = 0;

function handleKeyClick(key, e) {
  const word = sessionStorage.word;
  let errors = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] == key.toLowerCase()) {
      document.querySelectorAll(".letter")[i].innerHTML = key.toUpperCase(); // e.target.classList.add("key--correct");

      correctClicks++;
      updateState({
        game: {
          letters: appState.get().game.letters.push(key)
        }
      });

      if (correctClicks == word.length) {
        correctClicks = 0;
        errors = 0;
        updateState({
          modal: {
            display: true,
            type: "success"
          }
        });
      }
    } else {
      errors++;

      if (errors == word.length) {
        e.target.classList.add("key--wrong");
        updateState({
          game: {
            hearts: appState.get().game.hearts - 1
          }
        });
        return;
      }
    }
  }
}

function Key(props) {
  return dom.createElement("div", {
    onClick: e => handleKeyClick(props.key, e),
    className: props.classes
  }, props.key);
}

export default Key;