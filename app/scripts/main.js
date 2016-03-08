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

function getDate(month) {
  'use strict';
  var result = month.startOf('month');
  while (result.day() !== 4) {
    result.add(1, 'day');
  }

  return result.add(21, 'days');
}

$(function() {
  'use strict';
  var result = getDate(moment());
  var meeting = result.subtract(6, 'hours');

  $('.next').text(meeting.format('dddd, MMMM Do YYYY, h:mm:ss a') + ' EST');

  $('.countdown').downCount({
    date: meeting.add(4, 'hours').format(),
    offset: 0
  });
});
