import React from "react";
// components
import CardTable from "components/Cards/CardTable.js";

const Earthquake = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable tableType="Earthquake" />
        </div>
      </div>
    </>
  );
};

export default Earthquake;
