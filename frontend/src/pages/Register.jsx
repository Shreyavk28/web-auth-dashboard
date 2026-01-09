import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

 const submit = async (e) => {
  e.preventDefault();
  await API.post("/auth/register", form);

  localStorage.setItem("prefillEmail", form.email);
  localStorage.setItem("prefillPassword", form.password);

  window.location.href = "/login";
};


 return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-green-50 to-emerald-100">

    <form
  onSubmit={submit}
  className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] space-y-5"
>

      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Create Account</h2>
        <p className="text-sm text-gray-500 mt-1">
          Sign up to get started
        </p>
      </div>

     <input
  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
  placeholder="Full Name"
  onChange={e => setForm({ ...form, name: e.target.value })}
  required
/>


      <input
  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
  placeholder="Email address"
  onChange={e => setForm({ ...form, email: e.target.value })}
  required
/>


    <input
  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
  type="password"
  placeholder="Password"
  onChange={e => setForm({ ...form, password: e.target.value })}
  required
/>


     <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-2.5 rounded-lg font-semibold transition shadow-md">
  Register
</button>


      <p className="text-sm text-center text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-green-600 font-medium hover:underline"
        >
          Login here
        </Link>
      </p>
    </form>
  </div>
);

}
