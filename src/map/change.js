function changeMap(type){
    switch (type) {
        case "satellite":
            newId = 'mapbox/satellite-v9'
    }
    
    tiles.options.id = newId
}