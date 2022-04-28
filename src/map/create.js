var map = L.map('map',{ zoomControl: false, attributionControl: false}).setView([-8.88, -63.6355929], 3);
new L.Control.Zoom({ position: 'topright' }).addTo(map);

var southWest = L.latLng(-89.98155760646617, -180), northEast = L.latLng(89.99346179538875, 180);
var bounds = L.latLngBounds(southWest, northEast);

map.setMaxBounds(bounds);
map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false });
});

$("#loading").hide()

document.querySelectorAll('.noZoom').forEach(item => {
  item.addEventListener('wheel', event => {
    if (event.ctrlKey) {
      event.preventDefault()
    }
  }, true)
})

map.on('click', function(e) {
    getAddress(e.latlng.lat, e.latlng.lng)
});