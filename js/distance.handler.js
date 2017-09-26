function calcRoute() {
    var start = document.querySelector('#start').value;
    var end = document.querySelector('#end').value;

    var request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC
    };

    directionsService.route(request, function (result, status) {
        if (status == 'OK') {
            var route = result.routes[0];

            for (var i = 0; i < route.legs.length; i++) {
                document.querySelector('.distance').textContent = "Distance: " + route.legs[i].distance.text.replace("км", "km");
            }
            directionsDisplay.setDirections(result);
        }
    });

}
