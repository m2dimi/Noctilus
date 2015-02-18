/* FONCTION 1 BAR*/

var myFunction1 = function (){
	
	$('#button,#fondBar').click(function() {
		function start(data){
  		console.log('voila vos data', data);
			
		
    	var recup_adress = $('#adresse').val();
    	$.ajax({
      		url:'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=' + encodeURI(recup_adress)
    	}).done(function(res){
			
			var maLat = res.results[0].geometry.location.lat;
			var maLong = res.results[0].geometry.location.lng;
			
			$('#resultat1').text('La latitude est : ' + maLat);
			$('#resultat2').text('La longitude est : ' + maLong);
			

var distances = [];
for( var i in data.bar) {
	distances.push({
   dist: d3.geo.distance([maLat,maLong], [data.bar[i].lat, data.bar[i].lon]),
   place: data.bar[i].Nom,
   ouverture: data.bar[i].Heureo,
   fermeture: data.bar[i].Heuref,
   });
  distances.sort(function (a, b) {
    if (a.dist > b.dist)
      return 1;
    if (a.dist < b.dist)
      return -1;
    // a doit être égale à b
    return 0;
  });

  var lesplusproches = distances.slice(0,5);
}
  
$('.info0').text(lesplusproches[0].place+' à '+ ((lesplusproches[0].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[0].ouverture+"-"+ lesplusproches[0].fermeture);

$('.info1').text(lesplusproches[1].place+' à '+ ((lesplusproches[1].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[1].ouverture+"-"+ lesplusproches[1].fermeture);

$('.info2').text(lesplusproches[2].place+' à '+ ((lesplusproches[2].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[2].ouverture+"-"+ lesplusproches[2].fermeture);

$('.info3').text(lesplusproches[3].place+' à '+ ((lesplusproches[3].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[3].ouverture+"-"+ lesplusproches[3].fermeture);

$('.info4').text(lesplusproches[4].place+' à '+ ((lesplusproches[4].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[4].ouverture+"-"+ lesplusproches[4].fermeture);


      });
	
}

d3.json('bddlatlng.json', start)	
});



$('#button2,#fondBar').click(function() {
	
	
    function start(data){
  console.log('voila vos data', data);
      
    
      var recup_adress2 = $('#adresse2').val();
      $.ajax({
          url:'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=' + encodeURI(recup_adress2)
      }).done(function(res){
      
      var maLat = res.results[0].geometry.location.lat;
      var maLong = res.results[0].geometry.location.lng;
      
      $('#resultat3').text('La latitude est : ' + maLat);
      $('#resultat4').text('La longitude est : ' + maLong);
      
      var distances = [];
for( var i in data.bar) {
   distances.push({
   dist: d3.geo.distance([maLat,maLong], [data.bar[i].lat, data.bar[i].lon]),
   place: data.bar[i].Nom,
   ouverture: data.bar[i].Heureo,
   fermeture: data.bar[i].Heuref
   });

  distances.sort(function (a, b) {
    if (a.dist > b.dist)
      return 1;
    if (a.dist < b.dist)
      return -1;
    // a doit être égale à b
    return 0;
  });

  var lesplusproches = distances.slice(0,5);

}


$("#resultatGraphique").remove();


$('.info0_2').text(lesplusproches[0].place+' à '+ ((lesplusproches[0].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[0].ouverture+"-"+ lesplusproches[0].fermeture);

$('.info1_2').text(lesplusproches[1].place+' à '+ ((lesplusproches[1].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[1].ouverture+"-"+ lesplusproches[1].fermeture);

$('.info2_2').text(lesplusproches[2].place+' à '+ ((lesplusproches[2].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[2].ouverture+"-"+ lesplusproches[2].fermeture);

$('.info3_2').text(lesplusproches[3].place+' à '+ ((lesplusproches[3].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[3].ouverture+"-"+ lesplusproches[3].fermeture);

$('.info4_2').text(lesplusproches[4].place+' à '+ ((lesplusproches[4].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[4].ouverture+"-"+ lesplusproches[4].fermeture);





      });

}

d3.json('bddlatlng.json', start)

});


};




/* FONCTION 2 TABAC */


var myFunction2 = function (){
	
	$('#button,#fondTabac').click(function() {
		
		function start(data){
  console.log('voila vos data', data);
			
		
    	var recup_adress = $('#adresse').val();
    	$.ajax({
      		url:'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=' + encodeURI(recup_adress)
    	}).done(function(res){
			
			var maLat = res.results[0].geometry.location.lat;
			var maLong = res.results[0].geometry.location.lng;
			
			$('#resultat1').text('La latitude est : ' + maLat);
			$('#resultat2').text('La longitude est : ' + maLong);
			

var distances = [];
for( var i in data.tabac) {
	distances.push({
   dist: d3.geo.distance([maLat,maLong], [data.tabac[i].lat, data.tabac[i].lon]),
   place: data.tabac[i].Nom,
   ouverture: data.tabac[i].Heureo,
   fermeture: data.tabac[i].Heuref
   });
  distances.sort(function (a, b) {
    if (a.dist > b.dist)
      return 1;
    if (a.dist < b.dist)
      return -1;
    // a doit être égale à b
    return 0;
  });

  var lesplusproches = distances.slice(0,5);
}
console.log('les distances',distances)
console.log('les 5 plus proches',lesplusproches)


$('.info0').text(lesplusproches[0].place+' à '+ ((lesplusproches[0].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[0].ouverture+"-"+ lesplusproches[0].fermeture);

$('.info1').text(lesplusproches[1].place+' à '+ ((lesplusproches[1].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[1].ouverture+"-"+ lesplusproches[1].fermeture);

$('.info2').text(lesplusproches[2].place+' à '+ ((lesplusproches[2].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[2].ouverture+"-"+ lesplusproches[2].fermeture);

$('.info3').text(lesplusproches[3].place+' à '+ ((lesplusproches[3].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[3].ouverture+"-"+ lesplusproches[3].fermeture);

$('.info4').text(lesplusproches[4].place+' à '+ ((lesplusproches[4].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[4].ouverture+"-"+ lesplusproches[4].fermeture);



      });
	
}

d3.json('bddlatlng.json', start)	
});



$('#button2,#fondTabac').click(function() {
    
    function start(data){
  console.log('voila vos data', data);
      
    
      var recup_adress2 = $('#adresse2').val();
      $.ajax({
          url:'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=' + encodeURI(recup_adress2)
      }).done(function(res){
      
      var maLat = res.results[0].geometry.location.lat;
      var maLong = res.results[0].geometry.location.lng;
      
      $('#resultat3').text('La latitude est : ' + maLat);
      $('#resultat4').text('La longitude est : ' + maLong);
      
      var distances = [];
for( var i in data.tabac) {
   distances.push({
   dist: d3.geo.distance([maLat,maLong], [data.tabac[i].lat, data.tabac[i].lon]),
   place: data.tabac[i].Nom ,
   ouverture: data.tabac[i].Heureo,
   fermeture: data.tabac[i].Heuref 
   
   });

  distances.sort(function (a, b) {
    if (a.dist > b.dist)
      return 1;
    if (a.dist < b.dist)
      return -1;
    // a doit être égale à b
    return 0;
  });

  var lesplusproches = distances.slice(0,5);

}
$("#resultatGraphique").remove();



$('.info0_2').text(lesplusproches[0].place+' à '+ ((lesplusproches[0].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[0].ouverture+"-"+ lesplusproches[0].fermeture);

$('.info1_2').text(lesplusproches[1].place+' à '+ ((lesplusproches[1].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[1].ouverture+"-"+ lesplusproches[1].fermeture);

$('.info2_2').text(lesplusproches[2].place+' à '+ ((lesplusproches[2].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[2].ouverture+"-"+ lesplusproches[2].fermeture);

$('.info3_2').text(lesplusproches[3].place+' à '+ ((lesplusproches[3].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[3].ouverture+"-"+ lesplusproches[3].fermeture);

$('.info4_2').text(lesplusproches[4].place+' à '+ ((lesplusproches[4].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[4].ouverture+"-"+ lesplusproches[4].fermeture);





      });

}

d3.json('bddlatlng.json', start)

});


};





/* FONCTION 3 FOOD */


var myFunction3 = function (){
	
	$('#button,#fondFood').click(function() {
		
		function start(data){
  console.log('voila vos data', data);
			
		
    	var recup_adress = $('#adresse').val();
    	$.ajax({
      		url:'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=' + encodeURI(recup_adress)
    	}).done(function(res){
			
			var maLat = res.results[0].geometry.location.lat;
			var maLong = res.results[0].geometry.location.lng;
			
			$('#resultat1').text('La latitude est : ' + maLat);
			$('#resultat2').text('La longitude est : ' + maLong);
			

var distances = [];
for( var i in data.food) {
	distances.push({
   dist: d3.geo.distance([maLat,maLong], [data.food[i].lat, data.food[i].lon]),
   place: data.food[i].Nom,
   ouverture: data.food[i].Heureo,
   fermeture: data.food[i].Heuref

   });
  distances.sort(function (a, b) {
    if (a.dist > b.dist)
      return 1;
    if (a.dist < b.dist)
      return -1;
    // a doit être égale à b
    return 0;
  });

  var lesplusproches = distances.slice(0,5);
}



$('.info0').text(lesplusproches[0].place+' à '+ ((lesplusproches[0].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[0].ouverture+"-"+ lesplusproches[0].fermeture);

$('.info1').text(lesplusproches[1].place+' à '+ ((lesplusproches[1].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[1].ouverture+"-"+ lesplusproches[1].fermeture);

$('.info2').text(lesplusproches[2].place+' à '+ ((lesplusproches[2].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[2].ouverture+"-"+ lesplusproches[2].fermeture);

$('.info3').text(lesplusproches[3].place+' à '+ ((lesplusproches[3].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[3].ouverture+"-"+ lesplusproches[3].fermeture);

$('.info4').text(lesplusproches[4].place+' à '+ ((lesplusproches[4].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[4].ouverture+"-"+ lesplusproches[4].fermeture);




      });
	
}

d3.json('bddlatlng.json', start)	
});



$('#button2,#fondFood').click(function() {
    
    function start(data){
  console.log('voila vos data', data);
      
    
      var recup_adress2 = $('#adresse2').val();
      $.ajax({
          url:'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=' + encodeURI(recup_adress2)
      }).done(function(res){
      
      var maLat = res.results[0].geometry.location.lat;
      var maLong = res.results[0].geometry.location.lng;
      
      $('#resultat3').text('La latitude est : ' + maLat);
      $('#resultat4').text('La longitude est : ' + maLong);
      
      var distances = [];
for( var i in data.food) {
   distances.push({
   dist: d3.geo.distance([maLat,maLong], [data.food[i].lat, data.food[i].lon]),
   place: data.food[i].Nom,
   ouverture: data.food[i].Heureo,
   fermeture: data.food[i].Heuref
   
   });

  distances.sort(function (a, b) {
    if (a.dist > b.dist)
      return 1;
    if (a.dist < b.dist)
      return -1;
    // a doit être égale à b
    return 0;
  });

  var lesplusproches = distances.slice(0,5);

}


$("#resultatGraphique").remove();



$('.info0_2').text(lesplusproches[0].place+' à '+ ((lesplusproches[0].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[0].ouverture+"-"+ lesplusproches[0].fermeture);

$('.info1_2').text(lesplusproches[1].place+' à '+ ((lesplusproches[1].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[1].ouverture+"-"+ lesplusproches[1].fermeture);

$('.info2_2').text(lesplusproches[2].place+' à '+ ((lesplusproches[2].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[2].ouverture+"-"+ lesplusproches[2].fermeture);

$('.info3_2').text(lesplusproches[3].place+' à '+ ((lesplusproches[3].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[3].ouverture+"-"+ lesplusproches[3].fermeture);

$('.info4_2').text(lesplusproches[4].place+' à '+ ((lesplusproches[4].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[4].ouverture+"-"+ lesplusproches[4].fermeture);



  });

}

d3.json('bddlatlng.json', start)

});


};




/* FONCTION 4 EPICERIE */


var myFunction4 = function (){
	
	$('#button, #fondEpicerie').click(function() {
		
		function start(data){
  console.log('voila vos data', data);
			
		
    	var recup_adress = $('#adresse').val();
    	$.ajax({
      		url:'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=' + encodeURI(recup_adress)
    	}).done(function(res){
			
			var maLat = res.results[0].geometry.location.lat;
			var maLong = res.results[0].geometry.location.lng;
			
			$('#resultat1').text('La latitude est : ' + maLat);
			$('#resultat2').text('La longitude est : ' + maLong);
			

var distances = [];
for( var i in data.epicerie) {
	distances.push({
   dist: d3.geo.distance([maLat,maLong], [data.epicerie[i].lat, data.epicerie[i].lon]),
   place: data.epicerie[i].Nom,
   ouverture: data.epicerie[i].Heureo,
   fermeture: data.epicerie[i].Heuref
   });
  distances.sort(function (a, b) {
    if (a.dist > b.dist)
      return 1;
    if (a.dist < b.dist)
      return -1;
    // a doit être égale à b
    return 0;
  });

  var lesplusproches = distances.slice(0,5);
}



$('.info0').text(lesplusproches[0].place+' à '+ ((lesplusproches[0].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[0].ouverture+"-"+ lesplusproches[0].fermeture);

$('.info1').text(lesplusproches[1].place+' à '+ ((lesplusproches[1].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[1].ouverture+"-"+ lesplusproches[1].fermeture);

$('.info2').text(lesplusproches[2].place+' à '+ ((lesplusproches[2].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[2].ouverture+"-"+ lesplusproches[2].fermeture);

$('.info3').text(lesplusproches[3].place+' à '+ ((lesplusproches[3].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[3].ouverture+"-"+ lesplusproches[3].fermeture);

$('.info4').text(lesplusproches[4].place+' à '+ ((lesplusproches[4].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[4].ouverture+"-"+ lesplusproches[4].fermeture);




      });
	
}

d3.json('bddlatlng.json', start)	
});



$('#button2,#fondEpicerie').click(function() {
    
    function start(data){
  console.log('voila vos data', data);
      
    
      var recup_adress2 = $('#adresse2').val();
      $.ajax({
          url:'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=' + encodeURI(recup_adress2)
      }).done(function(res){
      
      var maLat = res.results[0].geometry.location.lat;
      var maLong = res.results[0].geometry.location.lng;
      
      $('#resultat3').text('La latitude est : ' + maLat);
      $('#resultat4').text('La longitude est : ' + maLong);
      
      var distances = [];
for( var i in data.epicerie) {
   distances.push({
   dist: d3.geo.distance([maLat,maLong], [data.epicerie[i].lat, data.epicerie[i].lon]),
   place: data.epicerie[i].Nom,
   ouverture: data.epicerie[i].Heureo,
   fermeture: data.epicerie[i].Heuref  
   
   });

  distances.sort(function (a, b) {
    if (a.dist > b.dist)
      return 1;
    if (a.dist < b.dist)
      return -1;
    // a doit être égale à b
    return 0;
  });

  var lesplusproches = distances.slice(0,5);

}


$("#resultatGraphique").remove();


$('.info0_2').text(lesplusproches[0].place+' à '+ ((lesplusproches[0].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[0].ouverture+"-"+ lesplusproches[0].fermeture);

$('.info1_2').text(lesplusproches[1].place+' à '+ ((lesplusproches[1].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[1].ouverture+"-"+ lesplusproches[1].fermeture);

$('.info2_2').text(lesplusproches[2].place+' à '+ ((lesplusproches[2].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[2].ouverture+"-"+ lesplusproches[2].fermeture);

$('.info3_2').text(lesplusproches[3].place+' à '+ ((lesplusproches[3].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[3].ouverture+"-"+ lesplusproches[3].fermeture);

$('.info4_2').text(lesplusproches[4].place+' à '+ ((lesplusproches[4].dist*6371009).toFixed(0) + "m")+"\n   " +lesplusproches[4].ouverture+"-"+ lesplusproches[4].fermeture);






      });

}

d3.json('bddlatlng.json', start)

});


};




