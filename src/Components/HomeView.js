import React from "react";
import { Map, Polygon, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import TableCases from "./TableCases";
import LineChartWeeklyDengue from "./LineChartWeeklyDengue";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Dengue Singapore</title>
        <meta
          name="description"
          content="This pages shows the dengue's clusters in singapore and the weekly cumulative cases."
        />
      </Helmet>
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
                Number of cases {cases[value].cases}.<br /> NEA alert level{" "}
                {/*{cases[value].cases < 10 ? (*/}
                {/*  <span className="text-base text-yellow-600">Yellow</span>*/}
                {/*) : (*/}
                {/*  <span className="text-base text-red-600">Red</span>*/}
                {/*)}*/}
              </div>
            </Popup>
          </Polygon>
        ))}
      </Map>{" "}
      <div className="container mx-auto flex flex-col px-5 text-center text-gray-900">
        <p className="mt-2">
          Click on each cluster in the map above to learn more about the number
          of cases recorded since the start of that cluster and to know the NEA
          alert level.
        </p>
        <p className="mt-6">
          This website uses data provided by the{" "}
          <a href="https://data.gov.sg/dataset/dengue-clusters">
            Singaporean government.
          </a>{" "}
          Data is updated on a daly basis at 1 am.
        </p>
        <p className="mt-2">
          A dengue cluster is a locality where two or more cases have onset
          within 14 days and are located within 150m of each other. While
          National Environmental Agency (NEA) categorizes clusters in three
          alert levels: red (high risk with more than 10 cases); yellow (high
          risk with less than 10 cases), and; green (no new cases but under
          surveillance for 21 days). More information about the NEA alert level
          can be found by clicking on the relative cluster.
        </p>
      </div>
      <LineChartWeeklyDengue />
      <div className="container mx-auto flex flex-col px-5 py-4 text-center text-gray-900">
        <p className="mt-0">
          The NEA suggests the following protective actions to reduce dengue
          "Spray, Apply and Wear". Spray insecticide in dark corners, apply
          insect repellent regularly and wear long-sleeve top and pants.
        </p>
        <p className="mt-2">
          People should also ensure that no stagnant water is present in their
          homes and immediate surrounding and should remove any stagnant water
          if present.
        </p>
      </div>
    </div>
  );
}

export default HomeView;
