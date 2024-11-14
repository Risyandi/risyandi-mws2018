var mymap = L.map('mapid').setView([-6.828339, 107.798131], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data & copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
}).addTo(mymap);

// marker, 
var marker = L.marker([-6.828339, 107.798131]).addTo(mymap);
// way adding marker circle
var circle = L.circle([-6.828339, 107.798131], {
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
marker.bindPopup("<center><b>Wana Wisata</b></br><b>Kampoeng Ciherang</b><br>Let check at this location.</br><a href='/' target='_blank'>Lokasi Istimewa Dengan Mapbox</a></center>").openPopup();
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
        // .setContent("Anda Berada Di Koordinat :" + e.latlng.toString())
        .setContent("You are on coordinate : Lat (" + e.latlng.lat + ") "+" Long("+ e.latlng.lng +")")
        .openOn(mymap);
        console.log(e.latlng, "chek location");
    }
mymap.on('click', onMapClick);