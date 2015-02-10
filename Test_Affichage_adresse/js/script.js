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
 
 



$(document).ready(function(){

	
	
	$('#button').click(function() {
			
		
    	var recup_adress = $('#adresse').val();
    	$.ajax({
      		url:'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=' + encodeURI(recup_adress)
    	}).done(function(res){
			
			var maLat = res.results[0].geometry.location.lat;
			var maLong = res.results[0].geometry.location.lng;
			
			$('#resultat1').text('La latitude est : ' + maLat);
			$('#resultat2').text('La longitude est : ' + maLong);
			
			var monJSON = 'bddlatlng.json';
			$.getJSON(monJSON, function(donnee){
				$.each(donnee, function(i, bar){
					if((bar.lat > 48.8530) && (bar.lat < 48.8531)){
						//$('#resultat3').text('hello');
						var mesBars = '<span class="lat">';
						mesBars += bar.Nom + '</span>';
						$('#resultat3').append(mesBars);
					}									
				});
			});
			
        	});
    	});

});


