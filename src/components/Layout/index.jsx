import NavBar from "../reuseables/NavBar";
import Footer from "../reuseables/Footer";
import {Outlet} from "react-router-dom";
const Layout = ()=>{
    return(
            <>
                <NavBar/>,
                <Outlet/>
                 <Footer/>
                </>
    )
}
export default Layout