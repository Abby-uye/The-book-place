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
            <div className={style.searchBar}>

                <div className={style.styleInput}>
                   <SearchBook/>

                </div>
            </div>
                <div className={style.signUpAndLogin}>
                    <Link  to={"/login"}>
                        <button className={style.login}>Log In</button>
                    </Link>
                    <Link to={"/signup"}>
                    <button className={style.signUp}>Sign Up</button>
                    </Link>
                </div>

            <HamBugger/>

        </div>
    )
}
export default NavBar