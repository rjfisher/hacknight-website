$('#menu-close').click(function(e) {
  'use strict';
  e.preventDefault();
  $('#sidebar-wrapper').toggleClass('active');
});
// Opens the sidebar menu
$('#menu-toggle').click(function(e) {
  'use strict';
  e.preventDefault();
  $('#sidebar-wrapper').toggleClass('active');
});
// Scrolls to the selected menu item on the page
$(function() {
  'use strict';
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function() {
  'use strict';

  var m = window.mapping;
  m.initMap();
});
