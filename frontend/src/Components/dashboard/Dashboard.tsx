import { Engine } from "@tsparticles/engine";
import SidebarComponent from "../shared/sidebar/sidebar";
import "./Dashboard.css"
import Particle from "../shared/particles/particleBg";
function DashboardComponent(): JSX.Element {
  
  return (
    <>
      <div className="max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm all">
        <Particle />
        <SidebarComponent />
      </div>
    </>
  )
}

export default DashboardComponent;