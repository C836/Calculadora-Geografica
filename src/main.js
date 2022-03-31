let mainMarker = ""
let mainLatLon = 0
let secAddress = ''
let secLatLon = 0

function mainSearch(addressObj){
  if(addressObj===undefined){
    console.log("mainif")
    
    mainAddress = $("#mainAddress").val();

    getGeo(mainAddress,result=>{
      mainLatLon = [result.data[0].latitude, result.data[0].longitude];
      let mainName = result.data[0].label

      if(mainMarker !== '') map.removeLayer(mainMarker)

      marker(mainLatLon,mainName,0);
      zoom(mainLatLon)
      console.log(mainLatLon)
    })
  } else{
    details(addressObj.address, 'main')

    mainLatLon = [addressObj.lat, addressObj.lon];
    mainName = addressObj.display_name

    marker(mainLatLon,mainName,0);
    zoom(mainLatLon)
  }
}

function secSearch(addressObj){
  if(addressObj===undefined){
    console.log("secif")

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
  else{
    console.log("secelse")

    secLatLon = [addressObj.lat, addressObj.lon];
    let secName = addressObj.display_name

    marker(secLatLon,secName,1);
    line(mainLatLon, secLatLon);

    calculator(mainLatLon[0], mainLatLon[1], secLatLon[0], secLatLon[1], callback =>{
      new dist(secName, callback).criar()
    });
  }
}

function getGeo(address,callback){
  fetch(`http://api.positionstack.com/v1/forward?access_key=debd91e6cd3bdf06bddc138dfb493b2d&query=${address}`)

  .then(res => res.json())
  .then(json => {
      callback(json)
    }
  )
}