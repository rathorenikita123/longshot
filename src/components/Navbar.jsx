/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaBlogger,
  FaClone,
  FaHeart,
  FaCircle,
  FaFireAlt,
  FaBuffer,
  FaRainbow,
  FaUserCircle,
} from "react-icons/fa";
import { BiCollapseHorizontal } from "react-icons/bi";
import { RiRoadMapFill } from "react-icons/ri";
import { BsFillCartFill } from "react-icons/bs";
import Header from "./Header";
import Card from "./Card";
import Card2 from "./Card2";
import Table from "./Table";

const Navbar = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-slate-100 p-6">
        <Header />
        <div className="divider"></div>
        <div className="flex justify-evenly">
          <Card />
          <Card2 />
        </div>
        <div className="mt-4">
          <Table />
        </div>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="flex flex-col justify-between">
          <div>
            <ul className="menu  w-80 bg-base-100 text-base-content">
              <li>
                <img src="/images/logo.png" alt="logo" className="" />
              </li>
              <li className="bg-gray-300">
                <a href="#" className="flex flex-col items-start text-gray-500">
                  Project
                  <br />
                  <span className="text-black mt-[-0.8rem]">
                    My First Project
                  </span>
                </a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <div className="divider"></div>
              <li>
                <a>
                  <FaBlogger />
                  Blog
                </a>
              </li>
              <li>
                <a>
                  <FaClone />
                  Templates
                </a>

                <p className="ml-4">
                  {" "}
                  <FaHeart />
                  Favorites
                </p>
                <p className="ml-4">
                  <FaCircle />
                  Custom Template
                </p>
              </li>
              <li>
                <a>
                  <FaBuffer />
                  Intergration
                </a>
                <p className="ml-4">
                  {" "}
                  <FaFireAlt />
                  Semrush
                </p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="menu  w-80 text-base-content bg-[#D8EEF4]">
              <li className="flex flex-row ">
                <p>
                  <FaUserCircle size={40} />
                </p>
                <p className="flex flex-col items-start mb-0">
                  Kritikalpa.saha
                  <span className="mt-[-0.8rem] text-gray-500">
                    Credit Used 313.2
                  </span>
                </p>
              </li>
              <li>
                <button className="btn bg-[#50C878] border-[#50C878] text-white">
                  <BsFillCartFill size={25} />
                  Change Plan{" "}
                </button>
              </li>
              <li>
                <a>
                  <RiRoadMapFill />
                  Product Roadmap
                </a>
              </li>
              <li>
                <a>
                  <FaRainbow />
                  What's New?
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="menu  w-80 bg-base-100 text-base-content">
              <li>
                <a>
                  <BiCollapseHorizontal />
                  Collapse
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
