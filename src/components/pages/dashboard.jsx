import React from "react";
import Info from "../ui/info";
import BarChart from "../charts/barchart";
import PieChart from "../charts/piechart";
import { Title } from "react-admin";
function Dashboard() {
  return (
    <div className="mt-7  mx-7  ">
      <Title title="DoNation Admin" />
      <div className="grid gap-5 grid-cols-2 md:grid-cols-2  lg:grid-cols-4">
        <Info arg="user" title="Users" />
        <Info arg="orgnization" title="Organizations" />
        <Info arg="volunteer" title="Volunteers" />
        <Info arg="order" title="Donations" />
      </div>
      <div className="flex  gap-7 my-7 flex-col xl:flex-row">
        <BarChart />
        <PieChart />
      </div>
    </div>
  );
}

export default Dashboard;
