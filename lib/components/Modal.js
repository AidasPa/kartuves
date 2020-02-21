import dom from "../dom.js";

function Modal(props) {
  return dom.createElement("div", {
    className: "modal__overlay",
    style: props.display ? "display:block" : "display:none"
  }, dom.createElement("div", {
    className: "modal modal--auto pos--center"
  }, props._children));
}

export default Modal;