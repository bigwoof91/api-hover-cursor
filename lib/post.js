"use strict";

require("core-js/modules/es.promise");

const setHeaders = function setHeaders() {
  let Origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http://localhost:3000';
  return {
    'Content-Type': 'application/json',
    Origin
  };
};

function postCursorPosition(payload) {
  fetch('https://api-cursor.herokuapp.com/cursor', {
    headers: setHeaders(),
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

;
module.exports = {
  cursorPosition: postCursorPosition
};