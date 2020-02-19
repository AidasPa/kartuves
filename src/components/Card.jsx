import dom from "../dom.js";

function Card(title, body, buttons = []) {
  return (
    <div class="card pos--center">
      <div class="card__title">
        <h1>{title}</h1>
      </div>
      <hr/>
      <div class="card__body">
        <p>{body}</p>
      </div>
      <hr />
      {buttons.map(btn => {
        return <button class={"btn--success"}>asd</button>
      })}
    </div>
  );
}

export default Card;
