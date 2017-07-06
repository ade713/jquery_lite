
window.$l = function(arg) {
  if (typeof arg === "string") {
    let nodes = document.querySelectorAll(arg);
    return Array.from(nodes);
  }
};
