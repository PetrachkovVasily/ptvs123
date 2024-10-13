import { useEffect, useState } from "react";
import classes from "./App.module.css";
import MapArea from "./components/MapArea/MapArea";
import Modal from "./components/Modal/Modal";
import { Polygon } from "./types/areaTypes";

function App() {
  const [coordinates, setCoordinates] = useState<Polygon>([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(!visible);
    console.log(coordinates);
  }, [coordinates]);

  return (
    <main className={classes.mainContent}>
      <MapArea
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        setVisible={setVisible}
      />
      <Modal visible={visible} setVisible={setVisible}>
        <ul className={classes.list}>
          {coordinates?.map((element) => {
            let dot = { lat: 0, lng: 0 };
            for (let value of Object.entries(element)) {
              console.log(value);
              if (value[0] == "lat") {
                dot.lat = value[1];
              } else {
                dot.lng = value[1];
              }
            }

            return (
              <li>
                x: {dot.lat} y: {dot.lng}
              </li>
            );
          })}
        </ul>
      </Modal>
    </main>
  );
}

export default App;
