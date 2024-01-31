import SidebarComponent from "../shared/sidebar/sidebar";
import "./Dashboard.css"
function DashboardComponent(): JSX.Element {
    return (
        <>
            <div className="max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm all">
                <SidebarComponent/>
            </div>
        </>
    )
}

export default DashboardComponent;