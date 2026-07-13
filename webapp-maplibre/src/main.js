import { Map } from 'maplibre-gl';
import naturalEarthData from "./data/ne.geojson?url";
import areaData from "./data/area.geojson?url";

const mapElement = document.createElement ('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map ({
    container: 'map',
    style: 'https://demotiles.maplibre.org/globe.json',
    center: [106.89 , -6.19],
    zoom: 1
})

// const data = {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {
//         "Name": "Jakarta"
//       },
//       "geometry": {
//         "type": "Point",
//         "coordinates": [
//           106.7794188,
//           -6.2333506
//         ]
//       }
//     }
//   ]
// }

map.on("load", () => {

  map.addSource('kota', {
    type: 'geojson',
    data: naturalEarthData 
  });

  map.addLayer({
    id: "titik-kota",
    type: "circle",
    source: "kota",
    paint: {
      "circle-radius": 8,
      "circle-color": "blue",
      "circle-stroke-width": 1,
      "circle-stroke-color": "black"
    }
  });

  map.addSource('pulau', {
    type: 'geojson',
    data: areaData 
  });

  map.addLayer({
    id: "area-pulau",
    type: "fill",
    source: "pulau",
    paint: {
      "fill-color": "orange",
      "fill-outline-color": "black",
    }
  });

});
