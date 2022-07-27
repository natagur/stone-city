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