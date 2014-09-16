
function d (month, day, year) {
  // JavaScript dates assume January is month 0
  return (new Date(year, month - 1, day)).toLocaleDateString();
};

var open = '<div class="hoverinfo"><strong>';
var close = '</strong></div>';

var map = new Datamap({
  element: container,
  fills: {
    SOLD: '#FF9500',
    defaultFill: 'rgba(234, 239, 242, 0.5)',
  },
  geographyConfig: {
    borderWidth: 0,
    borderColor: '#0095DD'
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
    COL: {
      fillKey: 'SOLD',
      date: d(8, 1, 2013),
    },
    VEN: {
      fillKey: 'SOLD',
      date: d(8, 1, 2013),
    },
    DEU: {
      fillKey: 'SOLD',
      date: d(10, 15, 2013),
    },
    BRA: {
      fillKey: 'SOLD',
      date: d(10, 22, 2013),
    },
    PER: {
      fillKey: 'SOLD',
      date: d(10, 23, 2013),
    },
    URY: {
      fillKey: 'SOLD',
      date: d(10, 29, 2013),
    },
    MEX: {
      fillKey: 'SOLD',
      date: d(10, 30, 2013),
    },
    HUN: {
      fillKey: 'SOLD',
      date: d(11, 11, 2013),
    },
    GRC: {
      fillKey: 'SOLD',
      date: d(11, 14, 2013),
    },
    SRB: {
      fillKey: 'SOLD',
      date: d(11, 28, 2013),
    },
    MNE: {
      fillKey: 'SOLD',
      date: d(11, 29, 2013),
    },
    ITA: {
      fillKey: 'SOLD',
      date: d(12, 3, 2013),
    },
    CHL: {
      fillKey: 'SOLD',
      date: d(2, 19, 2014),
    },
    FRA: {
      fillKey: 'SOLD',
      date: d(7, 31, 2014),
    },
    MKD: {
      fillKey: 'SOLD',
      date: d(8, 14, 2014),
    },
    SLV: {
      fillKey: 'SOLD',
      date: d(8, 14, 2014),
    },
    CZE: {
      fillKey: 'SOLD',
      date: d(8, 21, 2014),
    },
    IND: {
      fillKey: 'SOLD',
      date: d(8, 26, 2014),
    },
    PAN: {
      fillKey: 'SOLD',
      date: d(8, 29, 2014),
    },
    NIC: {
      fillKey: 'SOLD',
      date: d(9, 9, 2014),
    },
  },
  geographyConfig: {
    popupTemplate: function (geo, data) {
      return open + geo.properties.name + (data ? ': ' + data.date : '') + close;
    },
    highlightFillColor: '#E66000',
  },
});

