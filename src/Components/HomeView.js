import React from "react";
import { Map, Polygon, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import TableCases from "./TableCases";

function HomeView() {
  const position = [1.35, 103.825];

  const { innerWidth: width, innerHeight: height } = window;

  let zoom;
  if (width > 500) {
    zoom = 12;
  } else {
    zoom = 11;
  }

  let cases = require("../Data/dengue_data.json");

  return (
    <div>
      <TableCases />
      <Map
        className="map"
        center={position}
        zoom={zoom}
        style={{ height: height - 92 - 28 - 35 - 92, width: "100%" }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {Object.keys(cases).map((value) => (
          <Polygon
            key={value}
            positions={cases[value].coordinates}
            color={cases[value].color}
          >
            <Popup>
              <div className="text-center">
                <span className="text-base capitalize">{value}</span> <br />
                Number of cases {cases[value].cases}
              </div>
            </Popup>
          </Polygon>
        ))}
      </Map>
      <p className="mt-2 text-xs text-center text-gray-900">
        Click on the cluster to learn more about the number of people that were
        infected.
      </p>
    </div>
  );
}

export default HomeView;
