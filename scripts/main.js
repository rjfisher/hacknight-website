"use strict";window.mapping={map:null,initMap:function(){L.Icon.Default.imagePath="images/leaflet/";var t=L.map("leaflet",{dragging:!1,scrollWheelZoom:!1,zoomControl:!1}).setView([40.04266,-76.29917],13);L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(t),this.map=t}},$("#menu-close").click(function(t){t.preventDefault(),$("#sidebar-wrapper").toggleClass("active")}),$("#menu-toggle").click(function(t){t.preventDefault(),$("#sidebar-wrapper").toggleClass("active")}),$(function(){$("a[href*=\\#]:not([href=\\#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")||location.hostname===this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}})}),$(document).ready(function(){window.mapping});