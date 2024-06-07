import style from "./index.module.css"
import logo from "../../../assets/bookLogo.jpeg"

import HamBugger from "../../../features/Home/HamBugger";
import {Link} from "react-router-dom";
import SearchBook from "../../../features/Home/SearchBook";
const NavBar =()=>{



    return(
        <div className={style.navBar}>
            <div className={style.books}>
            <img src={logo} alt={""}/>
            <p className={style.myBooks}>My books</p>
            </div>
                   <SearchBook/>

                <div className={style.signUpAndLogin}>
                    <Link  to={"/login"}>
                        <button className={style.btn}>Log In</button>
                    </Link>
                    <Link to={"/signup"}>
                    <button className={style.btn}>Sign Up</button>
                    </Link>
                </div>

            <HamBugger/>

        </div>
    )
}
export default NavBar