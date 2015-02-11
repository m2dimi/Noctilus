// JavaScript Document
/*function recupAdress() 
{ 
var adress = document.getElementById("adress").value; 
alert(adress); 
}*/



$(document).ready(function(){
	
	$('#button').click(function() {
    	var recup_adress = $('#adresse').val();
    	$.ajax({
      		url:'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=' + encodeURI(recup_adress)
    	}).done(function(res){
        			console.log(res.results[0].geometry.location.lat);
        			console.log(res.results[0].geometry.location.lng);
        	})
    })

});




   