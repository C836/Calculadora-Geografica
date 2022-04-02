function line(main, sec){
  var style = {
    color: "#004cff",
    weight: 5,
    opacity: 1
     }, 
    stroke = {
    color: "#fff",
    weight: 10,
    opacity: 1
    };
    
    let polylineStroke = L.polyline([main,sec],stroke).addTo(map);
    let polyline = L.polyline([main,sec],style).addTo(map); 
}