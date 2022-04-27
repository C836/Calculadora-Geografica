function details(address){
    $(".detail").each((x)=>{
        $(".detail")[x].innerText=''
    });

    fetch(`https://countryflagsapi.com/png/${address.country_code}`)
    .then(response => response.blob())
    .then(imageBlob => {
        let imageObjectURL = URL.createObjectURL(imageBlob);
        $("#flag").attr("src",imageObjectURL)
    });

    let names=[
        address.country+" "+address.country_code.toUpperCase(),
        address.state,
        address.city,
        address.municipality,
        address.town,
        address.suburb,
        address.county,
        address.road,
        address.village
    ]

    var filtered = names.filter(function(x) {
        return x !== undefined;
    });

    let filteredAddress=[]
    $(".detail").each((x)=>{
        filtered[x] !== undefined ? ($(".detail")[x].innerText=filtered[x], filteredAddress.push(filtered[x])) : null
    });

    weather(filteredAddress.join(' '))
}

function weather(address){
    fetch(`https://api.weatherapi.com/v1/current.json?key=c0e064493a4a4fd5b2c235414220504&q=${address}&aqi=no`)

    .then(res=>res.json())
    .then(res => {
        $("#celcius").text(res.current.temp_c+'°C')
        $(".fahrenheit").text(res.current.temp_f+'°f')
            let link=res.current.condition.icon.split('/'); 
                link=`${link[5]}/${link[6]}`
        $("#weatherIcon").attr("src",`./src/assets/weatherIcons/${link}`)
        
        date(res.location.localtime, res.location.tz_id)
    })
}

function date(date, id){
    fetch(`https://timezoneapi.io/api/timezone/?${id}&token=abTLiSGlNzavcynRNmLO`)

    .then(res=>res.json())
    .then(res=>{
        let hour=date.split(' ')[1].split(':')
        let period = res.data.datetime.hour_am_pm.toUpperCase()

        let t12hr = `${((Number(hour[0]) + 11) % 12 + 1)}:${hour[1]} ${period}`

        let gmt=res.data.datetime.offset_gmt
        if(gmt.charAt(1)==='0') gmt=gmt.replace(gmt.charAt(1), '');
        if(gmt.split(':')[1]==='00') gmt=gmt.split(':')[0]

        let semana=['Sexta', 'Sábado', 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta']
        let meses=['dezembro', 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro']

        let dia=res.data.datetime.day, mes=res.data.datetime.month, ano=res.data.datetime.year
        
        let diaSem=(new Date(ano,mes,dia).getDay())
            diaSem=semana[diaSem]

        $("#hour").text(t12hr)
        $("#date").text(`${diaSem}, ${dia} de ${meses[mes]}`)
        $("#timezone").text(`(GMT ${gmt})`)

        $("#loading").hide()
    })
}

function share(){
    navigator.clipboard.writeText($(".leaflet-popup-content").text())
}