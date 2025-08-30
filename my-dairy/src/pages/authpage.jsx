import React, { useState } from "react";
import { signUpUser, loginUser } from "../apis/userApi";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import sam from '../assets/samarooh.png'
export default function AuthPage({ mode = "signup" }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Forms for both modes
  const [form, setForm] = useState(
    mode === "signup"
      ? { name: "", phone: "", password: "" }
      : { phone: "", password: "" }
  );

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const resp = await signUpUser(form);
        if (resp?.success) {
          toast.success(resp?.message || "Account created");
          setLoading(false);
          navigate("/login");
        } else {
          toast.error(resp?.message || "Failed to create account");
          setLoading(false);
        }
      } else {
        const resp = await loginUser(form);
        if (resp?.success) {
          toast.success(resp?.message);
          setLoading(false);
          navigate("/home")
        } else {
          toast.error(resp?.message || "Login failed");
          setLoading(false);
        }
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4`}
    >

      <div className="absolute inset-0 bg-black/30 pointer-events-none" />


      <div className="relative z-10 w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className=

          "bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-10 flex flex-col gap-6"


        >
          {/* Header */}
          <div className="flex flex-col items-center">

           
              <span aria-hidden className="text-xl">
  <img 
    src={sam}   // save the cow image into your public/ folder
    alt="cow with milk"
    className="w-14 h-14 inline-block rounded-full "
  />
</span>
            

            <h2
              className={`text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-900 via-teal-700 to-teal-400 bg-clip-text text-transparent
              `}
            >
              {mode === "signup" ? "Sign Up" : "Login"}
            </h2>
          </div>

          {/* Signup fields */}
          {mode === "signup" && (
            <>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                className="appearance-none w-full bg-white border border-gray-200 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400 transition"
                required
              />
            </>
          )}

          {/* Phone */}
          <label
            className={`text-sm text-gray-600 ${mode === "login" ? "hidden" : ""}`}
          >
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="10 digit phone number"
            value={form.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            className={`appearance-none w-full border rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 ${mode === "signup"
                ? "bg-white border-gray-200 focus:ring-amber-300 focus:border-amber-400"
                : "border-gray-300 focus:ring-blue-500"
              } transition`}
            required
          />

          {/* Password */}
          <label
            className={`text-sm text-gray-600 ${mode === "login" ? "hidden" : ""}`}
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className={`appearance-none w-full border rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 ${mode === "signup"
                ? "bg-white border-gray-200 focus:ring-amber-300 focus:border-amber-400"
                : "border-gray-300 focus:ring-blue-500"
              } transition`}
            required
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full inline-flex items-center justify-center gap-3 rounded-xl px-4 py-3 font-semibold text-white 
            ${"bg-gradient-to-r from-blue-500 via-teal-400 to-teal-300 shadow-lg"
              } 
              transition duration-200
              ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-105 hover:shadow-lg"}`}
          >
            {loading && (
              <svg
                className="w-5 h-5 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="4"
                ></circle>
                <path
                  d="M22 12a10 10 0 00-10-10"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                ></path>
              </svg>
            )}
            <span>
              {loading
                ? mode === "signup"
                  ? "Creating account…"
                  : "Teleporting you inside..."
                : mode === "signup"
                  ? "Create Account"
                  : "Log In"}
            </span>
          </button>

          {/* Links */}
          <p className="text-center text-sm text-gray-700">
            {mode === "signup" ? (
              <>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-teal-600 font-semibold hover:underline"
                >
                  Log in
                </Link>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <Link
                  to="/"
                  className="text-teal-600 font-semibold hover:underline"
                >
                  Sign Up
                </Link>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}
