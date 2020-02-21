import dom from "../dom.js";

function Modal(props) {
  return (
    <div
      className="modal__overlay"
      style={props.display ? "display:block" : "display:none"}
    >
      <div className={"modal modal--auto pos--center"}>{props._children}</div>
    </div>
  );
}
export default Modal;
