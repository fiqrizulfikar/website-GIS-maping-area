// Basemap layer options
var baseMaps = {
  "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map),
  "Satelit": L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  }),
  "Toner": L.tileLayer('https://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png')
};