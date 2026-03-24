import React, { useState } from "react";
import image from "./cg.jpg";
import { Link } from "react-router-dom";


function Changepass() {
  const [Password, setPassword] = useState("");
  const [Changepassword, setChangpass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password:", Password);
    console.log("Changepassword:", Changepassword);
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
                    <h1 className="flex text-slate-900 text-3xl font-bold justify-center items-center ">Change Password</h1>
                    <p className="flex text-slate-600 mt-2 justify-center items-center">Enter your desired password </p>
                  </div>
{/* New password */}
                   <div>
                    <div className="relative flex items-center">
                      <input
                        type="password"
                        value={Password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          console.log("Typing password:", e.target.value);
                        }}
                        required class="w-full text-sm text-slate-900 border border-slate-300 pl-12 pr-10 py-3 rounded-lg outline-blue-600" placeholder="New Password"
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-6 h-6 text-gray-400 absolute left-4" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path d="M17 11H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zM8 11V8a4 4 0 1 1 8 0v3M12 16v2"/>

                      </svg>
                    </div>
                  </div>

{/* Confirm password */}
                <div>
                    <div className="relative flex items-center">
                      <input
                        type="password"
                        value={Changepassword}
                        onChange={(e) => {
                          setChangpass(e.target.value);
                          console.log("Typing Changepassword:", e.target.value);
                        }}
                        required class="w-full text-sm text-slate-900 border border-slate-300 pl-12 pr-10 py-3 rounded-lg outline-blue-600" placeholder="Change Password"
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-6 h-6 text-gray-400 absolute left-4" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path d="M17 11H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zM8 11V8a4 4 0 1 1 8 0v3M12 16v2"/>

                      </svg>
                    </div>
                  </div>
                

                  <div>
                  <Link
                  to="/login"
                  className="">
                    <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-black bg-linear-to-r from-[#05AF16] via-[#38FD01] to-[#93FF96] cursor-pointer">
                      UPDATE
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

export default Changepass;