(function(){

$.each($(".polzunok"),function(){
    console.log($(this).parents('.polzunok-container').find(".polzunok-input-right").attr('max'))
    $(this).slider({
      min: parseInt($(this).parents('.polzunok-container').find(".polzunok-input-left").attr('min')),
      max: parseInt($(this).parents('.polzunok-container').find(".polzunok-input-right").attr('max')),
      values: [
        $(this).parents('.polzunok-container').find(".polzunok-input-left").val(),
        $(this).parents('.polzunok-container').find(".polzunok-input-right").val()
      ],
      range: true,
      animate: "fast",
      slide : function(event, ui) {
          $(this).parents('.polzunok-container').find(".polzunok-input-left").val(ui.values[ 0 ]);
          $(this).parents('.polzunok-container').find(".polzunok-input-right").val(ui.values[ 1 ]);
      }
    });
    $(this).parents('.polzunok-container').find(".polzunok-input-left").val($(this).slider("values", 0));
    $(this).parents('.polzunok-container').find(".polzunok-input-right").val($(this).slider("values", 1));
  });
  
  $(".polzunok-container input").change(function() {
    var input_left = $(this).parents('.polzunok-container').find(".polzunok-input-left").val().replace(/[^0-9]/g, ''),
    opt_left = $(this).parents('.polzunok-container').find(".polzunok").slider("option", "min"),
    where_right = $(this).parents('.polzunok-container').find(".polzunok").slider("values", 1),
    input_right = $(this).parents('.polzunok-container').find(".polzunok-input-right").val().replace(/[^0-9]/g, ''),
    opt_right = $(this).parents('.polzunok-container').find(".polzunok").slider("option", "max"),
    where_left = $(this).parents('.polzunok-container').find(".polzunok").slider("values", 0);
    if (input_left > where_right) {
        input_left = where_right;
    }
    if (input_left < opt_left) {
        input_left = opt_left;
    }
    if (input_left == "") {
    input_left = 0;
    }
    if (input_right < where_left) {
        input_right = where_left;
    }
    if (input_right > opt_right) {
        input_right = opt_right;
    }
    if (input_right == "") {
    input_right = 0;
    }
    console.log(input_right);
    $(this).parents('.polzunok-container').find(".polzunok-input-left").val(input_left);
    $(this).parents('.polzunok-container').find(".polzunok-input-right").val(input_right);
    if (input_left != where_left) {
        $(this).parents('.polzunok-container').find(".polzunok").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(this).parents('.polzunok-container').find(".polzunok").slider("values", 1, input_right);
    }
  });
})();

// меню//

$(document).on('click', '.btn-header.burger', function(event){
  $('.header-nav').toggle();

  event.preventDefault();
});
$(document).on('click', '.cross', function(event){
  $('.header-nav').toggle();

  event.preventDefault();
});


$(document).on('click', '.excerpt-link.open', function(event){
  $(this).parents('.content-sidebar-choice').find('.invisible').show();
  $(this).parents('.content-sidebar-choice').find('.excerpt-link.close').show();
  $(this).hide();

  event.preventDefault();
});

$(document).on('click', '.excerpt-link.close', function(event){
  $(this).parents('.content-sidebar-choice').find('.invisible').hide();
  $(this).parents('.content-sidebar-choice').find('.excerpt-link.open').show();
  $(this).hide();

  event.preventDefault();
});


$(document).on('click', '.excerpt-link.open', function(event){
  $(this).parents('.content-sidebar-choice-item').find('.invisible').show();
  $(this).parents('.content-sidebar-choice-item').find('.excerpt-link.close').show();
  $(this).hide();

  event.preventDefault();
});

$(document).on('click', '.excerpt-link.close', function(event){
  $(this).parents('.content-sidebar-choice-item').find('.invisible').hide();
  $(this).parents('.content-sidebar-choice-item').find('.excerpt-link.open').show();
  $(this).hide();

  event.preventDefault();
});


// фильтер//

$(document).on('click', '.filter-click', function(event){
  $('.content-sidebar-slider-block').toggle();

  event.preventDefault();
});


$(document).on('click', '.mobile-link', function(event){
  $(this).parent().find('.mobile-link-list').toggle();
  $(this).toggleClass('active');

  event.preventDefault();
});


$('.your-class').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.your-class2',
  centerMode: true,
});
$('.your-class2').slick({
  slidesToShow: 10,
  slidesToScroll: 1,
  asNavFor: '.your-class',
  centerMode: false,
  focusOnSelect: true
});


$(document).on('click', '.product-details-flex', function(event){
  $(this).toggleClass('active');

  event.preventDefault();
});

$(document).on('click', 'input[type=radio]', function(event) {   
  
  if ($(this) .data('available') == 0) {
    $('.product-desc-hidden').addClass('active');   
  }
  else {
    $('.product-desc-hidden').removeClass('active');
  }
});

$(document).on('click', '.your-class .slick-slide', function(event) {
  $(this).parents('.product-slider').toggleClass('open');
  $('.header-product').toggle();
  $('.product-details').hide();
  $('.promo').hide();
  $('.your-class').slick('unslick');
  $('.your-class2').slick('unslick');
  $('.your-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.your-class2',
    centerMode: true,
  });
  $('.your-class2').slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    asNavFor: '.your-class',
    centerMode: false,
    focusOnSelect: true
  });
});


//параметры зума//
var options2 = {
  fillContainer: true,
  zoomPosition: 'original',
  offset: {vertical: 0, horizontal: 10}
};

//зум при наведении//
new ImageZoom(document.getElementById("slider-list-garden"), options2);
new ImageZoom(document.getElementById("slider-list-garden2"), options2);
new ImageZoom(document.getElementById("slider-list-garden3"), options2);
new ImageZoom(document.getElementById("slider-list-garden4"), options2);
new ImageZoom(document.getElementById("slider-list-garden5"), options2);
new ImageZoom(document.getElementById("slider-list-garden6"), options2);
new ImageZoom(document.getElementById("slider-list-garden7"), options2);
new ImageZoom(document.getElementById("slider-list-garden8"), options2);

// попап корзина//
$(document).ready(function(){
  $(".popup .close").click(function(event){
    $(".popup").hide();
    $('.body').removeClass('body-scroll');

    event.preventDefault();
  });
  $(document).on('click', '.basket-icon', function(event){
    $('.popup').show();
    $('.body').addClass('body-scroll');

    event.preventDefault();
  });


  $('#phone').intlTelInput({
    utilsScript: "js/utils.js",
    autoPlaceholder: true,
    preferredCountries: [ "ru" ],
    });
});
// попап избранное//
$(document).ready(function(){
  $(".popup-favorites .close").click(function(event){
    $(".popup-favorites").hide();
    $('.body').removeClass('body-scroll');

    event.preventDefault();
  });
  $(document).on('click', '.favorites-icon', function(event){
    $('.popup-favorites').show();
    $('.body').addClass('body-scroll');

    event.preventDefault();
  });
});

// товар//удаление/восстановление 
let timerId;
$(document).on('click', '.popup-content-amount-link', function(event){
  let self = this;
  timerId = setInterval(function tick() {
    $(self).parents('.popup-item').find('.timer-desc').text(count);
    console.log(count);
    count = parseInt(count) - 1;
    if(count < 1){
      count = 1;
      clearTimeout(timerId);
      $('.popup').hide();
      $(self) .parents('.popup-item').hide();
      $('.body').removeClass('body-scroll');
    }
  }, 1000);
  let count = 4;

  $(this) .parents('.popup-content-block').hide();
  $(this).parents('.popup-item').find('.delete').addClass('active');

  event.preventDefault();
});

$(document).on('click', '.delete-link', function(event){
  $(this) .parents('.popup-item').find('.popup-content-block:not(.delete)').show();
  $(this).parents('.popup-item').find('.delete').removeClass('active');
  clearTimeout(timerId);
  event.preventDefault();
});


// количество товара//
$(document).on('click', '.popup-minus', function(event){
  let count = $(this).parents('.popup-content-amount-left').find('.popup-input').val();
  count -= 1;
  if(count < 1){
    count = 1;
  }
  $(this).parents('.popup-content-amount-left').find('.popup-input').val(count);

  event.preventDefault();
});

$(document).on('click', '.popup-plus', function(event){
  let count = $(this).parents('.popup-content-amount-left').find('.popup-input').val();
  console.log(count);
  count = parseInt(count) + 1;
  console.log(count);
  $(this).parents('.popup-content-amount-left').find('.popup-input').val(count);

  event.preventDefault();
});

$(document).scroll(function() {
  let scroll = ($(document).scrollTop()) / ($(document).height() - document.documentElement.clientHeight) * 100;
  console.log(scroll);
    $('.border').css('width', scroll + '%');
});


// избранное//
$(document).on('click', '.content-catalog-icon:not(.favorites-icon)', function(event){
  $('.add').addClass('ended');

  setTimeout(function tickes() {
      $('.add').removeClass('ended');
  }, 7000);

  event.preventDefault();
});
$(document).on('click', '.add-link', function(event){
  $('.add').removeClass('ended');
  event.preventDefault();
});



