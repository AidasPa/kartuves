import dom from "../dom.js";
// import appState from "../state.js";

function Key(props) {
  return (
    <button onClick={() => console.log("h")} className={"btn--" + props.type}>
      {props.text}
    </button>
  );
}
export default Key;
