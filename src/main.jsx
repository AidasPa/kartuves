import dom from "./dom.js";
import Card from "./components/Card.js";
import Key from "./components/Key.js";

import appState from "./state.js";

appState.setState({
  view: "home"
});
dom.mount(document.querySelector("#app"));
dom.render(
  <Card title="Welcome to kartuves!" goBtn="true" isForm="true">
    <Key type="success" text="success" />
  </Card>
);
