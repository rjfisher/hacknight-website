'use strict';

window.mapping = {
  map: null,

  initMap: function() {
    L.Icon.Default.imagePath = 'images/leaflet/';
    var map = L.map('leaflet', {
      dragging: false,
      scrollWheelZoom: false,
      zoomControl: false
    }).setView([40.042660, -76.299170], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    this.map = map;
  }
};
