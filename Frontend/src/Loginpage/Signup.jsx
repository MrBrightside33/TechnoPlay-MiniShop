import React, { useState } from "react";
import image from "./cg.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/register",
        {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        }
      );

      alert("Registration successful!");
      console.log("Registration successful:", response.data);
      // redirect to login page after registration
      navigate("/login");
    } catch (err) {
      console.error("Registration error:", err);
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex justify-center items-center min-h-screen">
        <div className="py-6 px-4">
          <div className="rounded-2xl p-10 w-100 shadow-[4px_6px_15px_#39FF00] bg-white">

            <form onSubmit={handleSubmit} className="space-y-6">
              <h1 className="text-slate-900 text-3xl font-bold mb-4">Sign Up</h1>
              <p className="text-slate-600 mb-6">Please fill in the information below:</p>

              {error && <p className="text-red-600">{error}</p>}

              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full text-sm border border-slate-300 pl-4 py-3 rounded-lg outline-blue-600 mb-4"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full text-sm border border-slate-300 pl-4 py-3 rounded-lg outline-blue-600 mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full text-sm border border-slate-300 pl-4 py-3 rounded-lg outline-blue-600 mb-4"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full text-sm border border-slate-300 pl-4 py-3 rounded-lg outline-blue-600 mb-4"
              />

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-[15px] font-medium rounded-lg text-black bg-gradient-to-r from-[#05AF16] via-[#38FD01] to-[#93FF96]"
              >
                Create my account
              </button>

              <p className="text-sm mt-6 text-center text-slate-600">
                Already have an account?
                <Link to="/login" className="text-blue-600 font-medium hover:underline ml-1">
                  Log in
                </Link>
              </p>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
