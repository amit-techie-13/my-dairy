import React, { useState } from "react";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    // later: send to backend API
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
        className="bg-gradient-to-b from-amber-700 via-amber-500 to-amber-200 font-semibold py-2 rounded-lg transition duration-200"
      >
        Create Account
      </button>

      <p className="text-sm bg-gradient-to-b from-amber-900 via-amber-700 to-amber-400 bg-clip-text text-transparent text-center">
        Already have an account?{" "}
        <a href="/login" className="bg-gradient-to-b from-amber-900 via-amber-700 to-amber-400 bg-clip-text text-transparent hover:underline">
          Log in
        </a>
      </p>
    </form>
  );
}
