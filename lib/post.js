"use strict";

require("core-js/modules/es.promise");

const setHeaders = function setHeaders() {
  let Origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http://localhost:3000';
  return {
    'Content-Type': 'application/json',
    Origin
  };
};

function postCursorPosition(x, y) {
  fetch('https://api-cursor.herokuapp.com/cursor', {
    headers: setHeaders(),
    method: 'POST',
    body: createPayload(x, y)
  });
}

;

function createPayload(x_coordinates, y_coordinates) {
  return JSON.stringify({
    coordinates: [{
      x_coordinates,
      y_coordinates
    }],
    x_coordinates: [x_coordinates],
    y_coordinates: [y_coordinates]
  });
}

;
module.exports = {
  cursorPosition: postCursorPosition
};