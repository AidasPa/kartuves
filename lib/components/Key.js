import dom from "../dom.js"; // import appState from "../state.js";

function Key(props) {
  return dom.createElement("button", {
    onClick: () => console.log("h"),
    className: "btn--" + props.type
  }, props.text);
}

export default Key;