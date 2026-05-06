import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../api/signup";

export default function SignupCard() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmitting(true);

    try {
      await signupUser(formData);
      setSuccessMessage("Signup successful. You can log in now.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        "Signup failed. Please try again.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex ">
      <form className="p-20" onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-2xl text-green-500 font-bold  ">Welcome Back</h2>
          <p>Please enter your details to sign in.</p>
        </div>

        <div className="space-y-4 mt-3">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email Address</label>
            <input
              type="email"
              placeholder="student@heraldcollege.edu.np"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
          </div>

          {errorMessage ? (
            <p className="text-sm text-red-600">{errorMessage}</p>
          ) : null}
          {successMessage ? (
            <p className="text-sm text-green-600">{successMessage}</p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <span
              className="text-green-500 font-bold cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Login Here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
