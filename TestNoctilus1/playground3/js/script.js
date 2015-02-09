function myFunction(){
setTimeout(function () {
		$('p.you').fadeOut(4000);
	},2000); 
};

  
  
function myFunction2(){
setTimeout(function () {
		$('p.slide').fadeOut(4000);
	},2000); 
};    



$(document).ready(function(){
   $("#item").click(function()  {
     $('.circle1').show();
	  $('.circle2').show();
	   $('.circle3').show();
	    $('.circle4').hide();
	  $('.circle5').hide();
	   $('.circle6').hide();
	   $('.circle7').hide();
	  $('.circle8').hide();
	   $('.circle9').hide();
	   
   });
 });
 
 $(document).ready(function(){
   $("#item2").click(function(){
	    $('.circle1').hide();
	  $('.circle2').hide();
	   $('.circle3').hide();
     $('.circle4').show();
	  $('.circle5').show();
	   $('.circle6').show();
	   $('.circle7').hide();
	  $('.circle8').hide();
	   $('.circle9').hide();
   });
 });
 
  $(document).ready(function(){
   $("#item3").click(function(){
	    $('.circle1').hide();
	  $('.circle2').hide();
	   $('.circle3').hide();
     $('.circle4').hide();
	  $('.circle5').hide();
	   $('.circle6').hide();
	   $('.circle7').show();
	  $('.circle8').show();
	   $('.circle9').show();
   });
 });
 
 
 




