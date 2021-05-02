const chartFn = async () => {
  const jsonData = await fetch('../data/price_historicals.json');
  const records = await jsonData.json();
  const topRecords = records.slice(0, 10);
  const chartData = topRecords.map(item => {
    item.Date = item.Date.slice(12, 16);
    return item;
  });

  const context = document.getElementById("myChart");
  new Chart(context, {
    type: "line",
    data: {
      labels: chartData.map(({ Date }) => Date),
      datasets: [
        {
          label: "Open",
          backgroundColor: "white",
          borderColor: "lightgreen",
          data: chartData.map(({ Open }) => Open),
          fill: false,
        },
        {
          label: "High",
          backgroundColor: "white",
          borderColor: "yellowgreen",
          data: chartData.map(({ High }) => High),
          fill: false,
        },
        {
          label: "Low",
          backgroundColor: "white",
          borderColor: "orange",
          data: chartData.map(({ Low }) => Low),
          fill: false,
        },
        {
          label: "Close",
          backgroundColor: "white",
          borderColor: "cyan",
          data: chartData.map(({ Close }) => Close),
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
}

chartFn()
