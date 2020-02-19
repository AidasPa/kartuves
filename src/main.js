import dom from "./dom.js";
document.getElementById("app").appendChild(
  <div>
    <h2>
      This is a template written in TSX, then compiled to JSX by tsc (the
      Typescript compiler), and finally injected into a web page using a script
    </h2>
  </div>
);