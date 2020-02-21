import dom from "../dom.js";

// let wrongClicks = 0;
// let correctClicks = 0;

function addCorrectClick() {
  appState.set({
    game: {
      correctClicks: appState.get().game.correctClicks + 1
    }
  });
  return true;
}
function removeHeart() {
  updateState({
    game: {
      hearts: appState.get().game.hearts - 1
    }
  });
  appState.set({
    game: {
      wrongClicks: appState.get().game.wrongClicks + 1
    }
  });
  return false;
}

function handleKeyClick(key, e) {
  const word = appState.get().game.word;
  if (appState.get().game.letters[key.toLowerCase()] !== undefined) {
    console.log(key, "already found");
  } else {
    updateState({
      game: {
        letters: {
          [key.toLowerCase()]:
            word
              .toLowerCase()
              .split("")
              .indexOf(key.toLowerCase()) >= 0
              ? addCorrectClick()
              : removeHeart()
        }
      }
    });
    if (appState.get().game.correctClicks == new Set(word.split("")).size) {
      setTimeout(() => {
        updateState({
          game: {
            started: false
          },
          modal: {
            display: true,
            won: true
          }
        });
      }, 100);
    }
    if (appState.get().game.wrongClicks == appState.get().game.initHearts) {
      setTimeout(() => {
        updateState({
          game: {
            started: false
          },
          modal: {
            display: true,
            won: false
          }
        });
      }, 100);
    }
    // }
    // for (let i = 0; i < word.length; i++) {
    //   console.warn(word[i] == key.toLowerCase())
    //   if (word[i] == key.toLowerCase()) {

    //     updateState({
    //       game: {
    //         letters: {
    //           [key.toLowerCase()]: true
    //         }
    //       }
    //     });
    //   } else {
    //     updateState({
    //       game: {
    //         letters: {
    //           [key.toLowerCase()]: false
    //         }
    //       }
    //     });
    //   }

    //   // if (correctClicks == word.length) {
    //   //   correctClicks = 0;
    //   //   errors = 0;
    //   //   updateState({
    //   //     modal: {
    //   //       display: true,
    //   //       type: "success"
    //   //     }
    //   //   });
    //   // }
    //   // else {
    //   //   errors++;
    //   //   if (errors == word.length) {
    //   //     updateState({
    //   //       game: {
    //   //         hearts: appState.get().game.hearts - 1,
    //   //         letters: {
    //   //           [key.toLowerCase()]: false
    //   //         }
    //   //       }
    //   //     });
    //   //   }
    //   // }
    // }
  }
}

function Key(props) {
  return (
    <div onClick={e => handleKeyClick(props.key, e)} className={props.classes}>
      {props.key}
    </div>
  );
}
export default Key;
