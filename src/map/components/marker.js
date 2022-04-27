let mainIcon = new L.Icon({
  iconUrl: 'https://i.ibb.co/VDqh9Z6/main-Marker.png',
  iconSize: [50, 50],
  iconAnchor: [25, 25],
});

let middleIcon = new L.Icon({
  iconUrl: 'https://i.ibb.co/72mdJRK/middle-Marker.png',
  iconSize: [30, 30],
  iconAnchor: [15, 15]
})

let secIcon = new L.Icon({
  iconUrl: 'https://i.ibb.co/S0FgVS7/marker.png',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

function marker(latLon, address, type, distance, resultObj){
  let a={}
  try{
    a=Object.entries(resultObj.address)
  }
  catch(err){
    error()
  }

  let arr=[]
  for(x in a){
    arr.push(a[x][1])
  }

  if(type===0) {
    mainMarker = L.marker(latLon, {icon: mainIcon}).addTo(map);

    let popup = L.popup()
      .setContent(arr.join(", "));
      mainMarker.bindPopup(popup)
  } 
  else{
    secMarker = L.marker(latLon, {icon: secIcon}).addTo(map);

    let popup = L.popup()
      .setContent(arr.join(", "));
      secMarker.bindPopup(popup)

    getCenter(mainLatLon[0], mainLatLon[1], latLon[0], latLon[1], callback=>{
      let middleMarker = L.marker(callback, {icon: middleIcon}).addTo(map);

      zoom(mainLatLon, latLon, distance)
      
      let popup = L.popup()
        .setContent(distance);
        middleMarker.bindPopup(popup,{'className' : 'distancePopup'}).openPopup();
    })
  }
}

function getCenter(srcLat, srcLng, dstLat, dstLng, callback){
  let srcLatRad = srcLat  * (Math.PI / 180);
  let dstLatRad = dstLat  * (Math.PI / 180);
  let middleLatRad = Math.atan(Math.sinh(Math.log(Math.sqrt(
    (Math.tan(dstLatRad)+1/Math.cos(dstLatRad))*(Math.tan(srcLatRad)+1/Math.cos(srcLatRad))))));
  let middleLat = middleLatRad * (180 / Math.PI)
  let middleLng = (parseFloat(srcLng)+parseFloat(dstLng)) / 2;

  callback([middleLat,middleLng])
}