export default function ToiletCard({ name, distance, rating, status }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h2 className="font-semibold text-lg">{name}</h2>

      <p>{distance} km away</p>
      <p>Rating: {rating}</p>

      {/* ⭐ THIS LINE MAKES HINDI WORK */}
      <p className="font-medium">{status}</p>
    </div>
  );
}