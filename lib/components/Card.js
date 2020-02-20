import dom from "../dom.js";

function Card(props) {
  return dom.createElement("div", {
    className: "card card--auto pos--center"
  }, props.noTitle ? props._children : dom.createElement("div", null, dom.createElement("div", {
    className: "card__title"
  }, dom.createElement("h1", null, props.title)), dom.createElement("hr", null), dom.createElement("div", {
    className: "card__body"
  }, props._children)));
}

export default Card;