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
 
 
 function start(data){
  console.log('voila vos data', data);
}
d3.json('bddlatlng.json',start);
	


 

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
			
			
var points=(data=('bddlatlng.json'));


	
			




var radial_distance = d3.geo.distance([maLat,maLong], [points[1].lat, points[1].lon]);

// multiply radians to the mean radius
// Cfr. http://en.wikipedia.org/wiki/Earth_radius#Mean_radius
d3.select("#info").text( radial_distance * 6371009 + 'm');


/*
// draw svg
var svg = d3.select("#playground").append('svg').attr({
  width: 400,
  height: 400
});


svg.append('circle').attr({
  r: 20,
  cy: 200,
  cx: 200
})

// place the first point
svg.selectAll('circle.point').data(points).enter()
  .append('circle')
    .attr({
      class: 'point',
      r: 20,
      cy: 200,
      cx: 200
    })

		
			
			var monJSON = 'bddlatlng.json';
			$.getJSON(monJSON, function(donnee){
				$.each(donnee, function(i, bar){
					
						
						var mesBars = '<span class="lat">';
						mesBars += bar.Nom + '</span>';
						$('#resultat3').append(mesBars);
														
				});
			});
			*/
        	});
    	});

});















