var URLTEXT = "data/catatan.txt";
var URLJSON = "data/catatan.json";

// ** testing 1
// fetch(URLTEXT)
//     .then(function (response) {
//         if (response.status != 200) { // checking fetch status
//             console.log("Ada Masalah Fetching. Status Code:" + response.status);
//             return;
//         }
//         return response.text;
//     })
//     .then(text => console.log(text)) // write on log response
//     .catch(err => console.log(err)); // write on log error



// ** testing 2
// fetch(URLTEXT)
//     .then(function (response) {
//         if (response.status !== 200) {
//             console.log("Ada Masalah Fetching. Status Code:" + response.status);
//             throw response.statusText;
//         }
//         return response.text()
//     })
//     .then(text => {
//         let t = document.getElementById('hasil');
//         t.textContent = text;
//     })
//     .catch(err => console.log(err));



// ** testing 3
// fetch(URLJSON)
//     .then(function (response) {
//         if (response.status !== 200) {
//             console.log("Ada Masalah Fetching. Status Code:" + response.status);
//             throw response.json;
//         }
//         return response.json()
//     })
//     .then(function (res) {
//         console.log(res.judul);
//         console.log(res.lokasi);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });


// ** testing 4
// fetch(URLJSON)
// .then(response => response.json())
// .then(val => {
//     console.log(val.judul);
//     console.log(val.lokasi);
// })
// .catch((err) => console.log(err));


// ** testing 5
// (async () => {
//     try {
//         var response = await fetch(URLJSON);
//         var data = await response.json();
//         console.log(data.judul);
//         console.log(data.lokasi);
//     } catch (e){
//         console.log("Error");
//     }
// })();