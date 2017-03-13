jQuery(document).ready(function($) {
  $(".button-collapse").sideNav();
  $('.collapsible').collapsible({
    accordion: false
  });
  $("#introsection").css('visibility','visible');
});


function  jumpTo(x) {
var div = $('div#' + x);
  // $(window).scrollTop($('div#' + x).offset().top);
  $("html, body").delay(0).animate({
       scrollTop: div.offset().top - 100
   }, 350);


      div.animate({height: 'toggle', opacity: '0.0'}, 120);
      div.animate({height: 'toggle', opacity: '1'}, 250);
      div.fadeIn(200)
}

function  jumpToFromSmallNavBar(x) {
  // $(window).scrollTop($('div#' + x).offset().top);
  var div = $('div#' + x);
  $('.button-collapse').sideNav('hide');
  $("html, body").delay(0).animate({
       scrollTop: div.offset().top - 100
   }, 350);
   div.animate({height: 'toggle', opacity: '0.0'}, 120);
   div.animate({height: 'toggle', opacity: '1'}, 250);
   div.fadeIn(200)
}

function goTo(x) {
  $("html, body").delay(0).animate({
       scrollTop: $('div#' + x).offset().top - 100
   }, 350);
}

$(window).on('hashchange', function() {
  goTo('' + location.hash);
});
