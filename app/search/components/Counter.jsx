import { useSearchStore } from "../../../store";

const CountIcon = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-5 h-5 border rounded-full"
    >
      <span className="text-slate-900">{icon}</span>
    </button>
  );
};

export const Counter = ({ label }) => {
  const count = useSearchStore((state) => state.guests);
  const increaseCount = useSearchStore((state) => state.increaseGuests);
  const decreaseCount = useSearchStore((state) => state.decreaseGuests);

  return (
    <div className="flex justify-between">
      <p className="font-bold">{label}</p>
      <div className="flex items-center gap-x-1">
        {count > 0 && <CountIcon icon="-" onClick={decreaseCount} />}
        <span>{count}</span>
        <CountIcon icon="+" onClick={increaseCount} />
      </div>
    </div>
  );
};
