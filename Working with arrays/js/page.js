//charts
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById("deptSales").getContext("2d");
let yearlyLabel = document.getElementById('yearlyTotal');

let monthlySales = Array.of(800,9000,3000,5000);
let monthlyLabels = Array.of('Oct', 'Nov', 'Dec');

let deptSales = Array.of(14, 10, 5);
let deptLabels = Array.of('Hiking', 'Running', 'Hunting');

let yearlyTotal = 0;

function addYearlyTotal(x) {
    yearlyTotal = x + yearlyTotal;
}

monthlySales.forEach(addYearlyTotal)

let octNums = Array.of(7000, 1000, 9000);
let novNums = Array.of(1500, 2000, 6000);
let decNums = Array.of(5000, 1000, 7000);

// let total = Array.of(addYearlyTotal(...octNums), addYearlyTotal(...novNums), addYearlyTotal(...decNums));


yearlyLabel.innerHTML = "$" + yearlyTotal;

function findOver1000() {
  let firstThousand = monthlySales.findIndex((element) => element > 1000);
  alert(firstThousand);
}

function resetNum() {
    monthlySales.fill(0);
    monthlySalesChart.update();
}

// Bar
var monthlySalesChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: monthlyLabels,
    datasets: [
      {
        label: "# of Sales",
        data: monthlySales,
        backgroundColor: [
          "rgba(238, 184, 104, 1)",
          "rgba(75, 166, 223, 1)",
          "rgba(239, 118, 122, 1)",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// Pie
var deptSalesChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: deptLabels,
        datasets: [{
            label: '# of Sales',
            data: deptSales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        
    }
})