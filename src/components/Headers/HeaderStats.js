import React, { useEffect } from "react";
import { users } from "redux/reducers/usersReducer";
import { floodData } from "redux/reducers/floodReducer";
import { useDispatch, useSelector } from "react-redux";
import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users.users);
  const allData = useSelector((state) => state.flood.data);

  const getUsers = () => {
    dispatch(users())
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  };
  const getfloodData = () => {
    dispatch(floodData())
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getUsers();
    getfloodData();
  }, []);
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="ALL USERS"
                  statTitle={`${
                    allUsers && allUsers.length > 0
                      ? `${allUsers.length}`
                      : "--"
                  }`}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="All Time"
                  statIconName="fas fa-users"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SEA LEVEL DATA"
                  statTitle={`${
                    allData && allData.length > 0 ? `${allData.length}` : "--"
                  }`}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="All Time"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SALES"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
