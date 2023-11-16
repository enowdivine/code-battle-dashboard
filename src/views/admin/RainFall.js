import React, { useEffect } from "react";
import CardTable from "components/rainfall/rainfall";
import { floodData } from "redux/reducers/floodReducer";
import { useDispatch, useSelector } from "react-redux";

const tableHeader = ["Data", "Threshold", "Date Recorded"];

const RainFall = () => {
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.flood.data);

  const getfloodData = () => {
    dispatch(floodData())
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getfloodData();
  }, []);
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable
            tableType="Sea Level"
            tableHeader={tableHeader}
            data={allData}
          />
        </div>
      </div>
    </>
  );
};

export default RainFall;
