/* FONCTION 1 BAR*/

var myFunction1 = function (){
	
$('#button').click(function() {
		
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
   place: data.bar[i].Nom
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

$('#info0').append(jQuery("<li>"+lesplusproches[0].place+' à '+ ((lesplusproches[0].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info1').append(jQuery("<li>"+lesplusproches[1].place+' à '+ ((lesplusproches[1].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info2').append(jQuery("<li>"+lesplusproches[2].place+' à '+ ((lesplusproches[2].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info3').append(jQuery("<li>"+lesplusproches[3].place+' à '+ ((lesplusproches[3].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info4').append(jQuery("<li>"+lesplusproches[4].place+' à '+ ((lesplusproches[4].dist*6371009).toFixed(0) + ' m ')+ "</li>"));


      });
	
}

d3.json('bddlatlng.json', start)	
});



  $('#button2').click(function() {
    
    function start(data){
  console.log('voila vos data', data);
      
    
      var recup_adress2 = $('#adresse2').val();
      $.ajax({
          url:'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=' + encodeURI(recup_adress2)
      }).done(function(res){
      
      var maLat = res.results[0].geometry.location.lat;
      var maLong = res.results[0].geometry.location.lng;
      
      $('#resultat1').text('La latitude est : ' + maLat);
      $('#resultat2').text('La longitude est : ' + maLong);
      
      var distances = [];
for( var i in data.bar) {
   distances.push({
   dist: d3.geo.distance([maLat,maLong], [data.bar[i].lat, data.bar[i].lon]),
   place: data.bar[i].Nom  
   
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


$('#info0').append(jQuery("<li>"+lesplusproches[0].place+' à '+ ((lesplusproches[0].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info1').append(jQuery("<li>"+lesplusproches[1].place+' à '+ ((lesplusproches[1].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info2').append(jQuery("<li>"+lesplusproches[2].place+' à '+ ((lesplusproches[2].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info3').append(jQuery("<li>"+lesplusproches[3].place+' à '+ ((lesplusproches[3].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info4').append(jQuery("<li>"+lesplusproches[4].place+' à '+ ((lesplusproches[4].dist*6371009).toFixed(0) + ' m ')+ "</li>"));





      });

}

d3.json('bddlatlng.json', start)

});



};


/* FONCTION 2 TABAC */


var myFunction2 = function (){
	
	$('#button').click(function() {
		
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
   place: data.tabac[i].Nom
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

$('#info0').append(jQuery("<li>"+lesplusproches[0].place+' à '+ ((lesplusproches[0].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info1').append(jQuery("<li>"+lesplusproches[1].place+' à '+ ((lesplusproches[1].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info2').append(jQuery("<li>"+lesplusproches[2].place+' à '+ ((lesplusproches[2].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info3').append(jQuery("<li>"+lesplusproches[3].place+' à '+ ((lesplusproches[3].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info4').append(jQuery("<li>"+lesplusproches[4].place+' à '+ ((lesplusproches[4].dist*6371009).toFixed(0) + ' m ')+ "</li>"));


      });
	
}

d3.json('bddlatlng.json', start)	
});



$('#button2').click(function() {
    
    function start(data){
  console.log('voila vos data', data);
      
    
      var recup_adress2 = $('#adresse2').val();
      $.ajax({
          url:'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=' + encodeURI(recup_adress2)
      }).done(function(res){
      
      var maLat = res.results[0].geometry.location.lat;
      var maLong = res.results[0].geometry.location.lng;
      
      $('#resultat1').text('La latitude est : ' + maLat);
      $('#resultat2').text('La longitude est : ' + maLong);
      
      var distances = [];
for( var i in data.tabac) {
   distances.push({
   dist: d3.geo.distance([maLat,maLong], [data.tabac[i].lat, data.tabac[i].lon]),
   place: data.tabac[i].Nom  
   
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


$('#info0').append(jQuery("<li>"+lesplusproches[0].place+' à '+ ((lesplusproches[0].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info1').append(jQuery("<li>"+lesplusproches[1].place+' à '+ ((lesplusproches[1].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info2').append(jQuery("<li>"+lesplusproches[2].place+' à '+ ((lesplusproches[2].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info3').append(jQuery("<li>"+lesplusproches[3].place+' à '+ ((lesplusproches[3].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info4').append(jQuery("<li>"+lesplusproches[4].place+' à '+ ((lesplusproches[4].dist*6371009).toFixed(0) + ' m ')+ "</li>"));





      });

}

d3.json('bddlatlng.json', start)

});


};





/* FONCTION 3 FOOD */


var myFunction3 = function (){
	
	$('#button').click(function() {
		
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
   place: data.food[i].Nom

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

$('#info0').append(jQuery("<li>"+lesplusproches[0].place+' à '+ ((lesplusproches[0].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info1').append(jQuery("<li>"+lesplusproches[1].place+' à '+ ((lesplusproches[1].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info2').append(jQuery("<li>"+lesplusproches[2].place+' à '+ ((lesplusproches[2].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info3').append(jQuery("<li>"+lesplusproches[3].place+' à '+ ((lesplusproches[3].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info4').append(jQuery("<li>"+lesplusproches[4].place+' à '+ ((lesplusproches[4].dist*6371009).toFixed(0) + ' m ')+ "</li>"));


      });
	
}

d3.json('bddlatlng.json', start)	
});



$('#button2').click(function() {
    
    function start(data){
  console.log('voila vos data', data);
      
    
      var recup_adress2 = $('#adresse2').val();
      $.ajax({
          url:'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=' + encodeURI(recup_adress2)
      }).done(function(res){
      
      var maLat = res.results[0].geometry.location.lat;
      var maLong = res.results[0].geometry.location.lng;
      
      $('#resultat1').text('La latitude est : ' + maLat);
      $('#resultat2').text('La longitude est : ' + maLong);
      
      var distances = [];
for( var i in data.food) {
   distances.push({
   dist: d3.geo.distance([maLat,maLong], [data.food[i].lat, data.food[i].lon]),
   place: data.food[i].Nom  
   
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


$('#info0').append(jQuery("<li>"+lesplusproches[0].place+' à '+ ((lesplusproches[0].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info1').append(jQuery("<li>"+lesplusproches[1].place+' à '+ ((lesplusproches[1].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info2').append(jQuery("<li>"+lesplusproches[2].place+' à '+ ((lesplusproches[2].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info3').append(jQuery("<li>"+lesplusproches[3].place+' à '+ ((lesplusproches[3].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info4').append(jQuery("<li>"+lesplusproches[4].place+' à '+ ((lesplusproches[4].dist*6371009).toFixed(0) + ' m ')+ "</li>"));





      });

}

d3.json('bddlatlng.json', start)

});


};




/* FONCTION 4 EPICERIE */


var myFunction4 = function (){
	
	$('#button').click(function() {
		
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
   place: data.epicerie[i].Nom
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

$('#info0').append(jQuery("<li>"+lesplusproches[0].place+' à '+ ((lesplusproches[0].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info1').append(jQuery("<li>"+lesplusproches[1].place+' à '+ ((lesplusproches[1].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info2').append(jQuery("<li>"+lesplusproches[2].place+' à '+ ((lesplusproches[2].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info3').append(jQuery("<li>"+lesplusproches[3].place+' à '+ ((lesplusproches[3].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info4').append(jQuery("<li>"+lesplusproches[4].place+' à '+ ((lesplusproches[4].dist*6371009).toFixed(0) + ' m ')+ "</li>"));


      });
	
}

d3.json('bddlatlng.json', start)	
});



$('#button2').click(function() {
    
    function start(data){
  console.log('voila vos data', data);
      
    
      var recup_adress2 = $('#adresse2').val();
      $.ajax({
          url:'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=' + encodeURI(recup_adress2)
      }).done(function(res){
      
      var maLat = res.results[0].geometry.location.lat;
      var maLong = res.results[0].geometry.location.lng;
      
      $('#resultat1').text('La latitude est : ' + maLat);
      $('#resultat2').text('La longitude est : ' + maLong);
      
      var distances = [];
for( var i in data.epicerie) {
   distances.push({
   dist: d3.geo.distance([maLat,maLong], [data.epicerie[i].lat, data.epicerie[i].lon]),
   place: data.epicerie[i].Nom  
   
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



$('#info0').append(jQuery("<li>"+lesplusproches[0].place+' à '+ ((lesplusproches[0].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info1').append(jQuery("<li>"+lesplusproches[1].place+' à '+ ((lesplusproches[1].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info2').append(jQuery("<li>"+lesplusproches[2].place+' à '+ ((lesplusproches[2].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info3').append(jQuery("<li>"+lesplusproches[3].place+' à '+ ((lesplusproches[3].dist*6371009).toFixed(0) + ' m ')+ "</li>"));
$('#info4').append(jQuery("<li>"+lesplusproches[4].place+' à '+ ((lesplusproches[4].dist*6371009).toFixed(0) + ' m ')+ "</li>"));




      });

}

d3.json('bddlatlng.json', start)

});


};
