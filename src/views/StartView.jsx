import dom from "../dom.js";
import Card from "../components/Card.js";

let word = "";
let difficulty;

function handleChange(e) {
  if (e.name == "word") {
    word = e.value;
    console.log(word);
  } else if (e.name == "difficulty") {
    difficulty = e.value;
    console.log(difficulty);
  }
}
function saveWord() {
  if (word.length !== 0) {
    appState.set({
      game: {
        word: word,
        started: true
      }
    });
    // sessionStorage.setItem("game", true); // dev only
    // sessionStorage.setItem("word", word); // dev only
    let heartNumber = 7;

    switch (parseInt(difficulty)) {
      case 0:
        heartNumber = 7;
        break;
      case 1:
        heartNumber = 5;
        break;
      case 2:
        heartNumber = 4;
        break;
      default:
        heartNumber = 7;
        break;
    }

    updateState({
      view: "game",
      game: {
        hearts: heartNumber,
        initHearts: heartNumber,
        crosses: 0
      }
    });
  }
}

function StartView() {
  return (
    <Card title="Welcome to kartuves!">
      <div>
        <input
          className="input input--center"
          type="password"
          onChange={e => handleChange(e.target)}
          name="word"
          placeholder="a random word"
        />
        <br />
        <br />

        <select
          onChange={e => handleChange(e.target)}
          className="input input--center"
          name="difficulty"
          id=""
        >
          <option value="-1" disabled selected>
            Select difficulty
          </option>
          <option value="0">Easy</option>
          <option value="1">Medium</option>
          <option value="2">Hard</option>
        </select>
        <br />
        <br />
        <button
          onClick={() => saveWord()}
          className="btn btn--block btn--success"
        >
          GO!
        </button>
      </div>
    </Card>
  );
}
export default StartView;
