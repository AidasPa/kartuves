import dom from "../dom.js";

function Card(props) {
  return dom.createElement("div", {
    className: "card pos--center"
  }, dom.createElement("div", {
    className: "card__title"
  }, dom.createElement("h1", null, props.title)), dom.createElement("hr", null), dom.createElement("div", {
    className: "card__body"
  }, props._children), props.goBtn ? dom.createElement("button", {
    className: "btn--success btn--block"
  }, "Go!") : "");
}

export default Card;