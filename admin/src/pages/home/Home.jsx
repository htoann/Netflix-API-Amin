import Chart from "../../components/chart/Chart";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { useEffect, useMemo, useState } from "react";
import { axiosInstance } from "../../utils/axiosInstance";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const getUserStats = await axiosInstance.get("/users/stats");
        const statsList = getUserStats.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      {userStats ? (
        <>
          <Chart
            data={userStats}
            title="User Analytics"
            grid
            dataKey="New User"
          />
          <div className="homeWidgets">
            <WidgetSm />
            <img
              width="700px"
              src="https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/netfilix-la-gi-h1.jpg"
              alt=""
            />
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
