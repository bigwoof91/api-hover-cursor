
export default class Cursor {
  getCursorXY = (log = false) => {
    if (window.Event) { // for old browsers; https://developer.mozilla.org/en-US/docs/Web/API/Window/captureEvents
    document.captureEvents(Event.MOUSEMOVE);
    }
    document.onmousemove = (e) => getCoordinates(e, log);
  };
  
  logXY = ({ x, y }) => console.log(`positionX: ${x}, positionY: ${y}`);
  
  getCoordinates = (e, doLog = false) => {
    var y = getCursorY(e);
    var x = getCursorX(e);
    if (doLog) logXY({x, y})
    return {
      x,
      y,
    }
  };
  
  getCursorY = (e) => (window.Event) 
      ? e.pageY
        : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

  
  getCursorX = (e) => (window.Event) 
      ? e.pageX 
        : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
  };

// for testing on index.html
// window.el = Cursor
