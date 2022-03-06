// ADD console.log to check to see if our code is workng
console.log("working");
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_key
});
// Then we add our 'graymap' tiile layer to the map.
streets.addTo(map);
// adding a marker for los angles, califora.
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: 'balck',
    fillcolor: '#ffffa1',
}).addTo(map);