import { useState } from "react";
import { Counter } from "./Counter";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

const SearchBar = () => {
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const handleSelect = (ranges) => {
    if (ranges.selection.startDate !== startDate) {
      setStartDate(ranges.selection.startDate);
    }
    if (ranges.selection.endDate !== endDate) {
      setEndDate(ranges.selection.endDate);
    }
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <div className="flex flex-row self-center w-3/4 p-2 mt-8 border rounded-full">
      <button onClick={() => setSearchFocused(true)}>
        <p className="font-bold">Ou ?</p>
        {isSearchFocused ? (
          <input
            type="text"
            placeholder="Recherchez une destination"
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
          className="p-2 shadow dropwdown-content menu bg-base-100 rounded-box w-52"
        >
          <Counter label="Adultes" />
        </div>
      </div>
      <button className="flex flex-row justify-center gap-3 p-4 px-4 text-white rounded-full bg-primary">
        <span>Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
