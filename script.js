
/*
L.control.ruler().addTo(map);

function but1(){
    L.marker([50.84673, 4.35247]).addTo(map);
}

function but2(){
    var polylinePoints = [
        [50, -10],
        [50, -40]
      ];            
      
    L.polyline(polylinePoints).addTo(map); 
    
    var marker=L.marker([50, -40]).addTo(map);
    marker.bindPopup('<b>Hello world!</b><br />I am a popup.');

    var options = {
        position: 'topleft',
        lengthUnit: {
          factor: 0.539956803,    //  from km to nm
          display: 'Nautical Miles',
          decimal: 2
        }
      };
      
L.control.ruler(options).addTo(map);
}

function but3(){
    map.flyTo([-20, -50], 8, {
      animate: true,
      duration: 1.5
  });
}
*/

let mainMarker = ""

function mainSearch(){
  let mainAdress = $("#mainAdress").val();

  getGeo(mainAdress,result=>{
    let mainLatLon = [result.data[0].latitude, result.data[0].longitude];
    let mainName = result.data[0].label

    if(mainMarker !== '') map.removeLayer(mainMarker)

    marker(mainLatLon,mainName);
    zoom(mainLatLon)
  })
}

function getGeo(address,callback){
  fetch(`http://api.positionstack.com/v1/forward?access_key=debd91e6cd3bdf06bddc138dfb493b2d&query=${address}`)

  .then(res => res.json())
  .then(json => {
      callback(json)
    }
  )
}

function marker(latLon, address){
  mainMarker = L.marker(latLon).addTo(map);
  mainMarker.bindPopup(address);
}

function zoom(latLon){
  map.flyTo(latLon, 8, {
    animate: true,
    duration: 1.5
  });
}
