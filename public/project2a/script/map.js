// initiation map leaflet
var mymap = L.map('mapid').setView([-6.942645, 107.787223], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 15,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoicmlzeWFuZGkiLCJhIjoiY2pseGcycWs5MDk4YTNrb3Y3Z2cxeTZ5MCJ9.Bf6nqQP9QQnir2TdQUS2Bw'
    }).addTo(mymap.panTo(L.latLng(-6.942645, 107.787223)));

// setup data location 
var dataLocation = [
    [[-6.942645, 107.787223], "<center><b>Tempat Tinggal</b><br>Jatiroke, Jatinangor</center>"],
    [[-6.928376, 107.768160], "<center><b>Kampus</b><br>ITB Jatinangor</center>"],
    [[-6.926666, 107.774631], "<center><b>Kampus</b><br>UNPAD Jatinangor</center>"],
    [[-6.933924, 107.771434], "<center><b>Mall</b><br>Jatinangor Town Square</center>"],
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

