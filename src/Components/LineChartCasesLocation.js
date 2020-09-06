import React from "react";
import { Line } from "react-chartjs-2";

function LineChartCasesLocation({ match }) {
  const { innerWidth: width } = window;

  let chartHeight;

  if (width > 500) {
    chartHeight = 400;
  } else {
    chartHeight = 300;
  }

  let weekly_disease = require("../Data/timeline_cases_location.json");

  const location = match.params.name;

  const data = {
    labels: [],
    datasets: [
      {
        label: location,
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "#dc2f02",
        borderWidth: 2,
        hoverBackgroundColor: "#dc2f02",
        hoverBorderColor: "#dc2f02",
        data: [],
        yAxisID: "y1",
      },
    ],
  };

  Object.keys(weekly_disease[location]).forEach((day) => {
    data.labels.push(day);

    data.datasets[0].data.push(weekly_disease[location][day]);
  });

  return (
    <div>
      <div className="container mx-auto p-2 flex flex-col text-center">
        <h1 className="title-font text-2xl my-4 font-medium text-gray-900">
          Cluster name: {location.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}
        </h1>
        <p className="mb-8 leading-relaxed">
          The line chart below shows the cumulative number of cases in this
          cluster.
        </p>
      </div>
      <div className="container mx-auto mt-2 flex flex-col">
        <Line
          data={data}
          height={chartHeight}
          width={width}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: false,
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false,
                    drawOnChartArea: false,
                    drawTicks: true,
                  },
                  ticks: {
                    display: true,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Day",
                  },
                },
              ],
              yAxes: [
                {
                  id: "y1",
                  type: "linear",
                  position: "left",
                  gridLines: { color: "rgba(0, 0, 0, 0.05)" },
                  ticks: {
                    beginAtZero: false,
                    callback: function (value) {
                      if (value % 1 === 0) {
                        return value;
                      }
                    },
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Dengue fever cases",
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
}

export default LineChartCasesLocation;
