"use client"
import { useState } from "react";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded );
  }

  return (
    <header className="container flex justify-between h-10 border-b bg-white z-50 fixed w-full">
      <div className="text-red-500">airbnb</div>
      <div onClick={toggleExpanded} className="search-container flex gap-3 rounded-lg">
        <div className="input border-r">
          <p>N'importe ou</p>
        </div>
        <div className="input border-r">
          <p>N'importe quand</p>
        </div>
        <div className="input border-r">
          <p>N'importe qui</p>
        </div>
        <div className="search-btn">Recherchez</div>
      </div>
      <div>user</div>
    </header>
  )
}