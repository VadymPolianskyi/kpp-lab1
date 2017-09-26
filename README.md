# kpp-lab1
### Steps

- **Created html page and structured project**<br>Created file index.html, created directory /js and /css
- **Attached map library**<br>Wrote script tag in html to attach google map library for visualizing map

```html
  <script async defer src="https://maps.googleapis.com/maps/api/js? key=AIzaSyBPJtLpz0bdOFx1UH6Lyj5HIX7zBUbA0Zg&callback=initMap"></script>
```
- **Created JS handler for visualizing map**<br>Created initMethod which should create map on element with 'map' id

```javascript
  function initMap() {
    var position = {lat: 49.2325, lng:  28.4711111111};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: position
    });
  }

  ```

![alt text](https://i.imgur.com/pECIULs.png?2)
<br>
  
- **Added request to OpenWeather service**<br>Got list of information about weather and visualized it on map

```javascript
  fetch('http://api.openweathermap.org/data/2.5/group?' +
        'id=2968815,524901,703448,5549222,1816670,6695624,6695624,6695624,6359304,' +
        '3469058,3530597,6058560,6094817,1273294,2759794,625144,323784,1070940,3435910' +
                '&appid=b55def6801e5aba7a6a653178a5a2b47&units=metric')
  ```
  
- **Got images according to wether**<br>Created Get request to OpenWether service to get image according to weather state for each place

```javascript
  icon: "http://openweathermap.org/img/w/" + city.weather[0].icon + ".png"
```


![alt text](https://i.imgur.com/3CbL8kl.png?1)
<br>

- **Created inform panel**<br>If you click on weather picture, inform panel will show you information about the weather

```javascript
    var infowindow = new google.maps.InfoWindow({
        content: "Temperature: " + info + " C"
    });
 ```

![alt text](https://i.imgur.com/cJwSTcF.png?1)


![alt text](https://i.imgur.com/dxYx4Gb.png?1)
<br>

- **Styled site**<br> Added css styles to html

```css
  #map {
    height: 600px;
    width: 100%;
    border-radius: 4px;
}
...
```

![alt text](https://i.imgur.com/79cS6BB.png?1)
<br>

- **Created list of cities for calculating distance**<br>Created list of American cities.
```text
Chicago
St Louis
Joplin, MO
Oklahoma City
Amarillo
Gallup, NM
Flagstaff, AZ
Winona
Kingman
Barstow
San Bernardino
Los Angeles

  ```

- **Created JS handler for calculating distance**<br>Created calcRoute method which should calculate the distance between two points and visualize it. If you chose city from list, the program will calculate and visualize the distance

request to google distance service
```javascript
var request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC
    };

  ```


<br>

- **Added distance label to show distance value**<br>Added text tag html for showing distance value after calculation and visualizing

request to google distance service
```javascript
            var route = result.routes[0];

            for (var i = 0; i < route.legs.length; i++) {
                document.querySelector('.distance').textContent = "Distance: " + route.legs[i].distance.text;
            }
            directionsDisplay.setDirections(result);

  ```


<br>
  
