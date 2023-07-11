import BarChart from "./BarChart";
import RecentOrders from "./RecentOrders";
import TopCards from "./TopCards";

const Dashboard = () => {
  return (
    <div className="lg:mx-5">
      <TopCards />
      <div className="p-4 grid lg:grid-cols-3 gap-5  ">
        <BarChart />
        <RecentOrders />
      </div>
    </div>
  );
};

export default Dashboard;
