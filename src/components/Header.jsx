/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { FaFlagUsa } from "react-icons/fa";
import { data } from "./Data";

const Header = () => {
  const [selectedRow, setSelectedRow] = useState(data.raw_broadmatch_data[0]);

  return (
    <div className="flex flex-col justify-between h-24">
      <div className="flex items-center ">
        <p className="text-gray-500">Keyword Explorer</p>
        <AiOutlineRight className="mx-2" />
        <p className="text-gray-700">Keyword Overview</p>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <p className="font-medium text-2xl mr-2">Keyword:</p>
          <p className="text-gray-500 font-medium text-2xl">{selectedRow[0]}</p>
        </div>
        <div className="flex">
          <p className="mr-2">Database:</p>
          <p className="flex items-center">
            United States
            <FaFlagUsa className="ml-2" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
