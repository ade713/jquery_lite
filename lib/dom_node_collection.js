class DOMNodeCollection {
  constructor(HTMLElements) {
    this.nodes = HTMLElements;
  }

  html(string) {
    if (string) {
      this.nodes.forEach((node) => {
        node.innerHTML = string;
      });
    } else {
      return this.nodes[0].innerHTML;
    }
  }

  empty() {
    this.nodes.forEach((node) => {
      node.innerHTML = '';
    });
  }

  append(...toAppend) {
    this.nodes.forEach((node) => {
      toAppend.forEach((el) => {
        if (typeof el === "string") {
          node.innerHTML += el;
        } else if (el instanceof HTMLElement) {
          node.innerHTML += el.outerHTML;
        } else {
          el.nodes.forEach((innerNode) => {
            node.innerHTML += innerNode.outerHTML;
          });
        }
      });
    });

  }

  attr(attrName, attrValue) {
    if (attrValue) {
      this.nodes.forEach((node) => {
        node.setAttribute(attrName, attrValue);
      });
    } else {
      return this.nodes[0].getAttribute(attrName);
    }
  }

  addClass(...classNames) {
    this.nodes.forEach((node) => {
      classNames.forEach((className) => {
        node.className += ` ${className}`;
      });
    });
  }

  removeClass(...classNames) {
    if (arguments.length === 0 ) {
      this.nodes.forEach(node => {
        node.className = '';
      });
    }
    this.nodes.forEach((node) => {
      classNames.forEach((className) => {
        node.className = node.className.replace(` ${className}`,'');
      });
    });
  }

  children() {

  }

  parent() {

  }

  find() {

  }

  remove() {

  }
}


module.exports = DOMNodeCollection;
