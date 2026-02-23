export default function Navbar({ lang, setLang }) {
  return (
    <div className="flex justify-between bg-green-700 text-white px-6 py-4">

      <h2>Smart Hygiene AI</h2>

      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}   // ⭐ VERY IMPORTANT
        className="text-black rounded px-2"
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
        <option value="mr">मराठी</option>
      </select>

    </div>
  );
}