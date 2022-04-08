$('#secAddress,#secButton').prop('disabled', true);

function enableSec(){
    $('#mainAddress,#mainButton').prop('disabled', true);
    $('#secAddress,#secButton').prop('disabled', false);
}

function reset(){
    map.closePopup();
    mainMarker=''

    $(".leaflet-interactive").remove();
    $('#mainAddress,#mainButton').prop('disabled', false);
    $('#secAddress,#secButton').prop('disabled', true);

    $('.w_h').text('')
    $('#flag,#weatherIcon').attr('src','')
}