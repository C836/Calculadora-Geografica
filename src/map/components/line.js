function line(main, sec){
    let polyline = L.polyline([main,sec]).addTo(map); 
    polyline.setStyle({
      color: 'green'
    });
}