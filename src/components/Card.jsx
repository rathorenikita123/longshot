/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { data, keywordDifficulty } from "./Data";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaFlagUsa } from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend);

const Card = () => {
  const [selectedRow, setSelectedRow] = useState(data.raw_broadmatch_data[0]);
  const rating = selectedRow[7];
  const color = keywordDifficulty(selectedRow[7]).color;
  const data2 = {
    datasets: [
      {
        data: [rating, 100 - rating],
        backgroundColor: [color, "#DAD8D0"],
        hoverBackgroundColor: ["#FFFF00", "#000000"],
      },
    ],
  };

  return (
    <div className="card w-[29rem] bg-base-100 shadow-xl">
      <div className="card-body p-4">
        <div className="flex flex-col items-start justify-between">
          <p className="mb-2">Volume</p>
          <h2 className="card-title text-2xl">
            {selectedRow[1]} <FaFlagUsa className="ml-2" />
          </h2>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col items-start">
          <p className="mb-4">Keyword Difficulty</p>
          <div className="flex items-center justify-between w-36 mb-4">
            <div>
              <h2 className="card-title text-2xl">{selectedRow[7]}%</h2>
              <p className=" mt-2">
                {" "}
                {keywordDifficulty(selectedRow[7]).rating}
              </p>
            </div>
            <div>
              <Doughnut data={data2} height={70} width={70} />
            </div>
          </div>
          <p className="leading-relaxed mt-4 text-start">
            {keywordDifficulty(selectedRow[7]).text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
