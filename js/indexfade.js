// Animate function
function stepAnimateText(element, animation, delay){

  var text = $(element).text();
  var curr = '';

  for (var i=0; i < text.length; i++){
    var character = text.charAt(i);
    $(element).html(curr+'<span class="'+animation+'" style="-webkit-animation-delay: '+i*delay+'s; animation-delay: '+i*delay+'s">'+character +"</span>");
    curr = $(element).html();
  }
}

// Init on load
stepAnimateText('.fade','fadeInDown', 0.1);

// Buttons
$('.button.button-fadeindown').click(function(){
  var delay = $('select').val();
  stepAnimateText('.fade','fadeInDown', delay);
  return false;
});
$('.button.button-bounceindown').click(function(){
  var delay = $('select').val();
  stepAnimateText('.fade','bounceInDown',delay);
  return false;
});
$('.fade-container').click(function(){
  var delay = $('select').val();
  stepAnimateText('.fade','bounceInDown',delay);
  return false;
});
