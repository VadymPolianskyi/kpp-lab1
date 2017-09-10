function initMap() {
    var position = {lat: 49.2325, lng:  28.4711111111};

    var map = new google.maps.Map(document.getElementById('map'), {
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
}

function attachInfo(marker, info) {
    var infowindow = new google.maps.InfoWindow({
        content: "Temperature: " + info + " C"
    });

    marker.addListener('click', function () {
        infowindow.open(marker.get('map'), marker);
    });
}