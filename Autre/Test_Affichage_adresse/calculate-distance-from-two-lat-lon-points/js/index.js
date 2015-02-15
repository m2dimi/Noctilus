// get lat/lon from geonames webservice
var points = [
  {
    "address": "78 Boulevard Ornano 75018 Paris",
    lat: 48.8969944,
    lon: 2.3454932
  },
  {
"address": "34 Boulevard Ornano 75018 Paris",
    lat: 48.8938606, 
    lon: 2.347969
  },
  {"address": "25 Rue Sainte-Isaure, 75018 Paris",
    lat: 48.894573,
    lon: 2.344384
  }
];

var radial_distance = d3.geo.distance([points[0].lat,points[0].lon], [points[1].lat, points[1].lon]);

// multiply radians to the mean radius
// Cfr. http://en.wikipedia.org/wiki/Earth_radius#Mean_radius
d3.select("#info").text( radial_distance * 6371009 + 'm');



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

