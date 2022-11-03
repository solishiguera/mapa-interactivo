var map = L.map('map').setView([25.6515649,-100.2917287],17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault()
});

const res = d3.csvParse("Name,Age\nJane,29\nJoe,33");
console.log(res);

function getCoord() { 
  var lat = document.getElementById('lat').value
  var lon = document.getElementById('lon').value
  
  map.panTo(new L.LatLng(lat,	lon));
  var marker = L.marker([lat,lon]).addTo(map);

}

