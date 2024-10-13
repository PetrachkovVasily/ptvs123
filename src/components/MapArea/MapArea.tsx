import "leaflet/dist/leaflet.css";
import "leaflet-area-select";
import { FeatureGroup, MapContainer, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";
import { EditControl } from "react-leaflet-draw";

import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import classes from "./MapArea.module.css";
import { Polygon } from "../../types/areaTypes";

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
//   iconUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
// });

function MapArea({ coordinates, setCoordinates }: any) {
  const [center, setCenter] = useState({ lat: 24.4539, lng: 54.3773 });
  const ZOOM_LEVEL = 12;
  const mapRef = useRef(null);
  const osm = {
    maptiler: {
      url: "https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1",
      attribution:
        '&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    },
  };

  function onCreated(e: any) {
    let arr: never[] = [];
    e.layer.getLatLngs().forEach((element: { lat: any; lng: any }) => {
      console.log(element);
      console.log("wewe");

      return { lat: element.lat, lng: element.lng };
    });
    console.log(e.layer.getLatLngs()[0]);
    console.log(e.layer.getLatLngs()[0][0]);

    if (e.layer.getLatLngs()[0][0]) {
      console.log(...e.layer.getLatLngs()[0]);
      setCoordinates(e.layer.getLatLngs()[0]);
    }
  }

  return (
    <MapContainer
      center={center}
      zoom={ZOOM_LEVEL}
      ref={mapRef}
      className={classes.mapContainer}
    >
      <FeatureGroup>
        <EditControl
          position="topright"
          onCreated={onCreated}
          draw={{
            rectangle: true,
            circle: false,
            circlemarker: false,
            marker: false,
            polyline: true,
          }}
        />
      </FeatureGroup>
      <TileLayer
        url={osm.maptiler.url}
        attribution={osm.maptiler.attribution}
      />
    </MapContainer>
  );
}

export default MapArea;
