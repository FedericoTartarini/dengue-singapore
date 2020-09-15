import React from "react";

import { Line } from "react-chartjs-2";

function LineChartWeeklyDengue() {
  const { innerWidth: width } = window;

  let chartHeight, yearToDisplay;

  if (width > 500) {
    chartHeight = 500;
    yearToDisplay = 2014;
  } else {
    chartHeight = 400;
    yearToDisplay = 2016;
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

  Object.keys(weekly_disease).forEach((year) => {
    let hideLine = false;

    if (parseInt(year) < yearToDisplay) {
      hideLine = true;
    }

    data.datasets.push({
      label: year,
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderColor: weekly_disease[year].color,
      borderWidth: 1,
      hoverBackgroundColor: weekly_disease[year].color,
      hoverBorderColor: weekly_disease[year].color,
      data: weekly_disease[year].cases,
      yAxisID: "y1",
      hidden: hideLine,
    });
  });

  return (
    <div>
      <div className="container mx-auto flex px-5 flex-col">
        <p className="mt-6">
          The line chart below shows the weekly number of dengue fever cases
          recorded in Singapore. A total of{" "}
          {weekly_disease["2020"].cases.reduce((a, b) => a + b, 0)} cases have
          been recorded in the first {weekly_disease["2020"].cases.length} weeks
          of 2020.
        </p>
      </div>
      <div className="container mx-auto mt-2 flex flex-col">
        <Line
          data={data}
          height={chartHeight}
          width={width}
          options={{
            maintainAspectRatio: false,
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
                    labelString: "Week number",
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
                    labelString: "Dengue weekly fever cases",
                  },
                },
              ],
            },
          }}
        />
      </div>
      <div className="container mx-auto flex px-5 flex-col">
        <p className="mt-6">
          The data until May 2020 has been downloaded from data.gov.sg while the
          latest data are downloaded weekly from the nea.gov.sg website.
        </p>
      </div>
    </div>
  );
}

export default LineChartWeeklyDengue;
