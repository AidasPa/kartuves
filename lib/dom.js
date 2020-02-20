const dom = {
  mount: function (selector) {
    this.application = selector;
  },
  render: function (element) {
    this.application.appendChild(element);
  },
  fragment: function (tag) {},
  createElement: function (tag, attrs, children) {
    if (typeof tag === "function") {
      if (children !== undefined) {
        attrs._children = children;
      }

      return tag(attrs);
    } else {
      var element = document.createElement(tag);

      for (let name in attrs) {
        if (name && attrs.hasOwnProperty(name)) {
          let value = attrs[name];
          if (name === "className") name = "class";

          if (name !== "onClick") {
            if (value === true) {
              element.setAttribute(name, name);
            } else if (value !== false && value != null) {
              element.setAttribute(name, value.toString());
            }
          } else {
            element.addEventListener("click", () => {
              value();
            });
          }
        }
      }

      for (let i = 2; i < arguments.length; i++) {
        let child = arguments[i];

        if (Array.isArray(child)) {
          for (let i = 0; i < child.length; i++) {
            element.appendChild(child[i]);
          }
        } else {
          element.appendChild(child.nodeType == null ? document.createTextNode(child.toString()) : child);
        }
      }

      return element;
    }
  }
};
export default dom;