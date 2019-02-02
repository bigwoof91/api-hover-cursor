function getCursorXY(log = false) {
	if (window.Event) {
	document.captureEvents(Event.MOUSEMOVE);
	}
	document.onmousemove = (e) => getCoordinates(e, log);
}

function logXY({ x, y }) {
  return console.log(`positionX: ${x}, positionY: ${y}`);
}

function getCoordinates(e, log = false) {
  var y = getCursorY(e);
  var x = getCursorX(e);
  if (log) logXY({x, y})
  return {
    x,
    y,
  }
}

function getCursorY(e) {
  return (window.Event) 
    ? e.pageY
      : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}

function getCursorX(e) {
  return (window.Event) 
    ? e.pageX 
      : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
}

module.exports = {
  getCursorXY
}