import dom from "./dom.js";
import Card from "./components/Card.js";

document.getElementById("app").appendChild(<div>
  {Card(
    "Welcome to!",
    "blah blah blah..",
    [
      {
        type: "success",
        text: "Go!"
      }
    ]
  )}
</div>);
