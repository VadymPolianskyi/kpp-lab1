# kpp-lab1
### Features

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

- **Created inform panel**<br>If you click on weather picture, inform panel will show you information about the weather

```javascript
    var infowindow = new google.maps.InfoWindow({
        content: "Temperature: " + info + " C"
    });
 ```

- **Styled site**<br> Added css styles to html

```css
  #map {
    height: 600px;
    width: 100%;
    border-radius: 4px;
}
...
```