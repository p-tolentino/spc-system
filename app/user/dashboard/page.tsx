import ControlChart from "@/components/charts/control-chart";
import SPCChart from "@/components/charts/spc-charts";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 gap-2 p-8 pt-0">
      <SPCChart />
      <ControlChart />
    </div>
  );
};

export default Dashboard;
