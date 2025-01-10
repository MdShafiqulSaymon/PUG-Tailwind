// chart-init.js
document.addEventListener('DOMContentLoaded', function() {
  const state = [
    {
      name: "Series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options = {
    chart: {
      type: "area",
      animations: {
        easing: "linear",
        speed: 300,
      },
      sparkline: {
        enabled: false,
      },
      brush: {
        enabled: false,
      },
      id: "basic-bar",
      foreColor: "#687076", // Default text color
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      labels: {
        style: {
          colors: "#687076"  // Axis label color
        },
      },
      axisBorder: {
        color: "#E4E4E7"  // Axis border color
      },
      axisTicks: {
        color: "#E4E4E7"  // Axis ticks color
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#687076"  // Y-axis label color
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    grid: {
      show: true,
      borderColor: "#E4E4E7",  // Grid line color
      strokeDashArray: 0,
      position: "back",
    },
    stroke: {
      curve: "smooth",
      fill: {
        colors: ["#FF0000"]  // Line color
      },
    },
    markers: false,
    colors: ["#0070F0", "#7828C8"],  // Series colors
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100]
      }
    }
  };

  const chart = new ApexCharts(document.querySelector("#chart"), {
    ...options,
    series: state
  });

  chart.render();
});