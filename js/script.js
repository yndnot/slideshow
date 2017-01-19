// 次画像へ送る
function slideNext(){
  var $active = $('#slideshow img.active');

  if($active.length == 0){
    $active = $('#slideshow img:last');
  }

  var $next = $active.next().length ? $active.next() : $('#slideshow img:first');

  $active.addClass('last-active');

  $next.css({opacity: 0.0})
  .addClass('active')
  .animate({opacity: 1.0}, 100, function() {
    $active.removeClass('active last-active');
  });
}

// 前画像へ送る
function slidePrev(){
  var $active = $('#slideshow img.active');

  if($active.length == 0){
    $active = $('#slideshow img:last');
  }

  var $prev = $active.prev().length ? $active.prev() : $('#slideshow img:last');

  $active.addClass('last-active');

  $prev.css({opacity: 0.0})
  .addClass('active')
  .animate({opacity: 1.0}, 100, function() {
    $active.removeClass('active last-active');
  });
}

// (vh無効ブラウザ対策)ウィンドウから縦方向にはみ出さないよう画像リサイズ
function resizeImage(){
  var $agent = navigator.userAgent;
  if($agent.search(/iPhone/) != -1 ||
  $agent.search(/iPad/) != -1 ||
  $agent.search(/iPod/) != -1 ||
  $agent.search(/Android/) != -1){
    var $vh100 = window.innerHeight;
    $('#slideshow').css({'height': $vh100});
    $('#slideshow img').css({'max-height': $vh100});
  }
}

$(function(){
  // 自動切り替え
  var $slide_interval = 5000;
  setInterval("slideNext()", $slide_interval);

  // (vh無効ブラウザ対策)初回＋ウィンドウサイズ変更に合わせて画像リサイズ
  resizeImage();
  var timer = false;
  $(window).resize(function(){
    if(timer !== false){
      clearTimeout(timer);
    }
    timer = setTimeout(function(){
      resizeImage();
    }, 500);
  });
});
