var directionsDisplay;
var directionsService;
var map;
var haight;
var oceanBeach;

function initMap() {

    directionsService = new google.maps.DirectionsService();
    haight = new google.maps.LatLng(37.7699298, -122.4469157);
    oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);
    directionsDisplay = new google.maps.DirectionsRenderer();

    var position = {lat: 49.2325, lng:  28.4711111111};

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: position
    });


    fetch('http://api.openweathermap.org/data/2.5/group?' +
        'id=2968815,524901,703448,5549222,1816670,6695624,6695624,6695624,6359304,' +
        '3469058,3530597,6058560,6094817,1273294,2759794,625144,323784,1070940,3435910' +
                '&appid=b55def6801e5aba7a6a653178a5a2b47&units=metric')

        .then(function(response) {
            response.json().then(function(data) {
                for (var i = 0; i< data.list.length; i ++) {

                    var city = data.list[i];

                    var marker = new google.maps.Marker({
                        position: {
                            lat: city.coord.lat,
                            lng: city.coord.lon,
                        },
                        origin: 'Hoboken NJ',
                        destination: 'Carroll Gardens, Brooklyn',
                        travelMode: 'TRANSIT',
                        transitOptions: {
                            departureTime: new Date(1337675679473),
                            modes: ['BUS'],
                            routingPreference: 'FEWER_TRANSFERS'
                        },
                        map: map,
                        zoom: 1000,
                        title: data.list[i].name,
                        animation: google.maps.Animation.DROP,
                        icon: "http://openweathermap.org/img/w/" + city.weather[0].icon + ".png"
                    });
                    attachInfo(marker, city.main.temp);
                }
            });
        });
    directionsDisplay.setMap(map);
}

function attachInfo(marker, info) {
    var infowindow = new google.maps.InfoWindow({
        content: "Temperature: " + info + " C"
    });

    marker.addListener('click', function () {
        infowindow.open(marker.get('map'), marker);
    });
}



