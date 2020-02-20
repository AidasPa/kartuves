import dom from "../dom.js";
function Card(props) {
  return (
    <div className="card pos--center">
      <div className="card__title">
        <h1>{props.title}</h1>
      </div>
      <hr />
      <div className="card__body">{props._children}</div>
      {props.goBtn ? (
        <button className="btn--success btn--block">Go!</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Card;
