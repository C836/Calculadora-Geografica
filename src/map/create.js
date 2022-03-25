var map = L.map('map',{ zoomControl: false }).setView([51.505, -0.09], 3);
new L.Control.Zoom({ position: 'topright' }).addTo(map);

var southWest = L.latLng(-89.98155760646617, -180), northEast = L.latLng(89.99346179538875, 180);
var bounds = L.latLngBounds(southWest, northEast);

map.setMaxBounds(bounds);
map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false });
});


let tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
minZoom: Math.ceil(Math.log2(Math.max(800, 1500) / 400)),
maxZoom: 18,
maxBoundsViscosity: 1.0,
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox/satellite-streets-v11',
tileSize: 512,
zoomOffset: -1
}).addTo(map);
