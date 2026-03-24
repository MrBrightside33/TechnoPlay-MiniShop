import React, { useState } from "react";
import image from "./cg.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/login",
        { email, password }
      );

      console.log("Login successful:", response.data);
      alert("Login successful!");
      localStorage.setItem("email", email);
      navigate("/home");  // redirect after login   

    } catch (error) {
      console.error("Login error:", error);

      
    }
  };

  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex justify-center items-center min-h-screen ml-50">

          <div className="text-white font-medium text-9xl leading-tight drop-shadow-[3px_3px_5px_rgba(0,0,0,0.9)]">
            <span className="block text-right">THE NEXT</span>
            <span className="block text-right">LEVEL</span>
            <span className="block text-right">PLAY</span>
          </div>

          <div className="flex justify-end items-center min-h-screen">
            <div className="py-6 px-4 ml-30">
              <div className="rounded-2xl p-10 max-w-3xl shadow-[4px_6px_15px_#39FF00] bg-white">

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <h1 className="text-slate-900 text-3xl font-bold mb-12">Log-In</h1>

                  {/* Email */}
                  <div>
                    <label className="text-slate-900 text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter email"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    
                    <label className="text-slate-900 text-sm font-medium mb-2 block">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter password"
                    />
                  </div>
                 

                  {/* Button */}
                  <div className="mt-12">
                    <button
                      type="submit"
                      className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium rounded-lg text-black 
                                bg-linear-to-r from-[#05AF16] via-[#38FD01] to-[#93FF96]"
                    >
                      LOG IN
                    </button>

                    <p className="text-sm mt-6 text-center text-slate-600">
                      Don't have an account?
                      <Link
                        to="/signup"
                        className="text-blue-600 font-medium hover:underline ml-1"
                      >
                        Register here
                      </Link>
                    </p>
                  </div>

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Loginpage;
