import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold text-purple-700">
          MEDPLUS
        </Link>

        <div className="flex space-x-8">

          <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition">Home</Link>

          <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium transition">About</Link>

          <Link to="/features" className="text-gray-700 hover:text-purple-600 font-medium transition">Features</Link>

          <Link to="/contact" className="text-gray-700 hover:text-purple-600 font-medium transition">Contact</Link>

        </div>

        <div className="flex space-x-4">

          <Link to="/login">
            <button className="text-purple-700 border border-purple-700 px-5 py-2 rounded-full hover:bg-purple-700 hover:text-white transition">Login</button>
          </Link>

          <Link to="/signup">
            <button className="bg-purple-700 text-white px-5 py-2 rounded-full hover:bg-purple-800 transition">Sign Up</button>
          </Link>

        </div>

      </div>
    </div>
  );
}