(function ($) {
  "use strict";

  /*=============================================
	=    		 Preloader			      =
=============================================*/
  function preloader() {
    $("#preloader").delay(0).fadeOut();
  }

  $(window).on("load", function () {
    preloader();
    sliderAction();
    wowAnimation();
  });

  /*=============================================
	=    		Mobile Menu			      =
=============================================*/
  //SubMenu Dropdown Toggle
  if ($(".menu-area li.menu-item-has-children ul").length) {
    $(".menu-area .navigation li.menu-item-has-children").append(
      '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    var mobileMenuContent = $(".menu-area .main-menu").html();
    $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

    //Dropdown Button
    $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
      "click",
      function () {
        $(this).toggleClass("open");
        $(this).prev("ul").slideToggle(300);
      }
    );
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
      $("body").removeClass("mobile-menu-visible");
    });
  }

  /*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#sticky-header").removeClass("sticky-menu");
      $(".scroll-to-target").removeClass("open");
    } else {
      $("#sticky-header").addClass("sticky-menu");
      $(".scroll-to-target").addClass("open");
    }
  });

  /*=============================================
	=    		 Scroll Up  	         =
=============================================*/
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }

  /*=============================================
	=          Data Background               =
=============================================*/
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  /*=============================================
	=            Header Search            =
=============================================*/
  $(".header-search > a").on("click", function () {
    $(".search-popup-wrap").slideToggle();
    $("body").addClass("search-visible");
    return false;
  });

  $(".search-backdrop").on("click", function () {
    $(".search-popup-wrap").slideUp(500);
    $("body").removeClass("search-visible");
  });

  /*===========================================
	=          Slider Active        =
=============================================*/
  function sliderAction() {
    $(".slider-active")
      .slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      })
      .slickAnimation();
  }

  /*=============================================
	=    		Brand Active		      =
=============================================*/
  $(".brand-active").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  /*=============================================
	=    	Related Products Active		    =
=============================================*/
  $(".rp-active").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  /*=============================================
	=         gallery-active           =
=============================================*/
  $(".gallery-active").slick({
    centerMode: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    centerPadding: "0",
    arrows: false,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px",
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "50px",
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          arrows: false,
        },
      },
    ],
  });

  /*=============================================
	=    		Testimonial Active		   =
=============================================*/
  $(".testimonial-active").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="flaticon-next"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="flaticon-next"></i></button>',
    appendArrows: ".testimonial-nav",
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  /*=============================================
	=    		 Cart Active  	         =
=============================================*/
  $(".cart-plus-minus").append(
    '<div class="dec button">-</div><div class="inc button">+</div>'
  );
  $(".button").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  /*===========================================
	=       TweenMax Active   =
=============================================*/
  $(".tg-motion-effects").mousemove(function (e) {
    parallaxIt(e, ".tg-motion-effects1", 70);
    parallaxIt(e, ".tg-motion-effects2", 5);
    parallaxIt(e, ".tg-motion-effects3", -10);
    parallaxIt(e, ".tg-motion-effects4", 30);
    parallaxIt(e, ".tg-motion-effects5", -50);
    parallaxIt(e, ".tg-motion-effects6", -20);
    parallaxIt(e, ".tg-motion-effects7", 20);
  });
  function parallaxIt(e, target_class, movement) {
    var $wrap = $(e.target).parents(".tg-motion-effects");
    if (!$wrap.length) return;
    var $target = $wrap.find(target_class);
    var relX = e.pageX - $wrap.offset().left;
    var relY = e.pageY - $wrap.offset().top;

    TweenMax.to($target, 1, {
      x: ((relX - $wrap.width() / 2) / $wrap.width()) * movement,
      y: ((relY - $wrap.height() / 2) / $wrap.height()) * movement,
    });
  }

  /*=============================================
	=    	 Slider Range Active  	         =
=============================================*/
  $("#slider-range").slider({
    range: true,
    min: 1,
    max: 200,
    values: [50, 150],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );

  /*=============================================
	=    	  Countdown Active  	         =
=============================================*/
  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      $this.html(
        event.strftime(
          '<div class="time-count day"><span>%D</span>days</div><div class="time-count hour"><span>%H</span>hours</div><div class="time-count min"><span>%M</span>mins</div><div class="time-count sec"><span>%S</span>secs</div>'
        )
      );
    });
  });

  /*=============================================
	=    		Odometer Active  	       =
=============================================*/
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  /*=============================================
	=    		Magnific Popup		      =
=============================================*/
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  /*=============================================
	=    		 Wow Active  	         =
=============================================*/
  function wowAnimation() {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }
})(jQuery);

/*=============================================
	=         getKunafa         =
=============================================*/
displayKunafa();

function displayKunafa() {
  var data = "";
  var kunafaDataImg = [
    "./assets/img/product/1kunafa/kunafa(1).png",
    "./assets/img/product/1kunafa/kunafa(2).png",
    "./assets/img/product/1kunafa/kunafa(3).png",
    "./assets/img/product/1kunafa/kunafa(4).png",
    "./assets/img/product/1kunafa/kunafa(5).png",
    "./assets/img/product/1kunafa/kunafa(6).png",
    "./assets/img/product/1kunafa/kunafa(7).png",
    "./assets/img/product/1kunafa/kunafa(8).png",
    "./assets/img/product/1kunafa/kunafa(9).png",
  ];
  var kunafaDataTitle = [
    "Plain Kunafa",
    "Osmanly Kunafa",
    "Kunafa With cream",
    "Kunafa Borma with Hazelnut",
    "Kunafa with Nuts",
    "Kunafa Cones",
    "Osmanly Kunafa With mango",
    "Kunafa Asawer with nutella",
    "Kunafa Asawer with Hazelnut",
    "",
  ];

  for (var i = 0; i < kunafaDataImg.length; i++) {
    data += `
		<div class="col-lg-2 col-md-3 col-6"><div class="content">
		  <div class="plate pointer shadow rounded rounded-circle mb-3 p-3">
			<img src=${kunafaDataImg[i]} class="mx-auto"  alt="">
		  </div>
		  <h6>${kunafaDataTitle[i]}</h6>
		</div>
	  </div>`;
  }
  document.getElementById("kunafa").innerHTML = data;
}

/*=============================================
	=         getBasbousa         =
=============================================*/
displayBasbousa();

function displayBasbousa() {
  var data = "";
  var basbousaDataImg = [
    "./assets/img/product/2basbusa/basbusa(1).png",
    "./assets/img/product/2basbusa/basbusa(2).png",
    "./assets/img/product/2basbusa/basbusa(3).png",
  ];
  var basbousaDataTitle = [
    "Hazelnut Basbousa",
    "Plain Basbousa",
    "Pistachio Basbousa",
  ];

  for (var i = 0; i < basbousaDataImg.length; i++) {
    data += `
		<div class="col-lg-2 col-md-3 col-6"><div class="content">
		  <div class="plate pointer shadow rounded rounded-circle mb-3 p-3">
			<img src=${basbousaDataImg[i]} class="mx-auto"  alt="">
		  </div>
		  <h6>${basbousaDataTitle[i]}</h6>
		</div>
	  </div>`;
  }
  document.getElementById("Basbousa").innerHTML = data;
}

/*=============================================
	=         getGoulash         =
=============================================*/
displayGoulash();

function displayGoulash() {
  var data = "";
  var goulashDataImg = [
    "./assets/img/product/3goulash/goulash(1).png",
    "./assets/img/product/3goulash/goulash(2).png",
    "./assets/img/product/3goulash/goulash(3).png",
    "./assets/img/product/3goulash/goulash(4).png",
    "./assets/img/product/3goulash/goulash(5).png",
  ];
  var goulashDataTitle = [
    "Baklava with Nuts",
    "Plain Goulash",
    "Goulash with Cream",
    "Goulash with Nuts",
    "Baklava Yabrok with Hazelnut",
  ];

  for (var i = 0; i < goulashDataImg.length; i++) {
    data += `
		<div class="col-lg-2 col-md-3 col-6"><div class="content">
		  <div class="plate pointer shadow rounded rounded-circle mb-3 p-3">
			<img src=${goulashDataImg[i]} class="mx-auto"  alt="">
		  </div>
		  <h6>${goulashDataTitle[i]}</h6>
		</div>
	  </div>`;
  }
  document.getElementById("Goulash").innerHTML = data;
}

/*=============================================
	=         getMixBoxes        =
=============================================*/
displayMixBoxes();

function displayMixBoxes() {
  var data = "";
  var mixBoxesDataImg = [
    "./assets/img/product/4mixBoxes/mixBoxes(1).png",
    "./assets/img/product/4mixBoxes/mixBoxes(2).png",
    "./assets/img/product/4mixBoxes/mixBoxes(3).png",
    "./assets/img/product/4mixBoxes/mixBoxes(4).png",
    "./assets/img/product/4mixBoxes/mixBoxes(5).png",
    "./assets/img/product/4mixBoxes/mixBoxes(6).png",
    "./assets/img/product/4mixBoxes/mixBoxes(7).png",
    "./assets/img/product/4mixBoxes/mixBoxes(8).png",
    "./assets/img/product/4mixBoxes/mixBoxes(9).png",
    "./assets/img/product/4mixBoxes/mixBoxes(10).png",
  ];
  var mixBoxesDataTitle = [
    "Medium Mix Super Lux Box - 35 Pcs",
    "Medium Mix Lux Box - 35 Pcs",
    "Large Mix Original Box - 55 Pcs",
    "Large Mix Premium - 45 Pcs",
    "Jumbo Mix Premium - 65 Pcs",
    "Original Mix Box 85 Pieces",
    "Small Mix Super Lux Box - 15 Pcs",
    "Large Mix Super Lux Box - 55 Pcs",
    "Small Mix Lux Box - 18 Pcs",
    "Large Mix Lux Box - 50 Pcs",
    "",
  ];

  for (var i = 0; i < mixBoxesDataImg.length; i++) {
    data += `
		<div class="col-lg-2 col-md-3 col-6"><div class="content">
		  <div class="plate pointer wPlate mb-1 p-3">
			<img src=${mixBoxesDataImg[i]} class="mx-auto"  alt="">
		  </div>
		  <h6>${mixBoxesDataTitle[i]}</h6>
		</div>
	  </div>`;
  }
  document.getElementById("MixBoxes").innerHTML = data;
}

/*=============================================
	=         getPlatters        =
=============================================*/
displayPlatters();

function displayPlatters() {
  var data = "";
  var plattersDataImg = [
    "./assets/img/product/5platters/platters(1).png",
    "./assets/img/product/5platters/platters(2).png",
    "./assets/img/product/5platters/platters(3).png",
    "./assets/img/product/5platters/platters(4).png",
  ];
  var plattersDataTitle = [
    "Hazelnut Basbousa",
    "Pistachio Basbousa",
    "Plain Basbousa",
    "Plain Kunafa",
  ];

  for (var i = 0; i < plattersDataImg.length; i++) {
    data += `
		<div class="col-lg-2 col-md-3 col-6"><div class="content">
		  <div class="plate wPlate pointer mb-1 p-3">
			<img src=${plattersDataImg[i]} class="mx-auto"  alt="">
		  </div>
		  <h6>${plattersDataTitle[i]}</h6>
		</div>
	  </div>`;
  }
  document.getElementById("platters").innerHTML = data;
}

/*=============================================
	=         getArabianMix        =
=============================================*/
displayArabianMix();

function displayArabianMix() {
  var data = "";
  var arabianMixDataImg = [
    "./assets/img/product/6arabianMix/arabianMix(1).png",
    "./assets/img/product/6arabianMix/arabianMix(2).png",
    "./assets/img/product/6arabianMix/arabianMix(3).png",
    "./assets/img/product/6arabianMix/arabianMix(4).png",
    "./assets/img/product/6arabianMix/arabianMix(5).png",
    "./assets/img/product/6arabianMix/arabianMix(6).png",
    "./assets/img/product/6arabianMix/arabianMix(7).png",
    "./assets/img/product/6arabianMix/arabianMix(8).png",
    "./assets/img/product/6arabianMix/arabianMix(9).png",
    "./assets/img/product/6arabianMix/arabianMix(10).png",
    "./assets/img/product/6arabianMix/arabianMix(11).png",
  ];
  var arabianMixDataTitle = [
    "Mango Rawani Cake",
    "Meshabek",
    "Coconut Rawani Cake",
    "Balah El Sham with cream",
    "Plain Eyon",
    "Shakalama with Nuts",
    "Lenza",
    "Zalabia",
    "Sawabe' Zainab",
    "Balah El Sham With Nutella",
    "Balah El Sham",
  ];

  for (var i = 0; i < arabianMixDataImg.length; i++) {
    data += `
		<div class="col-lg-2 col-md-3 col-6"><div class="content">
		  <div class="plate pointer shadow rounded rounded-circle mb-3 p-3">
			<img src=${arabianMixDataImg[i]} class="mx-auto"  alt="">
		  </div>
		  <h6>${arabianMixDataTitle[i]}</h6>
		</div>
	  </div>`;
  }
  document.getElementById("ArabianMix").innerHTML = data;
}

/*=============================================
	=         getGateau        =
=============================================*/
displayGateau();

function displayGateau() {
  var data = "";
  var gateauDataImg = [
    "./assets/img/product/7gateau/gateau(1).png",
    "./assets/img/product/7gateau/gateau(2).png",
    "./assets/img/product/7gateau/gateau(3).png",
    "./assets/img/product/7gateau/gateau(4).png",
    "./assets/img/product/7gateau/gateau(5).png",
    "./assets/img/product/7gateau/gateau(6).png",
    "./assets/img/product/7gateau/gateau(7).png",
    "./assets/img/product/7gateau/gateau(8).png",
    "./assets/img/product/7gateau/gateau(9).png",
    "./assets/img/product/7gateau/gateau(10).png",
    "./assets/img/product/7gateau/gateau(11).png",
    "./assets/img/product/7gateau/gateau(12).png",
    "./assets/img/product/7gateau/gateau(13).png",
    "./assets/img/product/7gateau/gateau(14).png",
    "./assets/img/product/7gateau/gateau(15).png",
    "./assets/img/product/7gateau/gateau(16).png",
    "./assets/img/product/7gateau/gateau(17).png",
    "./assets/img/product/7gateau/gateau(18).png",
    "./assets/img/product/7gateau/gateau(19).png",
    "./assets/img/product/7gateau/gateau(20).png",
    "./assets/img/product/7gateau/gateau(21).png",
    "./assets/img/product/7gateau/gateau(22).png",
    "./assets/img/product/7gateau/gateau(23).png",
    "./assets/img/product/7gateau/gateau(24).png",
    "./assets/img/product/7gateau/gateau(25).png",
    "./assets/img/product/7gateau/gateau(26).png",
    "./assets/img/product/7gateau/gateau(27).png",
  ];
  var gateauDataTitle = [
    "White Cream Gâteau",
    "Permoda Kitkat Gâteau",
    "Fruits Éclair",
    "Permoda Red Velvet Gâteau",
    "White Mousse Gâteau",
    "Mix Dark Gâteau",
    "Fedora Gâteau",
    "Permoda Lotus Gâteau",
    "Permoda Fudge Gâteau",
    "Permoda Molten Gâteau",
    "Jam Gâteau",
    "Mango Mousse Gâteau",
    "Black Forest Gâteau",
    "Super Strawberry Gâteau",
    "lotus Gâteau",
    "White Forest Gâteau",
    "Fudge Gâteau with Nuts",
    "Fudge Cake",
    "Gâteau Soiree",
    "White Swiss roll",
    "Molten Dark Gâteau",
    "Dark Éclair",
    "Carrot Cake Gâteau",
    "Dark Swiss roll",
    "Black Rocher Gâteau",
    "Fruits Gâteau",
    "White Forest Gâteau",
  ];

  for (var i = 0; i < gateauDataImg.length; i++) {
    data += `
		<div class="col-lg-2 col-md-3 col-6"><div class="content">
		  <div class="plate pointer shadow rounded rounded-circle mb-3 p-3">
			<img src=${gateauDataImg[i]} class="mx-auto"  alt="">
		  </div>
		  <h6>${gateauDataTitle[i]}</h6>
		</div>
	  </div>`;
  }
  document.getElementById("Gateau").innerHTML = data;
}

/*=============================================
	=         getTorte        =
=============================================*/
displayTorte();

function displayTorte() {
  var data = "";
  var torteDataImg = [
    "./assets/img/product/8torte/torte(1).png",
    "./assets/img/product/8torte/torte(2).png",
    "./assets/img/product/8torte/torte(3).png",
    "./assets/img/product/8torte/torte(4).png",
  ];
  var torteDataTitle = [
    "Tropical Fruit Torte 24",
    "Duetto Heart Fruits & Dark",
    "Chocolate Swiss Roll",
    "Red Velvet Swiss Roll",
  ];

  for (var i = 0; i < torteDataImg.length; i++) {
    data += `
		<div class="col-lg-2 col-md-3 col-6"><div class="content">
		  <div class="plate pointer shadow rounded rounded-circle mb-3 p-4">
			<img src=${torteDataImg[i]} class="mx-auto"  alt="">
		  </div>
		  <h6>${torteDataTitle[i]}</h6>
		</div>
	  </div>`;
  }
  document.getElementById("Torte").innerHTML = data;
}

/*=============================================
	=         getMixSweets        =
=============================================*/
displayMixSweets();

function displayMixSweets() {
  var data = "";
  var mixSweetsDataImg = [
    "./assets/img/product/9mixSweets/mixSweets(1).png",
    "./assets/img/product/9mixSweets/mixSweets(2).png",
    "./assets/img/product/9mixSweets/mixSweets(3).png",
    "./assets/img/product/9mixSweets/mixSweets(4).png",
    "./assets/img/product/9mixSweets/mixSweets(5).png",
    "./assets/img/product/9mixSweets/mixSweets(6).png",
    "./assets/img/product/9mixSweets/mixSweets(7).png",
    "./assets/img/product/9mixSweets/mixSweets(8).png",
    "./assets/img/product/9mixSweets/mixSweets(9).png",
    "./assets/img/product/9mixSweets/mixSweets(10).png",
    "./assets/img/product/9mixSweets/mixSweets(11).png",
    "./assets/img/product/9mixSweets/mixSweets(12).png",
    "./assets/img/product/9mixSweets/mixSweets(13).png",
    "./assets/img/product/9mixSweets/mixSweets(14).png",
    "./assets/img/product/9mixSweets/mixSweets(15).png",
    "./assets/img/product/9mixSweets/mixSweets(16).png",
    "./assets/img/product/9mixSweets/mixSweets(17).png",
    "./assets/img/product/9mixSweets/mixSweets(18).png",
    "./assets/img/product/9mixSweets/mixSweets(19).png",
    "./assets/img/product/9mixSweets/mixSweets(20).png",
    "./assets/img/product/9mixSweets/mixSweets(21).png",
    "./assets/img/product/9mixSweets/mixSweets(22).png",
    "./assets/img/product/9mixSweets/mixSweets(23).png",
    "./assets/img/product/9mixSweets/mixSweets(24).png",
    "./assets/img/product/9mixSweets/mixSweets(25).png",
    "./assets/img/product/9mixSweets/mixSweets(26).png",
    "./assets/img/product/9mixSweets/mixSweets(27).png",
    "./assets/img/product/9mixSweets/mixSweets(28).png",
    "./assets/img/product/9mixSweets/mixSweets(29).png",
    "./assets/img/product/9mixSweets/mixSweets(30).png",
    "./assets/img/product/9mixSweets/mixSweets(31).png",
    "./assets/img/product/9mixSweets/mixSweets(32).png",
    "./assets/img/product/9mixSweets/mixSweets(33).png",
    "./assets/img/product/9mixSweets/mixSweets(34).png",
  ];
  var mixSweetsDataTitle = [
    "Tres Leches Cake with Nuts",
    "Red velvet Cheesecake",
    "Kitkat Cheesecake",
    "San Sebastian Cake Blueberry",
    "Tres Leches Cake with Strawberry",
    "San Sebastian Cake Chocolate",
    "Tres Leches Cake with Strawberry",
    "Dark Fudge Cheesecake",
    "Knafeh with Nutella Cup",
    "Lotus Molten Cake",
    "Metdalaa",
    "White Honey Cake",
    "Rice Pudding Qonbela",
    "Knafeh with Strawberry Cup",
    "Mousse Caramel Cheesecake",
    "Black Honey Cake",
    "Tres Leches Cake with Lotus",
    "Fudge Cake",
    "Coffee Honey Cake",
    "Knafeh with Lotus Cup",
    "Tres Leches Cake with Caramel",
    "Dark Chocolate Molten Cake",
    "Profiteroles",
    "San Sebastian Cake Strawberry",
    "Papa Original",
    "Tres Leches Cake with Nutella",
    "Tres Leches Cake with Mango",
    "Cup Cakes",
    "Knafeh with Mango Cup",
    "Lotus Cheesecake",
    "Rice Pudding",
    "Tres Leches Cake with Pistachio",
    "Metdalaa",
    "Blueberry Cheesecake",
  ];

  for (var i = 0; i < mixSweetsDataImg.length; i++) {
    data += `
		<div class="col-lg-2 col-md-3 col-6"><div class="content">
		  <div class="plate pointer shadow rounded rounded-circle mb-3 p-3">
			<img src=${mixSweetsDataImg[i]} class="mx-auto"  alt="">
		  </div>
		  <h6>${mixSweetsDataTitle[i]}</h6>
		</div>
	  </div>`;
  }
  document.getElementById("mixSweets").innerHTML = data;
}
