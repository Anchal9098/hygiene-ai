export default function ToiletCard({ name, distance, rating, status }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full">
      <h2 className="font-semibold text-lg">{name}</h2>
      <p>{distance} km away</p>
      <p>Rating: {rating}</p>
      <p className="font-semibold">{status}</p>
    </div>
  )
}