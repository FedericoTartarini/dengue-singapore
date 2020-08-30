import React from "react";

import { Line } from "react-chartjs-2";

function BarChartWeeklyDengue() {
  const { innerWidth: width } = window;

  let chartHeight;
  if (width > 500) {
    chartHeight = 250;
  } else {
    chartHeight = 350;
  }

  let weekly_disease = require("../Data/infectious_disease.json");

  const data = {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "50",
      "51",
      "52",
    ],
    datasets: [],
  };

  Object.keys(weekly_disease).map((year) => {
    data.datasets.push({
      label: year,
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderColor: weekly_disease[year].color,
      borderWidth: 1,
      hoverBackgroundColor: weekly_disease[year].color,
      hoverBorderColor: weekly_disease[year].color,
      data: weekly_disease[year].cases,
      yAxisID: "y1",
    });
  });

  return (
    <Line
      data={data}
      height={50}
      width={"100%"}
      options={{
        // maintainAspectRatio: false,
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
            },
          ],
          yAxes: [
            {
              id: "y1",
              type: "linear",
              position: "left",
              gridLines: { color: "rgba(0, 0, 0, 0.05)" },
              ticks: {
                beginAtZero: true,
              },
              scaleLabel: {
                display: true,
                labelString: "Dengue Fever Cases",
              },
            },
          ],
        },
      }}
    />
  );
}

export default BarChartWeeklyDengue;
