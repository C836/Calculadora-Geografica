function changeMap(type){
    switch (type) {
        case "satellite":
            newId = 'mapbox/satellite-v9'
            break
        case "light":
            newId = 'streets-v11'
            break
    }
    
    tiles.options.id = newId
}