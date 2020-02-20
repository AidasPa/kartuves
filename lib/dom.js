const dom = {
  init: function () {
    this.events = [];
  },
  mount: function (selector, elementToRender) {
    this.application = selector;
    this.render(elementToRender);
  },
  reinitialize: function () {
    console.log("k");
    this.events.forEach(element => {
      document.querySelector(`[data=${element.hash}]`).addEventListener("click", e => {
        element.event();
      });
    });
  },
  h_render: function (element) {
    this.application.appendChild(element);
    document.querySelectorAll("div")[1].remove();
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
            // const hash = Math.random() * 10;
            // element.setAttribute("data", hash);
            // this.events.push({ hash: hash, event: value() });
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
}; // dom.init();

export default dom;