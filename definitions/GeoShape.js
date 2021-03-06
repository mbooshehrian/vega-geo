export default {
  "type": "GeoShape",
  "metadata": {"modifies": true},
  "params": [
    { "name": "projection", "type": "projection", "required": true },
    { "name": "pointRadius", "type": "number" },
    { "name": "field", "type": "field", "default": "datum" },
    { "name": "as", "type": "string", "default": "shape" }
  ]
}