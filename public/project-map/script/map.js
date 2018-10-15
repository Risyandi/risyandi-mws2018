// initiation map leaflet
var mymap = L.map('mapid').setView([-6.902353, 107.618778], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 15,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoicmlzeWFuZGkiLCJhIjoiY2pseGcycWs5MDk4YTNrb3Y3Z2cxeTZ5MCJ9.Bf6nqQP9QQnir2TdQUS2Bw'
    }).addTo(mymap.panTo(L.latLng(-6.902353, 107.618778)));

// setup data location 
var dataLocation = [
    [[-6.902353, 107.618778], "<center><b>Gedung Sate</b><br>Grand Dutch colonial administration building dating to the 1920s, now West Java's government house.</center>"]
];

// condition location
var index = 0;
for (loc of dataLocation) {
    var marker = L.marker(loc[0]).addTo(mymap);
    if (index == 0)
        marker.bindPopup(loc[1]).openPopup();
    else
        marker.bindPopup(loc[1]);
    index++;
}

