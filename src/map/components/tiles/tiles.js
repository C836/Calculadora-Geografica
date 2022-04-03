let options={
    minZoom: Math.ceil(Math.log2(Math.max(800, 1500) / 300)),
  }
  
let Default = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    minZoom: Math.ceil(Math.log2(Math.max(800, 1500) / 300)),
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1  
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    minZoom: Math.ceil(Math.log2(Math.max(800, 1500) / 300)),
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1  
});

let sat1 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    minZoom: Math.ceil(Math.log2(Math.max(800, 1500) / 300)),
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1  
});

let roadsDark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    minZoom: Math.ceil(Math.log2(Math.max(800, 1500) / 300)),
    id: 'mapbox/navigation-night-v1',
    tileSize: 512,
    zoomOffset: -1  
});

let nativeLabels = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: Math.ceil(Math.log2(Math.max(800, 1500) / 300)),
});

let actualMap=Default
map.addLayer(actualMap)

function changeValue(sign){
    let value = Number($(".mapSelector").attr("value"))

    if(sign==='+') {value+=1; $(".mapSelector").attr("value",`${value}`)}
    else {value-=1; $(".mapSelector").attr("value",`${value}`)}

    changeMap(value)
    console.log(value)
}

function changeMap(value){
    map.removeLayer(actualMap)
    
    switch(value){
        case 0:
            actualMap=Default;
            break;

        case 1:
            actualMap=nativeLabels;
            break;

        case 2:
            actualMap=dark;
            break;

        case 3:
            actualMap=sat1;
            break;
            
        case 4:
            actualMap=roadsDark;
            break;
    }
    map.addLayer(actualMap);
}