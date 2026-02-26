import ActivityPanel from './components/ActivityPanel'
import AnalyticsChartCard from './components/AnalyticsChartCard'
import DashboardWidgets from './components/Dashboard/DashboardWidgets'
import './styles/globals.css'
export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 h-100">
      <DashboardWidgets />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8">
          <AnalyticsChartCard />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <ActivityPanel />
        </div>
      </div>
    </div>
  )
}
