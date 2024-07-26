import "./Layout.scss";
import NavBar from "../../component/Navbar/NavBar"
import { Outlet } from "react-router-dom";

function Layout() {
    return(
         <div className="layout">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
    )
}

export default Layout;