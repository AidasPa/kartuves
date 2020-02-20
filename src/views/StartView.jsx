import dom from "../dom.js";
import Card from "../components/Card.js";

let word;
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
  console.log('saveWord pries set', JSON.parse(JSON.stringify(appState)))
  appState.set({
    game: {
      word: word
    }
  });
  console.log('saveWord po set', JSON.parse(JSON.stringify(appState)))
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
  console.log('saveWord pries update', JSON.parse(JSON.stringify(appState)))
  
  updateState({
    view: "game",
    game: {
      hearts: heartNumber,
      // letters: []
    }
  });
  console.log('saveWord pp update', JSON.parse(JSON.stringify(appState)))
}

function StartView() {
  return (
    <Card title="Welcome to kartuves!">
      <div>
        <input
          value={appState.get().word}
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
