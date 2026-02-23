import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView({ searchText }) {
  const mapRef = useRef(null);

  // ⭐ Fetch clean toilets from backend
  const fetchCleanToilets = async (lat, lon) => {
    try {
      const res = await fetch("http://localhost:5000/api/toilets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lat, lon }),
      });

      const toilets = await res.json();

      toilets.forEach((t) => {
        if (t.rating >= 4) {
          L.marker([t.lat, t.lon])
            .addTo(mapRef.current)
            .bindPopup(`⭐ Clean Toilet<br/>Rating: ${t.rating}`);
        }
      });
    } catch (err) {
      console.log("Error fetching toilets", err);
    }
  };

  // 🗺 Create map only once
  useEffect(() => {
    if (mapRef.current) return;

    const map = L.map("map").setView([21.1458, 79.0882], 13); // Nagpur
    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap",
    }).addTo(map);

    L.marker([21.1458, 79.0882])
      .addTo(map)
      .bindPopup("Nagpur")
      .openPopup();
  }, []);

  // 🔎 When user searches location
  useEffect(() => {
    if (!searchText || !mapRef.current) return;

    const searchLocation = async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${searchText}`
        );

        const data = await res.json();

        if (data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);

          mapRef.current.setView([lat, lon], 14);

          // ⭐ Load clean toilets
          fetchCleanToilets(lat, lon);
        }
      } catch (err) {
        console.log("Search error", err);
      }
    };

    searchLocation();
  }, [searchText]);

  return <div id="map" className="h-64 w-full rounded-xl"></div>;
}