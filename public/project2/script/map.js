var mymap = L.map('mapid').setView([-8.701660, 115.169856], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data & copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmlzeWFuZGkiLCJhIjoiY2pseGcycWs5MDk4YTNrb3Y3Z2cxeTZ5MCJ9.Bf6nqQP9QQnir2TdQUS2Bw'
}).addTo(mymap);

// marker
var marker = L.marker([-8.701660, 115.169856]).addTo(mymap);
// way adding marker circle
var circle = L.circle([-8.701660, 115.169856], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.34,
    radius: 500
}).addTo(mymap);
// way adding marker polygon
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

// first way popup
marker.bindPopup("<b>Resto Populer Disini</b><br>yes!").openPopup();
// circle.bindPopup("ini sebuah circle.");
// polygon.bindPopup("ini sebuah polygon.");

// second way popup
// var popup = L.popup()
//     .setLatLng([-8.701660,115.169856])
//     .setContent("Restoran Terbaik Disini.")
//     .openOn(mymap);

// function events
// function onMapClick(e) {
//     console.log("Peta diklik pada posisi" + e.latlng);
// }
// mymap.on('click', onMapClick);

var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Lokasi yang dipilih : " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapClick);