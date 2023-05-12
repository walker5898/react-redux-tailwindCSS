import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const number = useSelector((state) => state.count.number);
  return (
    <nav className="p-4 w-[100%]">
      <h1 className="text-2xl">Navbar page: {number}</h1>
    </nav>
  );
}

export default Navbar;
