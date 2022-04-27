let mainMarker = ""
let mainLatLon = 0
let secAddress = ''
let secLatLon = 0

function mainSearch(addressObj){
  if(addressObj===undefined){
    if($('#mainAddress').val()==='') return

    mainAddress = $("#mainAddress").val();

    getGeo(mainAddress,result=>{
      getAddress(result.lat, result.lon)
      enableSec()
    })
  } else{
    mainLatLon = [addressObj.lat, addressObj.lon];
    mainName = addressObj.display_name

    marker(mainLatLon,mainName,0,'',addressObj);
    zoom(mainLatLon, '', 'main')

    details(addressObj.address)
    enableSec()
  }
}

function secSearch(addressObj){
  if(addressObj===undefined){
    if($('#secAddress').val()==='') return
    
    secAddress = $("#secAddress").val();

    getGeo(secAddress, result=>{
      getAddress(result.lat, result.lon)
    })
  }
  else{
    secLatLon = [addressObj.lat, addressObj.lon];
    let secName = addressObj.display_name

    calculator(mainLatLon[0], mainLatLon[1], secLatLon[0], secLatLon[1], callback =>{
      marker(secLatLon, secName,1, callback,addressObj);
      line(mainLatLon, secLatLon);
    });
  }

  details(addressObj.address)
  $('#secAddress').val('')
}

function getGeo(address,callback){
  $("#loading").show()

  fetch(`https://nominatim.openstreetmap.org/search.php?q=${address}&format=jsonv2&accept-language=en`)

    .then(res => res.json())
    .then(json => {
      jQuery.isEmptyObject(json) ? error() : callback(json[0])
    }
  )
}

function getAddress(lat, lng){
  $("#loading").show()

  fetch(`https://nominatim.openstreetmap.org/reverse.php?lat=${lat}&lon=${lng}&format=jsonv2&accept-language=en`)

    .then(res => res.json())
    .then(json => {
      mainMarker===''? mainSearch(json) : secSearch(json);

      $("#loading").hide()
    }
  )
}

function error(){
  $("#loadingMsg").text('Erro ao buscar local ')
  $('.dot-bricks').css('animationPlayState','paused')

  setTimeout(()=>{
    $('#loading').hide()
    $("#loadingMsg").text('Carregando ')
    $('.dot-bricks').css('animationPlayState','running')
  },2500)
}