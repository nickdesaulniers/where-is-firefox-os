var container = document.getElementById('container');
container.style.width = (window.innerWidth - 20) + 'px';
container.style.height = window.innerHeight + 'px';

function d (month, day, year) {
  // JavaScript dates assume January is month 0
  return (new Date(year, month - 1, day)).toLocaleDateString();
};

var open = '<div class="hoverinfo"><strong>';
var close = '</strong></div>';

var map = new Datamap({
  element: container,
  fills: {
    SOLD: 'darkorange',
    defaultFill: 'cadetblue',
  },
  data: {
    // For country codes: http://www.worldatlas.com/aatlas/ctycodes.htm
    ESP: {
      fillKey: 'SOLD',
      date: d(7, 2, 2013),
    },
    POL: {
      fillKey: 'SOLD',
      date: d(7, 12, 2013),
    },
  },
  geographyConfig: {
    popupTemplate: function (geo, data) {
      return open + geo.properties.name + (data ? ': ' + data.date : '') + close;
    },
  },
});

