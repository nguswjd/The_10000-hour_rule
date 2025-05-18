let goLink = $('.go-Link a');
let adOverlay = $('.ad-overlay-background');
let clickLink = $('.ad-overlay a');

goLink.click(function(e){
  e.preventDefault();
  adOverlay.removeClass('hidden');
});

clickLink.click(function(e){
  adOverlay.addClass('hidden');
});

