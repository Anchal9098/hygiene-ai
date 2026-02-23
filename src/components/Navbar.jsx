export default function Navbar() {
  return (
    <div className="bg-green-700 text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-semibold">Smart Hygiene AI</h1>
      <div className="flex gap-6">
        <p>Dashboard</p>
        <p>Nearby Toilets</p>
        <p>Status</p>
      </div>
        <select onChange={(e)=>setLang(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="mr">मराठी</option>
        </select>
    </div>
  )
}