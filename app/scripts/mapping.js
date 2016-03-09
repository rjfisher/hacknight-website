'use strict';

window.mapping = {
  map: null,

  initMap: function() {
    var map = L.map('leaflet', {
      dragging: false,
      scrollWheelZoom: false,
      zoomControl: false
    }).setView([40.042660, -76.299170], 16);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker = L.marker([40.042660, -76.299170], {
      title: 'Modo Design Group'
    });
    marker.addTo(map).bindPopup('<b><a href="https://www.google.com/maps/place/Modo+Design+Group/@40.0425577,-76.3013369,17z/data=!3m1!4b1!4m2!3m1!1s0x89c62494972cfeed:0xb505163db8d32054">Modo Design Group</a></b>').openPopup();

    this.map = map;
  }
};
