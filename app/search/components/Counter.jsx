import { useState } from "react";

const CountIcon = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-5 h-5 border rounded-full"
    >
      <span>{icon}</span>
    </button>
  );
};

export const Counter = ({ label }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-between">
      <p className="font-bold">{label}</p>
      <div className="flex items-center gap-x-1">
        {count > 0 && (
          <CountIcon
            icon="-"
            onClick={() => setCount((prevCount) => prevCount - 1)}
          />
        )}
        <span>{count}</span>
        <CountIcon
          icon="+"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        />
      </div>
    </div>
  );
};