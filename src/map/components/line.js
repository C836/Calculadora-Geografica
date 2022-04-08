let highlight = ''
function line(main, sec){
  highlight!=='' ? highlight.remove() : ''

  var style = {
      color: "#004cff",
      weight: 5,
      opacity: 1
    }, 
      stroke = {
      color: "#fff",
      weight: 10,
      opacity: 1
    },
    border = {
      color: "#004cff",
      weight: 24,
      opacity: 0.4
    }
    
    highlight = L.polyline([main,sec],border).addTo(map);
      map.addLayer(highlight)
    let polylineStroke = L.polyline([main,sec],stroke).addTo(map);
    let polyline = L.polyline([main,sec],style).addTo(map); 
}