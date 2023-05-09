/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { data, intentMap } from "./Data";

const Card2 = () => {
  const [selectedRow, setSelectedRow] = useState(data.raw_broadmatch_data[0]);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const intentInfo = intentMap[selectedRow[2]];
  const backgroundColor = intentInfo.color.bg;
  const textColor = intentInfo.color.text;

  return (
    <div className="flex flex-col justify-between">
      <div className="card w-[29rem] bg-base-100 shadow-xl">
        <div className="card-body p-4 text-start">
          <p className="">Intent</p>
          <button
            className=" bg-backgroundColor text-start rounded-full p-2 w-28"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ backgroundColor: backgroundColor, color: textColor }}
          >
            {intentInfo.type}
          </button>
          {isHovering && <p className="">{intentInfo["hover-text"]}</p>}
        </div>
      </div>
      <div className="card w-[29rem] bg-base-100 shadow-xl">
        <div className="card-body p-4 text-start">
          <p className="">Results</p>
          <h2 className="card-title text-2xl">{selectedRow[5] / 1000000}M</h2>
        </div>
      </div>
      <div className="card w-[29rem] bg-base-100 shadow-xl">
        <div className="flex">
          <div className="card-body flex-row justify-between p-4 text-start">
            <div>
              <p className="">CPC</p>
              <h2 className="card-title text-2xl">${selectedRow[4]}</h2>
            </div>
            <div className="">
              <p className="">Com.</p>
              <h2 className="card-title text-2xl">{selectedRow[3]}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
