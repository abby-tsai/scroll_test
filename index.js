
var card_1 = document.querySelector("#card_1");
var offset_1 = card_1.getBoundingClientRect();

// 物件只要在畫面的範圍，就跑動畫
if (offset_1.top <= window.innerHeight) {
  animateOn()
}

// 當滾動畫面
document.addEventListener("scroll", function () {
  // 指定物件 和 整個網站的最頂端 的距離
  var offset_1 = card_1.getBoundingClientRect();

  // console.log(offset_1.top);
  // console.log("滑動高度＋螢幕高度：" + Number(window.scrollY + window.innerHeight));
  // console.log(offset_1.bottom);
  // console.log(card_1.clientHeight * 0.7);
  // console.log(window.innerHeight * 0.5);

  // if (offset_1.top <= window.innerHeight * 0.5 || offset_1.bottom <= 0) {
  //   // 如果 物件的頂部 到 目前畫面頂部 的距離 小於 目前畫面高度的0.5倍 (＝如果畫面是在物件的0.5倍高度的區域) 就跑動畫
  //   // 或者
  //   // 如果 物件的底部 到 目前畫面頂部 的距離 小於 0px (＝如果畫面是在物件以下的區域) 就跑動畫
  //   animateOn();
  // }

  if (offset_1.top <= window.innerHeight || offset_1.bottom <= 0) {
    // 如果 物件的頂部 到 目前畫面頂部 的距離 小於 畫面高度 (＝如果往下滑碰到物件的頂部) 就跑動畫
    // 或者
    // 如果 物件的底部 到 目前畫面頂部 的距離 小於 0px (＝如果畫面是在物件以下的區域) 就跑動畫
    animateOn();
  }

  // if (offset_1.top <= card_1.clientHeight * 0.7) {
  //   // 如果 物件的頂部 到 目前畫面頂部 的距離 小於 物件高度的0.7倍 就跑動畫
  //   animateOn()
  // }

  //   如果要從下到上也要跑動畫，就打開以下註解
  // var elemantTop = $("#card_1").offset().top;
  // if (
  //   offset_1.bottom <= 0 ||
  //   Number(window.scrollY + window.innerHeight) < elemantTop
  // ) {
  //   // 如果 物件的底部 到 目前畫面頂部 的距離 小於 0px 就關動畫
  //   // or
  //   // 如果 滑動高度＋螢幕高度 的距離 小於 指定物件 和 整個網站的最頂端 的距離
  //   animateOff();
  // }
  // function animateOff() {
  //   card_1.classList.remove("on");
  // }
});



function animateOn() {
  card_1.classList.add("on");
}