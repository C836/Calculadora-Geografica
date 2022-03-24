function marker(latLon, address, type){
    var greenIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [18, 33],
      iconAnchor: [8, 31],
      popupAnchor: [1, -34],
      shadowSize: [33, 33]
    });
  
  if(type===0) {
    mainMarker = L.marker(latLon).addTo(map);
    mainMarker.bindPopup(address)} 
  else{
    secMarker = L.marker(latLon, {icon: greenIcon}).addTo(map);
    secMarker.bindPopup(address)
  }
}