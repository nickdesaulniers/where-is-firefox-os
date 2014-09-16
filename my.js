(function () {

var open = '<div class="hoverinfo"><strong>';
var close = '</strong></div>';

// To add a new country, update `countries.json`. To find its country
// code: http://www.worldatlas.com/aatlas/ctycodes.htm

var xhr = new XMLHttpRequest;
xhr.open('get', 'countries.json');
xhr.onload = renderMap;
xhr.responseType = 'json';
xhr.send();

function renderMap() {
  var countries = xhr.response;

  // Transform each object so it matches the format `Datamap` expects.
  Object.keys(countries).forEach(function (key) {
    countries[key] = {
      fillKey: 'SOLD',
      date: countries[key].date
    };
  });

  new Datamap({
    element: container,
    fills: {
      SOLD: '#FF9500',
      defaultFill: 'rgba(234,239,242,.5)'
    },
    projection: 'equirectangular',
    data: countries,
    geographyConfig: {
      popupTemplate: function (geo, data) {
        return open + geo.properties.name + (data ? ': ' + data.date : '') + close;
      },
      highlightFillColor: '#E66000',
      borderColor: 'rgba(255,255,255,.2)'
    }
  });
}

})();
