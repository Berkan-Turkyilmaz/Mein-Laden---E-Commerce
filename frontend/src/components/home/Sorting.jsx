import React from "react";

function Sorting({ setSort }) {
  return (
    <div className="bg-[#CF051D] flex justify-end pt-12">
      <div className=" w-1/12 mr-6   flex   ">
        <select
          onChange={(e) => setSort(e.target.value)}
          className="w-full h-10 rounded-lg p-1"
        >
          <option disabled value="">
            SORT BY
          </option>
          <option value="inc">INCREASE</option>
          <option value="dec">DECREASE</option>
        </select>
      </div>
    </div>
  );
}

export default Sorting;
