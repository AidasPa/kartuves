import dom from "../dom.js";

function Card(title, body, buttons = []) {
  return dom("div", {
    class: "card pos--center"
  }, dom("div", {
    class: "card__title"
  }, dom("h1", null, title)), dom("hr", null), dom("div", {
    class: "card__body"
  }, dom("p", null, body)), dom("hr", null), buttons.map(btn => {
    return dom("button", {
      class: "btn--success"
    }, "asd");
  }));
}

export default Card;