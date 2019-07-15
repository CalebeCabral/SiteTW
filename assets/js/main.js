$(document).ready(function () {

   $step = 0;

   $cit = 0;

   $intervalCit = null;

   $carrousel = null;

   $changeCarrousel = true;

   $intervalTest = null;

   $(".cont_ps").hide();

   // $("main>section").scroll(function() {
   // 	var hT = $('#inicio').offset().top,
   // 		hH = $('#inicio').outerHeight() - 200,
   // 		hT2 = $('#sobre').offset().top + 200,
   // 		hH2 = $('#sobre').outerHeight(),
   // 		hT3 = $('#clientes').offset().top + 900,
   // 		hH3 = $('#clientes').outerHeight(),
   // 		hT4 = $('#atuacao').offset().top + 1500,
   // 		hH4 = $('#atuacao').outerHeight(),
   // 		hT5 = $('#cases').offset().top + 1800,
   // 		hH5 = $('#cases').outerHeight(),
   // 		hT6 = $('#contato').offset().top + 2700,
   // 		hH6 = $('#contato').outerHeight(),
   // 		wH = $("main>section").height(),
   // 		wS = $(this).scrollTop();

   // 	if (wS < hH){

   // 		$(".menu-dots>.menu-dot").removeClass("white").removeClass("actv");;
   // 		$(".menu-dots>.menu-dot").eq(0).addClass("actv");

   // 	}else if (wS > (hT2+hH2-wH) && wS < (hT3+hH3-wH)){

   // 		$(".menu-dots>.menu-dot").addClass("white").removeClass("actv");
   // 		$(".menu-dots>.menu-dot").eq(1).addClass("actv");

   // 	}else if (wS > (hT3+hH3-wH) && wS < (hT4+hH4-wH)){

   // 		$(".menu-dots>.menu-dot").removeClass("white").removeClass("actv");
   // 		$(".menu-dots>.menu-dot").eq(2).addClass("actv");

   // 	}else if (wS > (hT4+hH4-wH) && wS < (hT5+hH5-wH)){

   // 		$(".menu-dots>.menu-dot").removeClass("white").removeClass("actv");
   // 		$(".menu-dots>.menu-dot").eq(3).addClass("actv");

   // 	}else if (wS > (hT5+hH5-wH) && wS < (hT6+hH6-wH)){

   // 		$(".menu-dots>.menu-dot").addClass("white").removeClass("actv");
   // 		$(".menu-dots>.menu-dot").eq(4).addClass("actv");

   // 	}else if (wS > (hT6+hH6-wH)){

   // 		$(".menu-dots>.menu-dot").addClass("white").removeClass("actv");
   // 		$(".menu-dots>.menu-dot").eq(5).addClass("actv");

   // 	}

   // });

   $root = $('main>section');

   $("#content-business .menu-dots > .menu-dot").click(function () {

      $index = $(this).index();

      $(".menu-dots>.menu-dot").addClass("actv").not(this).removeClass("actv");

      switch ($index) {

         case 0:
            window.location = "#inicio";
            $(".menu-dots").removeClass("white").addClass("purple");
            break;

         case 1:
            window.location = "#sobre";
            $(".menu-dots").removeClass("purple").addClass("white");
            break;

         case 2:
            window.location = "#skills";
            $(".menu-dots").removeClass("white").addClass("purple");
            break;

         case 3:
            window.location = "#comoFazemos";
            $(".menu-dots").removeClass("purple").addClass("white");
            break;

         case 4:
            window.location = "#contato";
            $(".menu-dots").removeClass("purple").addClass("white");
            break;
      }

   });

   $("#endo-culture .menu-dots > .menu-dot").click(function () {

      $index = $(this).index();

      $(".menu-dots>.menu-dot").addClass("actv").not(this).removeClass("actv");

      switch ($index) {

         case 0:
            window.location = "#inicio";
            $(".menu-dots").removeClass("white");
            break;

         case 1:
            window.location = "#sobre";
            $(".menu-dots").addClass("white");
            break;

         case 2:
            window.location = "#clientes";
            $(".menu-dots").removeClass("white");
            break;

         case 3:
            window.location = "#atuacao";
            $(".menu-dots").removeClass("white");
            break;

         case 4:
            window.location = "#cases";
            $(".menu-dots").addClass("white");
            break;

         case 5:
            window.location = "#contato";
            $(".menu-dots").addClass("white");
            break;

      }

   });

   $(".goToPs, .goToAt").click(function () {

      if ($(this).hasClass('goToPs')) {

         $(".cont_atuacao").hide("slide", { direction: "left" }, 100, function () {

            $(".cont_ps").show("slide", { direction: "right" }, 300);

         });


      } else if ($(this).hasClass('goToAt')) {

         $(".cont_ps").hide("slide", { direction: "right" }, 100, function () {

            $(".cont_atuacao").show("slide", { direction: "left" }, 300);

         });


      }

   });

   $(".cases-items>div").each(function () {

      if (!$(this).is(":first-child")) {

         $(this).hide();

      }

      if ($("#inicio .social-icons").is(":visible")) {

         $(".timer").append('<div class="frame"><div class="f_load"></div></div>');

         $(".timer>.frame").each(function () {

            $(this).css("width", Math.floor($(".timer").width() / $(".timer>.frame").length) + "px");

         })

      } else {

         if ($(".timer").find("div").length === 0) {

            $(".timer").append('<div class="arrows d-flex justify-content-end w-100"><img  class="ctrlCase-prev" src="assets/media/images/arrow.png" class="mr-3"> <img class="ctrlCase-next" src="assets/media/images/arrow.png"></div>');

         }
      }

      $(".frame:first-child").addClass("ativo");

   });

   $(".cases_container img").click(function () {

      clearInterval($carrousel);

      $changeCarrousel = false;

      if ($(this).hasClass("video-thumb")) {

         lightbox($(this).attr("vlink"), "video");

      } else {

         lightbox($(this).attr("src").split("/").pop(), "image");

      }

   });

   $("body").on("click", ".timer>.frame", function () {

      $e = $(this);

      $(".frame.ativo>.f_load").stop();

      clearInterval($carrousel);

      $(".timer>.frame").removeClass('ativo');

      $(".timer>.frame>.f_load").css("width", "0%");

      $($e).addClass('ativo').find(".f_load").css("width", "100%");

      $(".cases-items>div").fadeOut(300, function () {

         setTimeout(function () {

            $(".cases-items>div").eq($($e).index()).fadeIn(300);

         }, 500);

      });

      $changeCarrousel = false;

      $carrousel = setInterval(autoCarrousel, 7000);

   });

   function prevCase() {

      $e = $(".cases-items>div:visible");

      if (!$e.is(":last-child")) {

         $(".cases-items>div").fadeOut(500, function () {

            setTimeout(function () {

               $(".cases-items>div").eq($($e).index() + 1).fadeIn(500);

               $($e).removeClass('ativo');

               $(".timer>.frame>.f_load").css("width", "0%");

               $($e).prev().addClass('ativo').find(".f_load").css("width", "100%");

            }, 500);

         });

         clearInterval($carrousel);

         $changeCarrousel = false;
      }
   }

   function nextCase() {
      $e = $(".cases-items>div:visible");

      if (!$e.is(":first-child")) {

         $(".cases-items>div").fadeOut(500, function () {

            setTimeout(function () {

               $(".cases-items>div").eq($($e).index() - 1).fadeIn(500);

               $($e).removeClass('ativo');

               $(".timer>.frame>.f_load").css("width", "0%");

               $($e).next().addClass('ativo').find(".f_load").css("width", "100%");

            }, 500);

         });

         clearInterval($carrousel);

         $changeCarrousel = false;
      }
   }

   $(".ctrlCase-prev, .ctrlCase-next").click(function () {

      if ($(this).hasClass("ctrlCase-prev")) {

         nextCase();
      } else if ($(this).hasClass("ctrlCase-next")) {

         prevCase();
      }
   });

   $(".cases-items").swipe({

      swipeLeft: function (event, direction, distance, duration, fingerCount, fingerData) {

         prevCase();
      },
      swipeRight: function (event, direction, distance, duration, fingerCount, fingerData) {

         nextCase();
      },
      threshold: 0
   });


   function autoCarrousel() {

      $(".frame.ativo>.f_load").animate({ width: "100%" }, 6000, function () {

         if ($(this).parent().is(".frame:last-child")) {

            $(".timer>.frame>.f_load").css("width", "0%");
            $(this).parent().removeClass('ativo').parent().find(".frame:first-child").addClass('ativo');
         } else {

            $(this).parent().removeClass('ativo').next().addClass('ativo');
         }

         $(".cases-items>div").fadeOut(500, function () {

            setTimeout(function () {

               $(".cases-items>div").eq($(".timer>.frame.ativo").index()).fadeIn(500);

            }, 500);

         });

      });
   }

   $carrousel = setInterval(autoCarrousel, 7000);

   setTimeout(function () {

      $intervalCit = setInterval(function () {


         if ($cit == 2) {

            $cit = 0;

         } else {

            $cit++;

         }

         $(".member_cit").animate({ opacity: 0 }, 500, "swing", function () {

            $(".member_cit").eq($cit).animate({ opacity: 1 }, 500, "swing");

         });

      }, 15000);

   }, 2500);

   function lightbox($content, $type) {
      $("body").prepend("<div class='lightbox d-flex justify-content-center align-items-center'><div class='d-flex justify-content-center align-items-center mt-5'></div><span aria-hidden='true' class='close-light align-self-start cursor-pointer'>&times;</span></div>");

      if ($type === "video") {

         $(".lightbox>div").append("<video controls src='assets/media/full/" + $content + "' class='img-fluid' ></video>");

      } else if ($type === "image") {

         $(".lightbox>div").append("<img src='assets/media/full/" + $content + "' class='img-fluid' />");

      }


   }

   $("body").on("click", ".lightbox>div", function (e) {

      if (!$(e.target).is("img") && !$(e.target).is("video")) {

         $(".lightbox").remove();

      }

   })

   $("body").on("click", ".close-light", function () {

      $(".lightbox").remove();

   });


});