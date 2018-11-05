var mymap = L.map('mapid').setView([-6.221028, 106.791434], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 15,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoicmlzeWFuZGkiLCJhIjoiY2pseGcycWs5MDk4YTNrb3Y3Z2cxeTZ5MCJ9.Bf6nqQP9QQnir2TdQUS2Bw'
    }).addTo(mymap);

var defaultLocation = [
    [[-6.221028,106.791434], "<center><bold>Default Location</bold></center>"]
];

var index = 0;
for (loc of defaultLocation) {
    var marker = L.marker(loc[0]).addTo(mymap);
    if (index == 0)
        marker.bindPopup(loc[1]).openPopup();
    else
        marker.bindPopup(loc[1]);
    index++;
}

// declaration URL
const URL = "https://risyandi-mws.firebaseapp.com/project-fetch/data/peta.json";
// fetching URL
fetch(URL)
    .then(function (response) {
        if (response.status !== 200) {
            console.log("Ada Masalah Fetching. Status Code:" + response.status);
            throw response.statusText;
        }
        return response.json();
    })
    .then(resp => {
        localStorage.setItem('places', JSON.stringify(resp.places));
        setView();
    })
    .catch(function (err) {
        console.log(err);
    });

// get location data
let gambar = document.getElementById("gambar");
let review = document.getElementById("review");
let elImage = document.createElement('img');
let elPara = document.createElement('p');
let places;

// write element on pages
gambar.appendChild(elImage);
review.appendChild(elPara);

setView();

// function for finding the location
function findLocation(x, y) {
    for (let i = 0; i < places.length; i++) {
        if (places[i].lokasi[0] === x &&
            places[i].lokasi[1] === y) {
            return i;
        }
    }
    return -1;
}

// function for showing the location
function showLocation(e) {
    let ix = findLocation(e.latlng.lat, e.latlng.lng);
    if (ix >= 0) {
        elImage.src = places[ix].gambar;
        elPara.textContent = places[ix].review;
    }
}

// function for set view the location
function setView() {
    places = JSON.parse(localStorage.getItem('places'));
    if (places) {
        for (var p of places) {
            var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
            marker.on('click', showLocation);
        }
    }
}