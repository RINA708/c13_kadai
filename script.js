// ===== 部屋(窓枠)の範囲。ここの4つの数字で調整します =====
var ROOM_LEFT   = 360;   // 部屋の左端
var ROOM_RIGHT  = 830;   // 部屋の右端
var ROOM_TOP    = 190;   // 部屋の上端
var ROOM_BOTTOM = 300;   // 部屋の下端

var FOO_W = 60;   // fooの幅
var FOO_H = 60;   // fooの高さ

// 蝶:マウスを乗せると画面のどこかへ逃げる
document.querySelectorAll('.butterfly').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left = (Math.random() * 850) + 'px';
    el.style.top  = (Math.random() * 430) + 'px';
  });
});

// foo:マウスを乗せると部屋の中だけで逃げる(外に出ない)
document.querySelectorAll('.foo').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    var maxX = ROOM_RIGHT  - FOO_W;   // これ以上右に行くと部屋からはみ出す
    var maxY = ROOM_BOTTOM - FOO_H;

    var x = ROOM_LEFT + Math.random() * (maxX - ROOM_LEFT);
    var y = ROOM_TOP  + Math.random() * (maxY - ROOM_TOP);

    el.style.left = x + 'px';
    el.style.top  = y + 'px';
  });
});
