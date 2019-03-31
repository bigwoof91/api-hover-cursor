const setHeaders = (Origin = 'http://localhost:3000') => ({
  'Content-Type': 'application/json',
  Origin
});

function postCursorPosition(payload) {
  fetch('https://api-cursor.herokuapp.com/cursor', {
    headers: setHeaders(),
    method: 'POST',
    body: JSON.stringify(payload),
  });
};

module.exports = {
  cursorPosition: postCursorPosition
};