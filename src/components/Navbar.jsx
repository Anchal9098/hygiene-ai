export default function Navbar({ lang, setLang }) {
  return (
    <div className="flex justify-between 
                bg-white/20 backdrop-blur-md 
                text-white px-6 py-4 shadow-md">

      <h1 className="text-black font-semibold text-lg">
  Smart Hygiene AI
</h1>
      


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