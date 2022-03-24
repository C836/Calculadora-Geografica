function calculator(lat1, lon1, lat2, lon2, callback){
    const raio = 6371e3;
  
    const rad1 = lat1 * Math.PI / 180;
    var rad2 = lat2 * Math.PI / 180;
  
    var difLat = (lat2 - lat1) * Math.PI / 180;
    var difLon = (lon2 - lon1) * Math.PI / 180;
  
    var x = Math.sin(difLat / 2) * Math.sin(difLat / 2) +
        Math.cos(rad1) * Math.cos(rad2) *
        Math.sin(difLon / 2) * Math.sin(difLon / 2);
  
    var y = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  
    var result = (raio * y).toFixed()
    result = (Number(result)).toLocaleString()
    result = result.replace(/.([^.]*)$/, ',' + '$1') + " km"
  
    callback(result)
}