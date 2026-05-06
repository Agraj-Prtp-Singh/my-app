import React, { useState } from "react";
import { signupUser } from "../api/signup";

export default function SignupCard() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signupUser(formData);
      alert("Signup successful");
    } catch (error) {
      alert(error?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <h2 className="text-2xl font-bold text-green-600">Create Account</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="first_name"
          placeholder="First name"
          value={formData.first_name}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2"
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last name"
          value={formData.last_name}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2"
          required
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="student@gmail.com"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2"
        required
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-green-500 py-2 text-white hover:bg-green-600"
      >
        Sign Up
      </button>
    </form>
  );
}
