import { logout } from "../utils/auth";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-slate-800 text-white shadow">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded-md text-sm font-medium"
      >
        Logout
      </button>
    </div>
  );
}
