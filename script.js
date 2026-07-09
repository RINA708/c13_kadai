document.querySelectorAll('.butterfly').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    var x = Math.random() * 850;
    var y = Math.random() * 430;
    el.style.left = x + 'px';
    el.style.top  = y + 'px';
  });
});

document.querySelectorAll('.foo').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    var x = 360 + Math.random() * 430;
    var y = 190 + Math.random() * 70;
    el.style.left = x + 'px';
    el.style.top  = y + 'px';
  });
});
