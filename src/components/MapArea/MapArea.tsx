import { useRef } from "react";

import "leaflet/dist/leaflet.css";
import "leaflet-area-select";
import { FeatureGroup, MapContainer, TileLayer } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

import classes from "./MapArea.module.css";
import { MapAreaProps } from "./MapAreaProps";
import { CENTER, OSM, POSITION, ZERO, ZOOM_LEVEL } from "../../constants/notes";

import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

function MapArea({ setCoordinates }: MapAreaProps) {
  const center = CENTER;
  const mapRef = useRef(null);

  function onCreated(e: any) {
    if (e.layer.getLatLngs()[ZERO][ZERO]) {
      setCoordinates(e.layer.getLatLngs()[ZERO]);
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
          position={POSITION}
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
        url={OSM.maptiler.url}
        attribution={OSM.maptiler.attribution}
      />
    </MapContainer>
  );
}

export default MapArea;
