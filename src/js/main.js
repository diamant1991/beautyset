$(function(){
  $('input,textarea').data('holder',$('input').attr('placeholder'));
  $('input,textarea').focusin(function(){
      $(this).attr('placeholder','');
  });
  $('input,textarea').focusout(function(){
      $(this).attr('placeholder',$(this).data('holder'));
  });
})

var triggers = $('.alphabet__list a');
var filters = $('.alphabet-name');
var availableResults;

triggers.each(function() {
  if($(this).hasClass('is-active')){
    var takeLetter = $(this).text();
    filters.closest('.checkbox-item').hide()

    availableResults = filters.filter(function (f) {
      return $(this).text()[0] === takeLetter;
    });
  
    availableResults.each(function(i) {
      $(this).closest('.checkbox-item').show()
    });
  }
});

triggers.click(function(e) {
  e.preventDefault()
  var takeLetter = $(this).text();
  filters.closest('.checkbox-item').hide()
  $('.alphabet__list a').removeClass('is-active')
  $(this).addClass('is-active')
  
  availableResults = filters.filter(function (f) {
      return $(this).text()[0] === takeLetter;
  });

  availableResults.each(function(i) {
      $(this).closest('.checkbox-item').fadeIn(222);
  });
});


$('.sidebar__btn').click(function(e) {
  e.preventDefault()
  var drop = $(this).next()
  var icon = $(this).find('.zmdi')
  if(drop.is(':hidden')){
    drop.slideDown(250)
    $(this).addClass('is-active')
    icon.removeClass('zmdi-chevron-down').addClass('zmdi-chevron-up')
  }
  else{
    drop.slideUp(250)
    $(this).removeClass('is-active')
    icon.removeClass('zmdi-chevron-up').addClass('zmdi-chevron-down')
  }
});

$('.dropdown-btn').click(function(e) {
  e.preventDefault()
  var dropId = $(this).attr('data-drop');
  $(''+dropId).show()
  $(this).addClass('is-active')
});

$(document).mouseup(function (e) {
  var container = $(".dropdown-block");
  if (container.has(e.target).length === 0){
      container.hide()
      $('.dropdown-btn').removeClass('is-active')
  }
});