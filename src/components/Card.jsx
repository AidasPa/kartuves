import dom from "../dom.js";
function Card(props) {
  return (
    <div className="card card--auto pos--center">
      {props.noTitle ? (
        props._children
      ) : (
        <div>
          <div className="card__title">
            <h1>{props.title}</h1>
          </div>
          <hr />
          <div className="card__body">{props._children}</div>
        </div>
      )}
    </div>
  );
}

export default Card;
