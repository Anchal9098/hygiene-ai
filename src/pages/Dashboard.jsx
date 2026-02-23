import { useState } from "react";
import Navbar from "../components/Navbar";
import ToiletCard from "../components/ToiletCard";
import StatusBoard from "../components/StatusBoard";
import MapView from "../components/MapView";
import bgImg from "../assets/bg1.png";

export default function Dashboard() {

  const [searchText, setSearchText] = useState("");
  const [lang, setLang] = useState("en");

  // ⭐ FULL LANGUAGE TEXT
  const text = {
    en: {
      title: "Smart Hygiene AI",
      search: "Search location...",
      fresh: "Fresh",
      needs: "Needs Cleaning",
      metro: "Metro Station Toilet",
      bus: "Bus Stand Toilet",
      km: "km away",
      rating: "Rating",
    },
    hi: {
      title: "स्मार्ट हाइजीन एआई",
      search: "स्थान खोजें...",
      fresh: "स्वच्छ",
      needs: "सफाई चाहिए",
      metro: "मेट्रो स्टेशन शौचालय",
      bus: "बस स्टैंड शौचालय",
      km: "किमी दूर",
      rating: "रेटिंग",
    },
    mr: {
    title: "स्मार्ट हायजीन एआय",
    search: "ठिकाण शोधा...",
    fresh: "स्वच्छ",
    needs: "स्वच्छता आवश्यक",
    metro: "मेट्रो स्टेशन स्वच्छतागृह",
    bus: "बस स्टँड स्वच्छतागृह",
    km: "किमी अंतरावर",
    rating: "रेटिंग",
  }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Title */}
      <div className="text-center text-2xl font-semibold mt-4">
        <h1 className="text-black">{text[lang].title}</h1>
      </div>

      {/* Search */}
      <div className="p-6 pb-0 flex justify-center">
        <input
          type="text"
          placeholder={text[lang].search}
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
            name={text[lang].metro}
            distance={`0.8 ${text[lang].km}`}
            rating={`${text[lang].rating}: 4.2`}
            status={text[lang].fresh}
          />

          <ToiletCard
            name={text[lang].bus}
            distance={`1.2 ${text[lang].km}`}
            rating={`${text[lang].rating}: 3.5`}
            status={text[lang].needs}
          />
        </div>
      </div>
    </div>
  );
}