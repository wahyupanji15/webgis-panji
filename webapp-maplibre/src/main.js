import { Map } from 'maplibre-gl';
import naturalEarthData from "./data/ne.geojson?url";

const mapElement = document.createElement ('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map ({
    container: 'map',
    style: 'https://demotiles.maplibre.org/globe.json',
    center: [106.89 , -6.19],
    zoom: 11
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
    data: "https://geoserver.mapid.io/layers_new/get_layer?api_key=e39817e8ae824eac8fe466f38a2e0420&layer_id=6a3006fabccdad7e1b82d757&project_id=6a2ffb666684a940bdb05bb8"
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

});
