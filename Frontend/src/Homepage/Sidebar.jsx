import React, { useState } from "react";
import './Sidebarstyle.css';
import logos from "./logo.png";
import HomeIcon from "../assets/house-xxl.png";
import ExploreIcon from "../assets/compass.png";
import OrderIcon from "../assets/heart.png";
import CartIcon from "../assets/cart.png";
import AccountIcon from "../assets/man.png";
import ForumIcon from "../assets/forum.png";
import { Link } from "react-router-dom";
import rogPhone from "../assets/rogPhone.png";

function Sidebar() {
  const menuItems = [
    { name: "HOME", icon: HomeIcon, path: "/home" },
    { name: "EXPLORE", icon: ExploreIcon, path: "/explore" },
    { name: "ORDER", icon: OrderIcon, path: "/order" },
    { name: "CART", icon: CartIcon, path: "/cart" },
    { name: "ACCOUNT", icon: AccountIcon, path: "/account" },
    { name: "CONTACTS", icon: ForumIcon, path: "/contact" },
  ];
  
  return (
    <>
   
    <div className="w-50 min-h-screen bg-[#d7ffd8] flex flex-col items-center shadow-[5px_2px_8px_rgba(0,0,0,0.3)]">
    <div className="Technoplaylogo">
      <div className="Sidebar">
        <img
          src={logos}
          alt="Technoplay Logo"
          className="logos"
        />
      </div>
      <p className="title">TECHNOPLAY</p>
    </div>

    <div className="flex flex-col items-center mt-5 space-y-6">

    <div className="w-48 bg-green-100 p-4">
      <ul className="space-y-7">
  {menuItems.map((item) => (
    <Link
      key={item.name}
      to={item.path}
      className="block"
      ><li key={item.name} className="flex items-center space-x-4 text-xl font-bold leading-tight hover:bg-[#4eb451] hover:scale-105 hover:shadow-md
                   transition-all duration-200 cursor-pointer px-3 py-2 rounded-xl">
      {typeof item.icon === "string" && item.icon.includes("/") ? (
        // If icon is an image path
        <img 
        src={item.icon} 
        alt={item.name} 
        className="w-6 h-6" />
      ) : (
        // If icon is emoji
        <span className="emoji-icon">{item.icon}</span>
      )}
      <p>{item.name}</p>
    </li>
    </Link>

  ))}
</ul>
    </div>
      
    </div>
    {/* horizontal ads */}
        <div>
            <img
            src={rogPhone}
            alt=""
            className="flex justify-center ml-7 mt-23 mr-20 rounded-xl w-37 h-70"/>
        </div>
    </div>
      
    </>
  );
};

export default Sidebar;
