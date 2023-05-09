import React, { useState } from "react";
import { data, keywordDifficulty, intentMap } from "./Data";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const [state, setstate] = useState("Broadmatch");

  var v1 = data.raw_broadmatch_data;
  var v2 = data.raw_question_data;
  var v3 = data.raw_related_data;

  const stateData = [
    {
      name: "Broadmatch",
      data: v1,
    },
    {
      name: "Questions",
      data: v2,
    },
    {
      name: "Related",
      data: v3,
    },
  ];

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("./dragdrop");
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex rounded-lg p-2 bg-[#BCB9AF]">
          <button onClick={() => setstate("Broadmatch")}>Broad Match</button>
          <p className="divider divider-horizontal"></p>
          <button onClick={() => setstate("Questions")}>Questions</button>
          <p className="divider divider-horizontal"></p>
          <button onClick={() => setstate("Related")}>Related</button>
        </div>
        <div>
          <button className="btn btn-primary" onClick={handleClick}>
            Add to list
          </button>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Keyword</th>
              <th>Intent</th>
              <th>Volume</th>
              <th>KD%</th>
              <th>CPC (USD)</th>
              <th>Com.</th>
              <th>Results</th>
            </tr>
          </thead>
          <tbody>
            {stateData.map((item1, i) => {
              return (
                <>
                  {state === item1.name &&
                    item1.data.map((item, i) => {
                      const color = keywordDifficulty(item[7]).color;
                      const typeoofIntent = intentMap[item[2]].type[0];
                      const backgroundColor = intentMap[item[2]].color.bg;
                      const textColor = intentMap[item[2]].color.text;
                      return (
                        <tr>
                          <th>
                            <label>
                              <input type="checkbox" className="checkbox" />
                            </label>
                          </th>
                          <td>{item[0]}</td>
                          <td>
                            <p
                              className="rounded-lg w-5 h-6 text-center"
                              style={{
                                backgroundColor: backgroundColor,
                                color: textColor,
                              }}
                            >
                              {typeoofIntent}
                            </p>
                          </td>
                          <td>{item[1]}</td>
                          <td className="flex items-center">
                            {item[7]}
                            <p
                              className="rounded-full w-4 h-4 ml-2"
                              style={{ backgroundColor: color }}
                            ></p>
                          </td>
                          <td>{item[4]}</td>
                          <td>{item[3]}</td>
                          <td>{item[5] / 1000000}M</td>
                        </tr>
                      );
                    })}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
