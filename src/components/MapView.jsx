import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return; // prevents double init

    const map = L.map("map").setView([21.1458, 79.0882], 13);
    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap",
    }).addTo(map);

   

  L.marker([21.1458, 79.0882]).addTo(map).bindPopup("Nagpur Location");  }, []);

  return <div id="map" className="h-64 w-full rounded-xl"></div>;
}