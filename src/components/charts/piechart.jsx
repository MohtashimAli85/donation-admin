import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useGetList } from "react-admin";
import Loader from "../ui/loader";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function PieChart() {
  const { data, total, isLoading, error } = useGetList("order");
  if (isLoading) {
    return (
      <div className="bg-white basis-[60%]  h-[60vh] grid place-items-center mt-4 round-md border border-transparent shadow">
        <Loader />
      </div>
    );
  }
  if (error) {
    return <p>ERROR</p>;
  }
  const status = data.map((e) => {
    return e.status;
  });
  const defaultData = [
    { status: "Accepted", value: 0 },
    { status: "Request", value: 0 },
    { status: "Done", value: 0 },
  ];
  status.forEach((e) => {
    defaultData.forEach((i) => {
      if (i.status.toUpperCase() === e.toUpperCase()) {
        i.value += 1;
      }
    });
  });
  const values = defaultData.map((e) => {
    return e.value;
  });
  const chartData = {
    labels: ["Accepted", "Request", "Done"],
    datasets: [
      {
        data: values,
        backgroundColor: [
          "rgb(235, 111, 113)",
          "rgb(255,232,157)",
          "rgb(242, 165, 152)",
        ],
        hoverBackgroundColor: ["#a32a14", "#ffcf33", "#d71d20"],
        hoverOffset: 20,
      },
    ],
  };
  return (
    <div className="bg-white mt-4 xl:mt-0 rounded-lg border border-transparent shadow basis-[30%]   flex items-center justify-center   ">
      <div className="relative h-[50vh] xl:h-[60vh] xl:w-[20vw]  m-7">
        <Doughnut
          data={chartData}
          options={{
            maintainAspectRatio: false,
            // responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Donations",
                position: "bottom",
                font: {
                  size: 16,
                },
              },
              legend: {
                labels: {
                  // This more specific font property overrides the global property
                  font: {
                    size: 18,
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default PieChart;
