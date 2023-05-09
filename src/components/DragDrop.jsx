import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";

const DragDrop = () => {
  const [list, setList] = React.useState([
    {
      id: 1,
      name: "Shopping in Barcelona",
    },
    {
      id: 2,
      name: "Famous Shopping Streets",
    },
    {
      id: 3,
      name: "Shopping Malls",
    },
    {
      id: 4,
      name: "Markets",
    },
    {
      id: 5,
      name: "Opening Times",
    },
    {
      id: 6,
      name: "Sales Tax Refund",
    },
  ]);
  const [newList, setNewList] = useState("");

  const handleDragStart = (e, position) => {
    e.dataTransfer.setData("index", position);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, position) => {
    const draggingIndex = e.dataTransfer.getData("index");
    const newLists = [...list];
    const draggingItem = newLists[draggingIndex];
    newLists.splice(draggingIndex, 1);
    newLists.splice(position, 0, draggingItem);

    setList(newLists);
  };

  const handleNewListChange = (e) => {
    setNewList(e.target.value);
  };

  const handleNewListSubmit = (e) => {
    e.preventDefault();
    const newId = list.length + 1;
    const newLists = [...list, { id: newId, name: newList }];
    setList(newLists);
    setNewList("");
  };

  return (
    <div className="drag-n-drop flex justify-center mt-8">
      <div className="card bg-base-100 shadow-xl w-1/2">
        <div className="flex flex-col items-start p-4">
          <div>
            <h2 className="font-medium text-xl text-start">Edit Outlines</h2>
            <p className="text-gray-400 text-start py-4">Outlines</p>
          </div>
          <div className="drag-n-drop-container w-full ">
            {list.map((item, index) => (
              <div
                className="drag-n-drop-item m-4 p-3 text-start bg-[#F3F2EE] rounded-md "
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, index)}
                style={{ backgroundColor: item.completed ? "#c8c8c8" : "" }}
              >
                <p className="flex items-center justify-between">
                  {item.name}
                  <CgMenuGridO />
                </p>
              </div>
            ))}
          </div>
          <div className="drag-n-drop-form  ">
            <form onSubmit={handleNewListSubmit} className="flex flex-col">
              <input
                type="text"
                placeholder="Add new list"
                value={newList}
                onChange={handleNewListChange}
                className="input input-bordered w-48 mb-4"
              />
              <button
                className="btn btn-outline btn-primary w-48 text-start"
                type="submit"
              >
                + Add Outline
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragDrop;
