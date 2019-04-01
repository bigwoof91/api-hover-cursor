const post = require('./post.js');

function getCursorXY(track = false, log = false) {
  if (window.Event) { // for old browsers; https://developer.mozilla.org/en-US/docs/Web/API/Window/captureEvents
    document.captureEvents(Event.MOUSEMOVE);
  }
  document.onmousemove = event => getCoordinates(event, track, log);
};

function getCoordinates(e, doTrack = false, doLog = false) {
  const x = getCursorX(e);
  const y = getCursorY(e);

  if (doLog) logXY(x, y);
  if (doTrack) post.cursorPosition(x, y);

  return { x, y }
};

function getCursorX(e) {
  return (window.Event) ?
    e.pageX :
    event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
};

function getCursorY(e) {
  return (window.Event) ?
    e.pageY :
    event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
};

function logXY(x, y) {
  console.log('X:', x, 'Y:', y);
};

module.exports = {
  getCursorXY
};
