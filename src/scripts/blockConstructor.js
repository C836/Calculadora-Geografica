class dist{
    constructor(secAddress, distance){
        this.secAddress = secAddress
        this.distance = distance
    }
    
    criar(){
    let div = document.createElement("div");
    let nome = document.createElement("p");
    let distance = document.createElement("p");
  
        nome.innerText = this.secAddress
        distance.innerText = this.distance
  
        $(div).addClass("route")
        $(div).append(nome)
        $(div).append(distance)
        $(".distanceBlocks").append(div)
    }
}