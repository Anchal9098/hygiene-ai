export default function StatusBoard() {
  return (
    <div className="bg-green-100 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold">Live Cleanliness Grade</h2>
      <h1 className="text-5xl font-bold mt-4">A+</h1>
      <p className="mt-2">Water Available</p>
      <p>Last Cleaned: 20 mins ago</p>
    </div>
  )
}