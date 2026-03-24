import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuButton from "./MenuButtons";
import Sidebar from "../Homepage/Sidebar";
import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon, BellIcon } from "@heroicons/react/24/solid";
import { LogOutIcon } from "lucide-react";
import axios from "axios";



function Accounts() {
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };


  const  handleSubmit = async (e) => {
    e.preventDefault();
   try {
      const result = await axios.post("http://localhost:8080/api/user/edit", {
        full_name: fullName,
        email,
        currentUser: localStorage.getItem("email"),
      });

      alert("Profile updated successfully!");
    }
    catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  }

  const deleteUser = async () => {
    try {
      const email = localStorage.getItem("email");

      await axios.post('http://localhost:8080/api/user/delete', {email});

      alert("account deleted permanently");
      navigate('/login');
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }

useEffect(() => {
  const localEmail = localStorage.getItem("email");
  const localFullName = localStorage.getItem("fullName");

  if (localEmail) setEmail(localEmail);
  if (localFullName) setFullName(localFullName);
}, []);



  return (
    <div className="flex min-h-screen bg-[#F6FFF7]">
      <Sidebar />

      <form className="flex-1 p-6" onSubmit={handleSubmit}>
        {/* --- TOP BAR --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center bg-white px-3 py-2 rounded-full border shadow-sm flex-1 min-w-[280px]">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search Product"
              className="flex-1 px-2 outline-none text-sm"
            />
            <FunnelIcon className="w-5 h-5 text-green-500" />
          </div>

          <div className="flex gap-2">
            <button className="p-2 bg-green-400 rounded-md hover:bg-green-500 transition">
              <EnvelopeIcon className="w-5 h-5 text-black" />
            </button>
            <button className="p-2 bg-green-400 rounded-md hover:bg-green-500 transition">
              <BellIcon className="w-5 h-5 text-black" />
            </button>
            <button type="button" className="p-2 bg-green-400 rounded-md hover:bg-green-500 transition" 
            onClick={() => {
              navigate('/login');
              localStorage.removeItem("email");
            }}>
              <LogOutIcon className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        {/* --- PROFILE CARD --- */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-slate-900">My Profile</h2>
          <p className="text-gray-600 mb-6">Manage and protect your account</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* --- LEFT FORM --- */}
            <div className="flex flex-col gap-4">

              <div>
                <label className="block font-semibold text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={fullName}
                  className="w-full border border-gray-300 rounded-lg p-2 outline-green-400"
                />
              </div>

              <div>
                <label className="block font-semibold text-sm mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={email}
                  className="w-full border border-gray-300 rounded-lg p-2 outline-green-400"
                />
              </div>

              <div>
                <label className="block font-semibold text-sm mb-1">Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 outline-green-400"
                />
              </div>

              <div>
                <label className="block font-semibold text-sm mb-1">Gender</label>
                <div className="flex gap-4">
                  {["Male", "Female", "Other"].map((g) => (
                    <label key={g} className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="gender"
                        checked={gender === g}
                        onChange={() => setGender(g)}
                      />
                      {g}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-sm mb-1">Date of Birth</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 outline-green-400"
                />
              </div>

              <div>
                <label className="block font-semibold text-sm mb-1">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 outline-green-400"
                />
              </div>
                  
              <div className="flex items-center gap-3">
              <button type="button" className="mt-6 bg-gradient-to-r from-[#05AF16] via-[#38FD01] to-[#93FF96] text-black py-2 px-6 rounded-lg hover:shadow-xl transition">
                <p className="font-bold">Save Changes</p>
              </button> 
              
              <div className="flex item-aligns mt-6">
                <MenuButton 
                  onClick={deleteUser}
                />
                </div>
             </div>
            </div>

            {/* --- RIGHT PROFILE IMAGE --- */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                {image ? (
                  <img src={image} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  "PROFILE"
                )}
              </div>

              <label className="bg-green-100 px-4 py-2 rounded-lg cursor-pointer hover:bg-green-200 transition">
                Select Image
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>

              <p className="text-sm text-gray-600">Max size: 1 MB</p>
              <p className="text-sm text-gray-600">Extensions: JPEG, PNG</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Accounts;
