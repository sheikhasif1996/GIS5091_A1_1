var map = L.map('map').setView([38.638363, -90.279093], 8);

  // load a tile layer
 L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);
var customIcon1 = L.icon({
    iconUrl: 'https://png.pngtree.com/png-vector/20210214/ourmid/pngtree-location-marker-png-image_2921053.jpg',
    iconSize: [32, 32], // Set the size of your icon
    iconAnchor: [16, 32], // Set the anchor point
    popupAnchor: [0, -32] // Set the popup anchor point
});

var marker1 = L.marker([38.62175, -90.33178],{ icon: customIcon1 }).addTo(map);
var marker2 = L.marker([38.638363, -90.279093],{ icon: customIcon1 }).addTo(map);
var marker3 = L.marker([38.625085, -90.186804],{ icon: customIcon1 }).addTo(map);
var marker4 = L.marker([38.637653, -90.240328
],{ icon: customIcon1 }).addTo(map);
var marker5 = L.marker([38.614859, -90.325424],{ icon: customIcon1 }).addTo(map);



marker1.bindPopup("<b>Mapplewood Walmart</b><br>Store").openPopup();
marker2.bindPopup("<b>Festival And Parking Plaza</b><br>Parking Lot").openPopup();
marker3.bindPopup("<b>GateWay Arch</b><br>Tourist Place").openPopup();
marker4.bindPopup("<b>Masjid Bilal</b><br>Mosque").openPopup();
marker5.bindPopup("<b>Mapplewood Public Library</b><br>Library").openPopup();




