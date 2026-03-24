import React, { useState } from "react";
import image from "./cg.jpg";
import { Link } from "react-router-dom";


function Forget() {
  const [Email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", Email);
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
                    <h1 className="flex text-slate-900 text-3xl font-bold justify-center items-center ">Forgot Password</h1>
                    <p className="flex text-slate-600 mt-2 justify-center items-center">Provide your account's email </p>
                  </div>
{/* Email */}
                   <div>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        value={Email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          console.log("Typing username:", e.target.value);
                        }}
                        required class="w-full text-sm text-slate-900 border border-slate-300 pl-12 pr-10 py-3 rounded-lg outline-blue-600" placeholder="Email"
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-6 h-6 text-gray-400 absolute left-4" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75"
       data-original="#000000"></path> 
                      </svg>
                    </div>
                  </div>

                  <div class="flex flex-wrap items-center justify-between gap-4">
                  </div>

                  <div>
                  <Link 
                  to="/authentication"
                  className="">
                    <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-black bg-linear-to-r from-[#05AF16] via-[#38FD01] to-[#93FF96] cursor-pointer">
                      Next
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

export default Forget;