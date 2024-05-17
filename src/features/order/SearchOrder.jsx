import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function submitHandle(e) {
    console.log(e);
    e.preventDefault();
    if (query) navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={(e) => submitHandle(e)}>
      <input
        type="text"
        placeholder="Search order#"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full px-4 py-2 focus:outline-none focus:ring text-sm
         focus:ring-yellow-500 transition-all duration-300 sm:w-64 focus:ring-opacity-50 sm:focus:w-72
         placeholder:text-stone-400 bg-yellow-100"
      />
    </form>
  );
}
