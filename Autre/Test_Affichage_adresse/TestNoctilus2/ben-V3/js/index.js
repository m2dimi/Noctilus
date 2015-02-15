$('#slider').slider({ 
  animate: true, 
  min: 19, max: 301
});
$('#slider').on('slide', function() {
  var sliderObj = $(this);
  var sldrVal = sliderObj.slider('value');
  var sldrValPrcnt = sldrVal/300;
  $('.circle').css({
    width: sldrVal + 'px', 
    height: sldrVal + 'px', 
    opacity: sldrValPrcnt
    });
  $('.value').text(sldrVal);
  $('.opacity').text(sldrValPrcnt);
});