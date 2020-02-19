import dom from "./dom.js";
import Card from "./components/Card.js";
document.getElementById("app").appendChild(dom("div", null, Card("Welcome to!", "blah blah blah..", [{
  type: "success",
  text: "Go!"
}])));