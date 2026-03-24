import React, { useState } from "react";
import image from "./cg.jpg";
import { Link } from "react-router-dom";


function Authentication() {
  const [Code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Code:", Code);
  }
  return (
    <>

      <div className="bg-cover bg-center min-h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${image})` }}>

        <div className="flex justify-center items-center min-h-screen">
          {/* Left-side text */}

          <div class="flex justify-center min-h-screen ">
            <div class="py-25 px-4  ">
              <div class="rounded-2xl p-10 max-w-3xl shadow-[4px_6px_15px_#39FF00] max-lg:mx-5 bg-white">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6">

                  <div className="mb-10">
                    <h1 className="flex text-slate-900 text-3xl font-bold justify-center items-center ">Authentication Code</h1>
                    <p className="flex text-slate-600 mt-2 justify-center items-center">Input the 6-digit code sent to your email. </p>
                  </div>
{/* Email */}
                   <div>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        value={Code}
                        onChange={(e) => {
                          setCode(e.target.value);
                          console.log("Typing Code:", e.target.value);
                        }}
                        required class="w-full text-sm text-slate-900 border border-slate-300 pl-12 pr-10 py-3 rounded-lg outline-blue-600" placeholder="Enter the Code"
                      />
                    </div>
                  </div>

                  <div>
                  <Link
                  to="/change"
                  className="">
                    <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-black bg-linear-to-r from-[#05AF16] via-[#38FD01] to-[#93FF96] cursor-pointer">
                      Continue
                    </button>
                    </Link>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Authentication;