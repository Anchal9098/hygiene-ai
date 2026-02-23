import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ToiletCard from "../components/ToiletCard";
import StatusBoard from "../components/StatusBoard";
import MapView from "../components/MapView";
import bgImg from "../assets/bg.png";
export default function Dashboard() {

  // 🔎 search input
  const [searchText, setSearchText] = useState("");

  // 🌐 language state
  const [lang, setLang] = useState("en");

  // ⭐ translated texts
  const [translatedTitle, setTranslatedTitle] = useState("Smart Hygiene AI");
  const [translatedSearch, setTranslatedSearch] = useState("Search location...");

  // 🤖 AI translate function
  const translateText = async (text, lang) => {
    console.log("Calling translate API with:", lang);

    if (lang === "en") return text;

    const res = await fetch("http://localhost:5000/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, lang })
    });

    const data = await res.json();
    return data.translation;
  };

  // ⭐ run translation when language changes
  useEffect(() => {
    const runTranslate = async () => {

      const newTitle = await translateText("Smart Hygiene AI", lang);
      const newSearch = await translateText("Search location...", lang);

      setTranslatedTitle(newTitle);
      setTranslatedSearch(newSearch);
    };

    runTranslate();
  }, [lang]);

  return (
   <div
  className="min-h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImg})` }}
>

      {/* Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* ⭐ Translated Title */}
      <div className="text-center text-2xl font-semibold mt-4">
        <h1>{translatedTitle}</h1>
        <p>{lang}</p>
      </div>

      {/* 🔎 Search Bar */}
      <div className="p-6 pb-0 flex justify-center">
        <input
          type="text"
          placeholder={translatedSearch}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-1/2 px-4 py-2 border rounded-xl shadow-sm outline-none"
        />
      </div>

      {/* Main Grid */}
      <div className="p-6 grid grid-cols-3 gap-6">
        <StatusBoard />

        <MapView searchText={searchText} lang={lang} />

        <div className="flex flex-col gap-4">
          <ToiletCard
            name="Metro Station Toilet"
            distance="0.8"
            rating="4.2"
            status="Fresh"
          />

          <ToiletCard
            name="Bus Stand Toilet"
            distance="1.2"
            rating="3.5"
            status="Needs Cleaning"
          />
        </div>
      </div>
    </div>
  );
}