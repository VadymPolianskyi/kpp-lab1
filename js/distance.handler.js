function calcRoute() {
    var start = document.querySelector('#start').value;
    var end = document.querySelector('#end').value;
    console.log(start);
    console.log(end);
    var request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    };
    directionsService.route(request, function (result, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(result);
        }
    });
}
