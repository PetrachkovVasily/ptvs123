import { useEffect, useState } from "react";

import classes from "./App.module.css";
import { Polygon } from "./types/areaTypes";
import Modal from "./components/Modal/Modal";
import MapArea from "./components/MapArea/MapArea";
import { LAT, ONE, ZERO } from "./constants/notes";
import ListElement from "./components/ListElement/ListElement";

function App() {
  const [coordinates, setCoordinates] = useState<Polygon>([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(!visible);
  }, [coordinates]);

  return (
    <main className={classes.mainContent}>
      <MapArea setCoordinates={setCoordinates} />
      <Modal visible={visible} setVisible={setVisible}>
        <ul className={classes.list}>
          {coordinates?.map((element, index) => {
            let dot = { lat: ZERO, lng: ZERO };
            for (let value of Object.entries(element)) {
              if (value[ZERO] == LAT) {
                dot.lat = value[ONE];
              } else {
                dot.lng = value[ONE];
              }
            }

            return (
              <ListElement
                key={dot.lat * dot.lng * index}
                x={dot.lat}
                y={dot.lng}
              />
            );
          })}
        </ul>
      </Modal>
    </main>
  );
}

export default App;
