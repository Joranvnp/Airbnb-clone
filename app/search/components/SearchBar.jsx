import { useState } from "react";
import { Counter } from "./Counter";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useSearchStore } from "../../../store";

const SearchBar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const locationInput = useSearchStore((state) => state.location);
  const startDate = useSearchStore((state) => state.dates[0]);
  const endDate = useSearchStore((state) => state.dates[1]);

  const handleSelect = (ranges) => {
    useSearchStore.setState({
      dates: [ranges.selection.startDate, ranges.selection.endDate],
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleLocationUpdate = (e) => {
    useSearchStore.setState({ location: e.target.value });
  };

  return (
    <div className="flex flex-row self-center justify-center w-3/4 py-2 mt-8 border rounded-full">
      <button
        className="px-4 text-left border-r"
        onClick={() => setIsSearchFocused(true)}
      >
        <p className="font-bold">Ou ?</p>
        {isSearchFocused ? (
          <input
            type="text"
            placeholder="Recherchez une destination"
            onChange={handleLocationUpdate}
            value={locationInput}
            className="bg-transparent border-none outline-none text-slate-800"
          />
        ) : (
          <p className="text-slate-600">Recherchez une destination</p>
        )}
      </button>
      <div className="px-4 border-r dropdown dropdown-end">
        <label tabIndex={1}>
          <p className="font-bold">Dates</p>
          <p className="text-slate-600">Sélectionner une période</p>
        </label>
        <div
          tabIndex={1}
          className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
        >
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            rangeColors={["#222222"]}
          />
        </div>
      </div>
      <div className="px-4 dropdown dropdown-end">
        <label tabIndex={2}>
          <p className="font-bold">Qui ?</p>
          <p className="text-slate-600">Ajouter des personnes</p>
        </label>
        <div
          tabIndex={2}
          className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
        >
          <Counter label="Adultes" />
        </div>
      </div>
      <Link
        href="/search/results"
        className="flex flex-row justify-center gap-3 p-4 px-4 text-white rounded-full bg-primary"
      >
        <MagnifyingGlassIcon className="w-5 h-5" />
        <span>Recherchez</span>
      </Link>
    </div>
  );
};

export default SearchBar;
