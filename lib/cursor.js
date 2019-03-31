"use strict";

function getCursorXY() {
  let log = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (window.Event) {
    // for old browsers; https://developer.mozilla.org/en-US/docs/Web/API/Window/captureEvents
    document.captureEvents(Event.MOUSEMOVE);
  }

  document.onmousemove = event => getCoordinates(event, log);
}

;

function logXY(x, y) {
  console.log('X:', x, 'Y:', y);
}

;

function getCoordinates(e) {
  let doLog = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var y = getCursorY(e);
  var x = getCursorX(e);
  if (doLog) logXY(x, y);
  return {
    x,
    y
  };
}

;

function getCursorX(e) {
  return window.Event ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
}

;

function getCursorY(e) {
  return window.Event ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}

;
module.exports = {
  getCursorXY
};