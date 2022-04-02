let mainMarker = ""
let mainLatLon = 0
let secAddress = ''
let secLatLon = 0

function mainSearch(addressObj){
  if(addressObj===undefined){
    console.log("mainif")
    
    mainAddress = $("#mainAddress").val();

    getGeo(mainAddress,result=>{
      mainLatLon = [result.lat, result.lon];
      let mainName = result.display_name

      if(mainMarker !== '') map.removeLayer(mainMarker)

      marker(mainLatLon,mainName,0);
      zoom(mainLatLon)
      console.log(mainLatLon)
    })
  } else{
    console.log("mainelse")

    details(addressObj.address, 'main')

    console.log(addressObj)

    console.log(addressObj.lat)

    mainLatLon = [addressObj.lat, addressObj.lon];
    mainName = addressObj.display_name

    marker(mainLatLon,mainName,0);
    zoom(mainLatLon)
  }
}

function secSearch(addressObj){
  if(addressObj===undefined){
    secAddress = $("#secAddress").val();

    getGeo(secAddress,result=>{
      secLatLon = [result.lat, result.lon];
      let secName = result.display_name

      calculator(mainLatLon[0], mainLatLon[1], secLatLon[0], secLatLon[1], callback =>{
        console.log(callback)

        marker(secLatLon,secName,1);
        line(mainLatLon, secLatLon);
      });
    })
  }
  else{
    secLatLon = [addressObj.lat, addressObj.lon];
    let secName = addressObj.display_name

    calculator(mainLatLon[0], mainLatLon[1], secLatLon[0], secLatLon[1], callback =>{
      marker(secLatLon, secName,1, callback);
      line(mainLatLon, secLatLon);
    });
  }
}

function getGeo(address,callback){
  $("#loading").show()

  fetch(`https://nominatim.openstreetmap.org/search.php?q=${address}&format=jsonv2&accept-language=en`)

  .then(res => res.json())
  .then(json => {
      $("#loading").hide()
      callback(json[0])
    }
  )
}