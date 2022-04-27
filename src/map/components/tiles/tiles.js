let options={
    minZoom: Math.ceil(Math.log2(Math.max(800, 1500) / 300)),
  }
  
let Default = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    minZoom: Math.ceil(Math.log2(Math.max(800, 1500) / 300)),
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1  
});

let dark1 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    minZoom: Math.ceil(Math.log2(Math.max(800, 1500) / 300)),
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1  
});

var dark2 = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=b6664591-d91a-41cd-b3f1-88f23309a291', {
    minZoom: Math.ceil(Math.log2(Math.max(800, 1500) / 300)),
});

let roadsDark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    minZoom: Math.ceil(Math.log2(Math.max(800, 1500) / 300)),
    id: 'mapbox/navigation-night-v1',
    tileSize: 512,
    zoomOffset: -1  
});

var roads1 = L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey={apikey}', {
	apikey: '141ed5adf3ae4737aeeaf1e5659891ef',
    minZoom: Math.ceil(Math.log2(Math.max(800, 1500) / 300)),
});

var roads2 = L.tileLayer('https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey={apikey}', {
	apikey: '141ed5adf3ae4737aeeaf1e5659891ef',
    minZoom: Math.ceil(Math.log2(Math.max(800, 1500) / 300)),
});

let sat1 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    minZoom: Math.ceil(Math.log2(Math.max(800, 1500) / 300)),
    id: 'mapbox/satellite-streets-v11',
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

    if(sign==='+') {
        value===7 ? value=0 : value+=1; 
        $(".mapSelector").attr("value",`${value}`)}
    else {
        value===0 ? value=7 : value-=1; 
        $(".mapSelector").attr("value",`${value}`)}

    changeMap(value)
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
            actualMap=dark1;
            break;

        case 3:
            actualMap=dark2;
            break;
        
        case 4:
            actualMap=roadsDark;
            break

        case 5:
            actualMap=roads1;
            break;
        
        case 6:
            actualMap=roads2;
            break;    
            
        case 7:
            actualMap=sat1;
            break;
    }
    $(".mapSelector").css("background-image",`url('src/assets/mapIcons/${value}.png')`)
    map.addLayer(actualMap);
}