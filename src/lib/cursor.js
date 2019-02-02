export function init() {
	if (window.Event) {
	document.captureEvents(Event.MOUSEMOVE);
	}
	document.onmousemove = getCursorXY;
}

function logXY({ x, y }) {
  return console.log(`positionX: ${x}, positionY: ${y}`);
}

function getCursorXY(e) {
  var y = getCursorY(e);
  var x = getCursorX(e);
  logXY({x, y})
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