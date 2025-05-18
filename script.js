let goLink = $('.go-Link a');
let adOverlay = $('.ad-overlay-background');
let clickLink = $('.ad-overlay a');

goLink.click(function(e){
  e.preventDefault();
  adOverlay.removeClass('sr-only');
});

clickLink.click(function(e){
  adOverlay.addClass('sr-only');
});

