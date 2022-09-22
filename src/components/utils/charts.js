import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LineElement,
  Title,
  RadialLinearScale,
  Filler,
  BarElement
} from "chart.js";
import { Bar, Bubble, Line, Radar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  LinearScale,
  PointElement,
  Tooltip,
  BarElement,
  Legend,
  CategoryScale,
  LineElement,
  Title,
  RadialLinearScale,
  Filler
);

export const options = {
  plugins: {
    legend: {
      display: false,
    }
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: "Red dataset",
      data: Array.from({ length: 50 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Blue dataset",
      data: Array.from({ length: 50 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const BubbleChart = () => {
  return <Bubble options={options} data={data} />;
};
export const lineOptions = {
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  },
  responsive: true,
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const lineData = {
  labels,
  datasets: [
    {
      label: "",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};


export const linesOptions = {
  plugins: {
    legend: {
      display: false
    }
  },
  responsive: true,
};
export const linesData = {
  labels,
  datasets: [
    {
      label: "",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const LineChart = () => {
  return <Line options={lineOptions} data={lineData} />;
};

export const LinesChart = () => {
  return <Line options={linesOptions} data={linesData} />;
};

export const radarOptions = {
  plugins: {
    legend: {
      display: false
    }
  }
}

export const radarData = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

export const RadarChart = () => {
  return <Radar data={radarData} options={radarOptions}/>
}

export const areaOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: false
    },
    y: {
      ticks: {
        display: false
      }
    }
  }
    
};

export const areaLabels = {
  '1d': ['1d', '2d','3d','4d','5d','6d','7d'],
  '7d': ['7d', '14d','21d','28d','35d','42d','49d'],
  '1m': ['1m', '2m','3m','4m','5m','6m','7m']
}



export const AreaChart = ({filter}) => {

  const areaData = {
    labels: areaLabels[filter],
    datasets: [
      {
        fill: true,
        label: 'All Users Grow up',
        data: areaLabels[filter].map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Line data={areaData} options={areaOptions}/>

  )
}

export const barOptions = {
  indexAxis: 'y',
  plugins: {
    legend: {
      display: false
    }
  },
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};


export const barData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -100, max: 1000 })),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -100, max: 100 })),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',
    },
    
  ],
};

export const BarChart = () => {
  return (
    <Bar data={barData} options={barOptions}/>
  )
}