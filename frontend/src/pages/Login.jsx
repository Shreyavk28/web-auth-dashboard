import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  useEffect(() => {
    const savedEmail = localStorage.getItem("prefillEmail");
    const savedPassword = localStorage.getItem("prefillPassword");

    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);

    
      localStorage.removeItem("prefillEmail");
      localStorage.removeItem("prefillPassword");
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch {
      alert("Invalid credentials");
    }
  };
return (
  <div className="min-h-screen flex items-center justify-center 
bg-gradient-to-br from-slate-200 via-blue-100 to-sky-200">
<form
  onSubmit={submit}
  className="w-full max-w-sm bg-white p-8 rounded-2xl
  border border-gray-200
  shadow-[0_20px_50px_rgba(0,0,0,0.18)]
  space-y-5"
>

      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Please login to your account
        </p>
      </div>
<div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      <input
        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />

      <input
        className="w-full bg-slate-50 border border-gray-300 rounded-lg px-4 py-2
focus:outline-none focus:ring-2 focus:ring-blue-500"

        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />

      <button className="w-full bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white py-2.5 rounded-lg font-semibold transition shadow-md">
        Login
      </button>

      <p className="text-sm text-center text-gray-600">
        New here?{" "}
        <Link
          to="/register"
          className="text-blue-600 font-medium hover:underline"
        >
          Create an account
        </Link>
      </p>
    </form>
  </div>
);


}
