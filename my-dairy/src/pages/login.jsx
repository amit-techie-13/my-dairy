import React, { useState } from "react";
import { loginUser } from "../apis/userApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [form, setForm] = useState({
    phone: "",
    password: "",
  });
const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Form Submitted:", form);
       let resp = await loginUser(form)
       console.log("🚀 ~ handleSubmit ~ resp:", resp)
       if(resp?.success){
       toast.success(resp?.message)
       setTimeout(() => {
            navigate("/home");  // change URL to /login
          }, 1000);
       }else{
        toast.error(resp?.message)
        console.log("🚀 ~ handleSubmit ~ resp?.message:", resp?.message)
       }
      // later: send to backend API
    };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 justify-center  "
    >
      <h2 className="text-2xl font-bold text-center bg-gradient-to-b from-amber-900 via-amber-700 to-amber-400 bg-clip-text text-transparent ">
        Login 
      </h2>

     

      {/* Phone Number */}
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        pattern="[0-9]{10}" // enforces 10 digits
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      {/* Submit */}
      <button
        type="submit"
        className="bg-gradient-to-b from-amber-700 via-amber-500 to-amber-200 font-semibold py-2 rounded-lg transition duration-200"
      >
        Log In
      </button>

      <p className="text-sm bg-gradient-to-b from-amber-900 via-amber-700 to-amber-400 bg-clip-text text-transparent text-center">
        Does not  have an account?{" "}
        <a href="/" className="bg-gradient-to-b from-amber-900 via-amber-700 to-amber-400 bg-clip-text text-transparent hover:underline">
          Sign Up
        </a>
      </p>
    </form>
  );
}
