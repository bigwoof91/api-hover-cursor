"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Cursor {
  constructor() {
    _defineProperty(this, "getCursorXY", function () {
      let log = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (window.Event) {
        // for old browsers; https://developer.mozilla.org/en-US/docs/Web/API/Window/captureEvents
        document.captureEvents(Event.MOUSEMOVE);
      }

      document.onmousemove = e => getCoordinates(e, log);
    });

    _defineProperty(this, "logXY", (_ref) => {
      let x = _ref.x,
          y = _ref.y;
      return console.log("positionX: ".concat(x, ", positionY: ").concat(y));
    });

    _defineProperty(this, "getCoordinates", function (e) {
      let doLog = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var y = getCursorY(e);
      var x = getCursorX(e);
      if (doLog) logXY({
        x,
        y
      });
      return {
        x,
        y
      };
    });

    _defineProperty(this, "getCursorY", e => window.Event ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop));

    _defineProperty(this, "getCursorX", e => window.Event ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft));
  }

}

exports.default = Cursor;
; // for testing on index.html
// window.el = Cursor