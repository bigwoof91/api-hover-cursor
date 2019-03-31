function getCursorXY(log = false) {
  if (window.Event) { // for old browsers; https://developer.mozilla.org/en-US/docs/Web/API/Window/captureEvents
    document.captureEvents(Event.MOUSEMOVE);
  }
  document.onmousemove = event => getCoordinates(event, log);
};

function logXY(x, y) {
  console.log('X:', x, 'Y:', y);
};

function getCoordinates(e, doLog = false) {
  var y = getCursorY(e);
  var x = getCursorX(e);
  if (doLog) logXY(x, y);
  return { x, y, }
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
