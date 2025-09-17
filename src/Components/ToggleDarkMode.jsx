import React from "react";

const ToggleDarkMode = ({ isDark, onToggle }) => (
  <button
    onClick={onToggle}
    className={`mb-6 px-4 py-2 rounded-xl shadow-md font-semibold ${isDark ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"}`}
  >
    {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
  </button>
);

export default ToggleDarkMode;
