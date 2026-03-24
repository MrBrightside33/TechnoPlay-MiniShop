import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon, BellIcon } from "@heroicons/react/24/solid";
import Sidebar from "./Sidebar";
import { LogOutIcon } from "lucide-react";
import SharkX from "../assets/shark.png";
import HeartLogo from "../assets/heart2.png";
import Set from "../assets/set.png";
import { Plus } from "lucide-react";
import asusmouse from "../assets/asusmouse.png";
import icekeyboard from "../assets/icekeyboard.png";
import odysseymonitor from "../assets/odysseymonitor.png";
import graphicscard from "../assets/graphicscard.png";
import nvidia from "../assets/nvidia.png";


const products = [
  {
    name: "ASUS ROG Puggio",
    price: "₱4,500.00",
    image: asusmouse,
  },
  {
    name: "Cyberboard Glacier",
    price: "₱20,000.00",
    image: icekeyboard,
  },
  {
    name: "Odyssey G9 DQHD Monitor",
    price: "₱54,119.00",
    image: odysseymonitor,
  },
  {
    name: "NVIDIA GeForce GTX 1080 Ti",
    price: "₱30,000.00",
    image: graphicscard,
  },
];


const Homepage = () => {

    const navigate = useNavigate();
  return (
    <>
      <div className="flex min-h-screen bg-[#F6FFF7]">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header Row */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold ml-3">Featured Items</p>
              <p className="font-bold ml-3">From the top brand</p>
            </div>

            {/* Search + Icons */}
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-white px-3 py-2 rounded-full border shadow-sm w-[300px]">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Product"
                  className="flex-1 px-2 outline-none text-sm"
                />
                <FunnelIcon className="w-5 h-5 text-green-500" />
              </div>

              <button className="p-2 bg-green-400 rounded-md">
                <EnvelopeIcon className="w-5 h-5 text-black" />
              </button>
              <button className="p-2 bg-green-400 rounded-md">
                <BellIcon className="w-5 h-5 text-black" />
              </button>
              <button className="p-2 bg-green-400 rounded-md"
                onClick={() => {
              navigate('/login');
              localStorage.removeItem("email");
            }}>
                <LogOutIcon className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>

          {/* BANNERS ROW */}
          <div className="flex items-align gap-12 mt-6 px-15">
            {/* LEFT BANNER */}
            <div className="flex rounded-xl p-5 shadow-[6px_15px_30px_#39FF00] bg-white w-[600px] h-[230px]">
              <img src={SharkX} alt="" className="w-40 h-48 ml-10" />

              <div className="flex flex-col justify-between w-full ml-15">
                <div>
                  <p className="text-xl font-extrabold">Shark X by CoolerMaster</p>

                  <p className="text-sm font-bold text-gray-700 leading-5">
                    Intel Core i7-4100F 2.1 GHz 2D<br />
                    B760i DDR5 WIFI<br />
                    GeForce RTX 4070 Ti Super 16G<br />
                    64 GB DDR5 6000MHz<br />
                    2TB M.2 PCIe 4.0 NVMe
                  </p>

                  <p className="text-xl font-bold text-[#07FFD2]">
                    ₱300,000.00
                  </p>
                </div>

                <button className="border-2 border-[#066969] p-2 rounded-lg hover:bg-green-100 transition w-fit">
                  <img src={HeartLogo} alt="" className="w-6 h-5" />
                </button>
              </div>
            </div>

            {/* RIGHT BANNER */}
           
<div className="relative rounded-3xl shadow-xl w-[340px] h-[170px] overflow-hidden">
  {/* Background image */}
  <img
    src={Set}
    alt=""
    className="w-full h-full object-cover"
  />

  {/* Text content */}
  <p className="absolute top-4 left-4 text-white text-lg font-bold">
    Gaming Items
  </p>
</div>
</div>
        

        {/* Daily Deals */}
    <div className="mt-10">
      <p className="text-xl font-bold ml-4 mb-4 text-black">Daily Deals</p>

      <div className="flex space-x-4  pb-3 ml-15">
        {products.map((p, i) => (
          <div
            key={i}
            className="w-[220px] bg-white rounded-xl border border-green-300  
                       p-4 shadow-[6px_15px_15px_#39FF00] flex flex-col items-center hover:scale-105 transition"
          >
            <img src={p.image} alt={p.name} className="h-24 object-contain" />

            <h2 className="text-sm font-medium text-slate-800 mt-3 text-center leading-tight">
              {p.name}
            </h2>

            <p className="text-green-700 font-semibold text-sm mt-2">
              {p.price}
            </p>

            <button className="mt-3 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow">
              <Plus size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
    {/* horizontal ads */}
    <div>
        <img
        src={nvidia}
        alt=""
        className="flex justify-center ml-15 mt-10 rounded-xl w-233 h-50"/>
    </div>
    </div>
  </div>

    </>
  );
};

export default Homepage;

