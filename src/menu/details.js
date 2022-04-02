// https://countryflagsapi.com/png/brazil

function details(address,method){
    console.log(address)
    fetch(`https://countryflagsapi.com/png/${address.country_code}`)
    .then(response => response.blob())
    .then(imageBlob => {
        const imageObjectURL = URL.createObjectURL(imageBlob);
        console.log(imageObjectURL);
        $("#flag").attr("src",imageObjectURL)
    });

    $("#country").text(address.country+" "+address.country_code.toUpperCase())
    $("#state").text(address.state)
    $("#city").text(address.city)
        if(address.city==='') $("#city").text(address.municipality)

    $("#town").text(address.town)

    $("#suburb").text(address.suburb)
        if(address.suburb!==address.county) $("#county").text(address.county)

    $("#road").text(address.road)
        if(address.road===undefined) $("#road").text(address.village)
}