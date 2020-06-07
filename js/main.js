
$.getJSON( "../data/price_historicals.json", function( json ) {
    
}).done(function( json ) {
    var data = json.slice(0,10);
    data = data.map(item => {
        item.Date = item.Date.slice(12, 16);
        return item
    })
    var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [...formatLables(data)],
        datasets: [{
            label: 'High',
            backgroundColor: "green",
            borderColor: "orange",
            data: [
                ...formatValues(data)
            ],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            x: {
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                }
            },
            y: {
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'High'
                }
            }
        }
    }
});
});

function formatValues(chartData) {
    let formatedData = chartData.map(({ High }) => (High))
    return formatedData
}

function formatLables(chartData) {
    let formatedData = chartData.map(({ Date }) => (Date))
    return formatedData
}

