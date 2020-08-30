import React from "react";
import { Map, Polygon, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import TableCases from "./TableCases";
import LineChartWeeklyDengue from "./LineChartWeeklyDengue";

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
        scrollWheelZoom={false}
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
      </Map>{" "}
      <p className="mt-2 text-center text-gray-900">
        Click on each cluster to learn more about the number of cases since
        start of that cluster.
      </p>
      <div className="container mx-auto flex flex-col px-5 py-8 text-center text-gray-900">
        <p>
          This website uses data provided by the{" "}
          <a href="https://data.gov.sg/dataset/dengue-clusters">
            Singaporean government.
          </a>{" "}
          Data is updated on a daly basis at 1 am.{" "}
        </p>
        <p className="mt-2">
          A dengue cluster is a locality where two or more cases have onset
          within 14 days and are located within 150m of each other. While NEA
          categorizes clusters in three alert levels: red (high risk with more
          than 10 cases); yellow (high risk with less than 10 cases), and; green
          (no new cases but under surveillance for 21 days). This website uses
          another color legend to better distinguish between dengue's clusters.
          See legend over the map for more information.
        </p>
      </div>
      <LineChartWeeklyDengue />
    </div>
  );
}

export default HomeView;
