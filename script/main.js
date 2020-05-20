$(document).ready(function() {
  console.log('ready');


  var slider = {

    $slider : $('.slidebar'),

    slide_nav : [
      $("a.control[rel$='0']"),
      $("a.control[rel$='1']"),
      $("a.control[rel$='2']"),
      $("a.control[rel$='3']"),
      $("a.control[rel$='4']")
    ],

    slide_image : [
      "url(img/slide/1.jpg)",
      "url(img/slide/2.jpg)",
      "url(img/slide/3.jpg)",
      "url(img/slide/4.jpg)",
      "url(img/slide/5.png)"
    ],

    index : function(){
      slider.num = $(this).attr('rel');
      $('a.control').removeClass('active');
      $(this).addClass('active');
      slider.$slider.css('background-image', slider.slide_image[slider.num]);
    },

    control : $('a.control'),
    num : 0,
    next : function(){
      var $slider = $('.slidebar');
      slider.num++;


      if (slider.num >= slider.slide_image.length) {
        slider.num = 0;
      }
      var $active = slider.slide_nav[slider.num];
      $('a.control').removeClass('active');
      $active.addClass('active');
      slider.$slider.css('background-image', slider.slide_image[slider.num]);


    },

    prev : function(){
      var $slider = $('.slidebar');
      slider.num--;

      if (slider.num < 0) {
        slider.num = slider.slide_image.length - 1;
      }
      var $active = slider.slide_nav[slider.num];
      $('a.control').removeClass('active');
      $active.addClass('active');
      slider.$slider.css('background-image', slider.slide_image[slider.num]);

    }

  }

  var autoplay = function(){

    if($('.slidebar:hover').length != 0){
      // mouse in over the sliderbar

      setTimeout(autoplay, 5000);
    }
    else{
      slider.next();
      delay();
    }
  }
  var delay = function(){

    setTimeout(autoplay, 5000);
  }





  delay();
  $('.prev').click(slider.prev);
  $('.next').click(slider.next);
  $('.control').click(slider.index);


// slider end
  $('form.search > a').click(function() {
    $('div.search_bar_wrapper').toggleClass('active');
  });

  $('div.all_cate').hover(function() {
    $('div.all_cate').toggleClass('active');
    $('div.all_cate_container').toggleClass('active');
    $('.bar').toggleClass('active');
  })


  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 32) {
      // console.log('a');
      $('.top_wrapper').addClass('scroll_active');
    }
    else{
      $('.top_wrapper').removeClass('scroll_active');
    }

    if(scroll >= 90){
      $('.menu_wrapper').addClass('scroll_active');
      $('div.scrolled_logo').addClass('scroll_active');
      $('div.menu_container').addClass('scroll_active');

    }
    else{
      $('.menu_wrapper').removeClass('scroll_active');
      $('div.scrolled_logo').removeClass('scroll_active');
      $('div.menu_container').removeClass('scroll_active');


    }
  });

})
