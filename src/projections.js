import {
  geoAlbers,
  geoAlbersUsa,
  geoAzimuthalEqualArea,
  geoAzimuthalEquidistant,
  geoConicConformal,
  geoConicEqualArea,
  geoConicEquidistant,
  geoEquirectangular,
  geoGnomonic,
  geoMercator,
  geoOrthographic,
  geoStereographic,
  geoTransverseMercator
} from 'd3-geo';

export var properties = [
  // standard properties in d3-geo
  'clipAngle',
  'clipExtent',
  'scale',
  'translate',
  'center',
  'rotate',
  'parallels',
  'precision',

  // extended properties in d3-geo-projections
  'coefficient',
  'distance',
  'fraction',
  'lobes',
  'parallel',
  'radius',
  'ratio',
  'spacing',
  'tilt'
];

/**
 * Augment projections with their type and a copy method.
 */
function create(type, constructor) {
  return function projection() {
    var p = constructor();

    p.type = type;

    p.copy = p.copy || function() {
      var c = projection();
      properties.forEach(function(prop) {
        if (p.hasOwnProperty(prop)) c[prop](p[prop]());
      });
      return c;
    };

    return p;
  };
}

export function projection(type, proj) {
  return arguments.length > 1 ? (projections[type] = create(type, proj), this)
    : projections.hasOwnProperty(type) ? projections[type] : null;
}

var projections = {
  // base d3-geo projection types
  albers:               geoAlbers,
  albersusa:            geoAlbersUsa,
  azimuthalequalarea:   geoAzimuthalEqualArea,
  azimuthalequidistant: geoAzimuthalEquidistant,
  conicconformal:       geoConicConformal,
  conicequalarea:       geoConicEqualArea,
  conicequidistant:     geoConicEquidistant,
  equirectangular:      geoEquirectangular,
  gnomonic:             geoGnomonic,
  mercator:             geoMercator,
  orthographic:         geoOrthographic,
  stereographic:        geoStereographic,
  transversemercator:   geoTransverseMercator
};

for (var key in projections) {
  projection(key, projections[key]);
}
