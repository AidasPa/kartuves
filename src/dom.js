const dom = function(tag, attrs, children) {
  var element = document.createElement(tag);

  for (let name in attrs) {
    if (name && attrs.hasOwnProperty(name)) {
      let value = attrs[name];
      if (value === true) {
        element.setAttribute(name, name);
      } else if (value !== false && value != null) {
        element.setAttribute(name, value.toString());
      }
    }
  }
  for (let i = 2; i < arguments.length; i++) {
    let child = arguments[i];
    console.log(child)
    if (Array.isArray(child)) {
      for (let i = 0; i < child.length; i++) {
        element.appendChild(child[i]);
      }
    } else {
      element.appendChild(
        child.nodeType == null
          ? document.createTextNode(child.toString())
          : child
      );
    }
  }
  return element;
};
export default dom;
