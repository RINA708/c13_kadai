
var ROOM_LEFT   = 360;
var ROOM_RIGHT  = 830;
var ROOM_TOP    = 190;
var ROOM_BOTTOM = 300; 

var FOO_SIZE = 32;   


document.querySelectorAll('.butterfly').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left = (Math.random() * 850) + 'px';
    el.style.top  = (Math.random() * 430) + 'px';
  });
});


document.querySelectorAll('.foo').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    var maxX = ROOM_RIGHT  - FOO_SIZE;
    var maxY = ROOM_BOTTOM - FOO_SIZE;

    var x = ROOM_LEFT + Math.random() * (maxX - ROOM_LEFT);
    var y = ROOM_TOP  + Math.random() * (maxY - ROOM_TOP);

    el.style.left = x + 'px';
    el.style.top  = y + 'px';
  });
});
