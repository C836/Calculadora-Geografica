let mainMarker = ""
let mainLatLon = 0
let secAddress = ''
let secLatLon = 0

function mainSearch(){
  mainAddress = $("#mainAddress").val();

  getGeo(mainAddress,result=>{
    mainLatLon = [result.data[0].latitude, result.data[0].longitude];
    let mainName = result.data[0].label

    if(mainMarker !== '') map.removeLayer(mainMarker)

    marker(mainLatLon,mainName,0);
    zoom(mainLatLon)
  })
}

function secSearch(){
  secAddress = $("#secAddress").val();

  getGeo(secAddress,result=>{
    secLatLon = [result.data[0].latitude, result.data[0].longitude];
    let secName = result.data[0].label

    marker(secLatLon,secName,1);
    line(mainLatLon, secLatLon);

    calculator(mainLatLon[0], mainLatLon[1], secLatLon[0], secLatLon[1], callback =>{
      new dist(secName, callback).criar()
    });
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