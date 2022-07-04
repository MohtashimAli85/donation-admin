import React from "react";
import { useGetList } from "react-admin";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import Loader from "../ui/loader";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const { data, total, isLoading, error } = useGetList("user");
  //   console.log(data);
  if (isLoading) {
    return (
      <div className="bg-white basis-[60%] grid place-items-center mt-4 round-md border border-transparent shadow">
        <Loader />
      </div>
    );
  }
  if (error) {
    return <p>ERROR</p>;
  }
  const bloodGroups = data.map((e) => {
    return e.bloodGroup;
  });
  console.log(bloodGroups);
  const options = {
    maintainAspectRatio: false,
    layout: {
      padding: 10,
    },
    responsive: true,
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Blood Chart",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      pointLabels: {
        display: false,
        font: {
          size: 24,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: true,
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          font: {
            size: 18,
          },
        },
      },
      y: {
        grid: {
          drawBorder: true,
          color: "rgba(0,0,0,0)",
        },
      },
    },
  };

  const labels = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const user = [
    { bloodGroup: "A+", value: 0 },
    { bloodGroup: "B+", value: 0 },
    { bloodGroup: "O-", value: 0 },
    { bloodGroup: "A-", value: 0 },
    { bloodGroup: "A-", value: 0 },
    { bloodGroup: "B-", value: 0 },
    { bloodGroup: "O+", value: 0 },
    { bloodGroup: "AB+", value: 0 },
    { bloodGroup: "AB-", value: 0 },
  ];
  bloodGroups.forEach((e) => {
    user.forEach((i) => {
      if (e === i.bloodGroup) {
        i.value += 1;
      }
    });
  });
  const chartData = {
    labels,
    datasets: [
      {
        label: "Users",
        data: labels.map((l) => {
          let value = 0;
          user.map((u) => {
            if (u.bloodGroup === l) value = u.value;
          });
          return value;
        }),
        backgroundColor: "rgba(29, 191, 115)",
        borderColor: "rgb(29, 191, 115)",
        borderWidth: 1,
        barPercentage: 0.5,
        barThickness: 50,
        maxBarThickness: 22,
        minBarLength: 2,
        borderRadius: 50,
        color: "#ff0000",
        // circular:true,
      },
    ],
  };
  return (
    <div className="bg-white mt-4 rounded-lg border border-transparent  shadow xl:basis-[70%] relative h-[50vh] xl:h-[70vh] xl:w-[40vw] xl:m-auto">
      <Bar options={options} data={chartData} />
    </div>
  );
}

export default BarChart;
