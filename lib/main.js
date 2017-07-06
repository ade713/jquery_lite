const DOMNodeCollection = require('./dom_node_collection.js');


window.$l = function(arg) {
  if (typeof arg === "string") {
    let nodes = Array.from(document.querySelectorAll(arg));
    return new DOMNodeCollection(nodes);
  } else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }
};
