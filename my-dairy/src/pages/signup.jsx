import React, { useState } from "react";
import { signUpUser } from "../apis/userApi";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    password: "",
  });
const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
     let resp = await signUpUser(form)
     if(resp?.success){
     toast.success(resp?.message)
     setLoading(false);
     setTimeout(() => {
          navigate("/login");  
        }, 100);
     }else{
      toast.error(resp?.message)
      setLoading(false);
     }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 justify-center  "
    >
      <h2 className="text-2xl font-bold text-center bg-gradient-to-b from-amber-900 via-amber-700 to-amber-400 bg-clip-text text-transparent ">
        Sign Up
      </h2>

      {/* Full Name */}
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

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
  disabled={loading}  // prevent double submit
  className={`bg-gradient-to-b from-amber-700 via-amber-500 to-amber-200 
              font-semibold py-2 px-4 rounded-lg 
              transition duration-300 ease-in-out 
              hover:from-amber-600 hover:via-amber-400 hover:to-amber-100 
              hover:scale-105 hover:shadow-lg cursor-pointer
              ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
>
  {loading ? "Creating..." : "Create Account"}
</button>

      <p className="text-sm bg-gradient-to-b from-amber-900 via-amber-700 to-amber-400 bg-clip-text text-transparent text-center">
        Already have an account?
        <Link
  to="login"
  className="bg-gradient-to-b from-amber-900 via-amber-700 to-amber-600 bg-clip-text 
             font-semibold py-2 px-4 rounded-lg 
              cursor-pointer"
>
  Log in
</Link>
      </p>
    </form>
  );
}
