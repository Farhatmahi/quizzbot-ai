import BarChart from "./BarChart";
import RecentOrders from "./RecentOrders";
import TopCards from "./TopCards";

const Dashboard = () => {
  return (
    <div>
      <TopCards />
      <div className="p-4">
        <BarChart />
        <RecentOrders />
      </div>
    </div>
  );
};

export default Dashboard;
