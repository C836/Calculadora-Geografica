function zoom(latLon){
map.flyTo(latLon, 8, {
    animate: true,
    duration: 1.5
});
}