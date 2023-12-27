import InfoCard from "../components/InfoCard";

export const ResultsList = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
      {data.map((listing) => (
        <InfoCard listing={listing} key={listing.id} />
      ))}
    </div>
  );
};
