"use strict";

const post = require('./post.js');

function getCursorXY() {
  let track = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  let log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (window.Event) {
    // for old browsers; https://developer.mozilla.org/en-US/docs/Web/API/Window/captureEvents
    document.captureEvents(Event.MOUSEMOVE);
  }

  document.onmousemove = event => getCoordinates(event, track, log);
}

;

function getCoordinates(e) {
  let doTrack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let doLog = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const x = getCursorX(e);
  const y = getCursorY(e);
  if (doLog) logXY(x, y);
  if (doTrack) post.cursorPosition(x, y);
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

function logXY(x, y) {
  console.log('X:', x, 'Y:', y);
}

;
module.exports = {
  getCursorXY
};