$.getJSON("https://price.free.beeceptor.com/my/api/path", function (json) {}).done(function (json) {
  var data = json.slice(0, 10);
  data = data.map((item) => {
    item.Date = item.Date.slice(12, 16);
    return item;
  });
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [...formatLables(data)],
      datasets: [
        {
          label: "Open",
          backgroundColor: "white",
          borderColor: "lightgreen",
          data: [...formatOpeningValues(data)],
          fill: false,
        },
        {
          label: "High",
          backgroundColor: "white",
          borderColor: "yellowgreen",
          data: [...formatHighValues(data)],
          fill: false,
        },
        {
          label: "Low",
          backgroundColor: "white",
          borderColor: "orange",
          data: [...formatLowValues(data)],
          fill: false,
        },
        {
          label: "Close",
          backgroundColor: "white",
          borderColor: "cyan",
          data: [...formatClosingValues(data)],
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        x: {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Date",
          },
        },
        y: {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "High",
          },
        },
      },
    },
  });
});

function formatOpeningValues(chartData) {
  let formatedData = chartData.map(({ Open }) => Open);
  return formatedData;
}

function formatHighValues(chartData) {
  let formatedData = chartData.map(({ High }) => High);
  return formatedData;
}

function formatLowValues(chartData) {
  let formatedData = chartData.map(({ Low }) => Low);
  return formatedData;
}

function formatClosingValues(chartData) {
  let formatedData = chartData.map(({ Close }) => Close);
  return formatedData;
}

function formatLables(chartData) {
  let formatedData = chartData.map(({ Date }) => Date);
  return formatedData;
}
