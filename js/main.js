$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".hamburger").on("click", function () {
    // headerにopenクラスがあるか判定する
    if ($("header").hasClass("open")) {
      // headerにopenクラスが存在する場合、openクラスを削除する
      $("header").removeClass("open");
    } else {
      // headerにopenクラスが存在しない場合、openクラスを加える
      $("header").addClass("open");
    }
  });

  // メニューが表示されている時に画面をクリックした場合
  $("#mask").on("click", function () {

    $("header").removeClass("open");
  });
  
  $("#nav a").on("click", function () {

    $("header").removeClass("open");
  });
  
  
  /*=================================================
  PICK UP スライダー
  ===================================================*/
  // カルーセル用 jQueryプラグイン「slick」の設定
  // マニュアル：https://kenwheeler.github.io/slick/
  $(".slide-items").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          centerPadding: "50px",
          slidesToShow: 2,
        },
      },
    ],
  });

    /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });

    /*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/
  $(window).scroll(function () {
    $(".service-left").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("slide-left");
      }
    });
  });
  
  $(window).scroll(function () {
    $(".service-right").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("slide-right");
      }
    });
  });

});