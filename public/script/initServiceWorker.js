// initiation service worker
if (!('serviceWorker' in navigator)) {
    console.log('Browser does not support service worker !');
} else {
    // if success or detection support register service worker source
    navigator.serviceWorker.register('/serviceWorker.js')
        .then(function () {
    // return message error if process register failed
        }).catch(function (error) {
            console.log("Error registering service worker:", error);
        });
}