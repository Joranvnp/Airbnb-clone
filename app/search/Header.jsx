"use client";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  const headerContainerClasses = clsx(
    "container",
    "mx-auto",
    "flex",
    "justify-between",
    "bg-white",
    "py-8",
    {
      "h-[7.5rem]": !isExpanded,
      "h-[13rem]": isExpanded,
    }
  );

  const searchContainerClasses = clsx(
    "search-container",
    "flex",
    "flex-row",
    "rounded-full",
    "p-4",
    "justify-center",
    "items-center",
    "border",
    "drop-shadow-md",
    "bg-white",
    { "border-b-0": !isExpanded, "border-b-8": isExpanded }
  );

  return (
    <header className="fixed z-50 flex w-full bg-white border-b">
      <div className={headerContainerClasses}>
        <div className="text-red-500">airbnb</div>
        {isExpanded ? (
          <SearchBar />
        ) : (
          <button onClick={toggleExpanded} className={searchContainerClasses}>
            <div className="flex items-center px-4 border-r input">
              <p>N'importe ou</p>
            </div>
            <div className="flex items-center px-4 border-r input">
              <p>N'importe quand</p>
            </div>
            <div className="flex items-center px-4 border-r input">
              <p>N'importe qui</p>
            </div>
            <div className="relative w-10 h-10 px-4 rounded-full search-btn bg-primary">
              <MagnifyingGlassIcon className="absolute w-5 h-4 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </div>
          </button>
        )}
        <div>user</div>
      </div>
    </header>
  );
}
