import Navbar from "../components/Navbar"
import ToiletCard from "../components/ToiletCard"
import StatusBoard from "../components/StatusBoard"
import MapView from "../components/MapView"

export default function Dashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="p-6 grid grid-cols-3 gap-6">
        <StatusBoard />
        <MapView />
        <div className="flex flex-col gap-4">
          <ToiletCard name="Metro Station Toilet" distance="0.8" rating="4.2" status="Fresh" />
          <ToiletCard name="Bus Stand Toilet" distance="1.2" rating="3.5" status="Needs Cleaning" />
        </div>
      </div>
    </div>
  )
}