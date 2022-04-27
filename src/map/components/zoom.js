function zoom(mainlatLon,seclatLon, method){
if(method==='main'){
    map.flyTo(mainlatLon, 8, {
    animate: true,
    duration: 1.5})  
} else{
    let bounds = [[Number(mainlatLon[0]), Number(mainlatLon[1])], [Number(seclatLon[0]), Number(seclatLon[1])]];
    let rectangle = L.polygon(bounds).addTo(map);

        map.fitBounds(rectangle.getBounds(), {
            animate: true,
            duration: 3});
    }
}