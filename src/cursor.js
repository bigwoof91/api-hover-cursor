const post = require('./post.js');

function getCursorXY(log = false, track = false) {
  if (window.Event) { // for old browsers; https://developer.mozilla.org/en-US/docs/Web/API/Window/captureEvents
    document.captureEvents(Event.MOUSEMOVE);
  }
  document.onmousemove = event => getCoordinates(event, log, track);
};

function logXY(x, y) {
  console.log('X:', x, 'Y:', y);
};

function getCoordinates(e, doLog = false, doTrack = false) {
  const y_coordinates = getCursorY(e);
  const x_coordinates = getCursorX(e);
  const payload = {
    coordinates: [{x, y}],
    x_coordinates,
    y_coordinates,
  };

  if (doLog) logXY(x_coordinates, y_coordinates);
  if (doTrack) post.cursorPosition(payload);

  return { x_coordinates, y_coordinates }
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



module.exports = {
  getCursorXY
};
