/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);


window.$l = function(arg) {
  if (typeof arg === "string") {
    let nodes = Array.from(document.querySelectorAll(arg));
    return new DOMNodeCollection(nodes);
  } else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
    let children = [];
    this.nodes.forEach(node => {
      let childrenArray = Array.from(node.children);
      childrenArray.forEach(child => {
        children.push(child);
      });
    });
    return new DOMNodeCollection(children);
  }

  parent() {
    let parents = [];
    this.nodes.forEach(node => {
      parents.push(node.parentNode);
    });
    return new DOMNodeCollection(parents);
  }

  find() {
    return this.children();
  }

  remove() {
  }
}


module.exports = DOMNodeCollection;


/***/ })
/******/ ]);