"use strict";

function getCursorXY() {
  let log = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (window.Event) {
    // for old browsers; https://developer.mozilla.org/en-US/docs/Web/API/Window/captureEvents
    document.captureEvents(Event.MOUSEMOVE);
  }

  document.onmousemove = e => getCoordinates(e, log);
}

;

function logXY(_ref) {
  let x = _ref.x,
      y = _ref.y;
  console.log("positionX: ".concat(x, ", positionY: ").concat(y));
}

function getCoordinates(e) {
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
}

;

function getCursorY(e) {
  window.Event ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}

function getCursorX(e) {
  window.Event ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
}

module.exports = {
  getCursorXY
};