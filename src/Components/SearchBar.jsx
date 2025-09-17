import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) return;
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6 justify-center">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 rounded-xl shadow-md outline-none"
      />
      <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-xl shadow-md font-semibold">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

