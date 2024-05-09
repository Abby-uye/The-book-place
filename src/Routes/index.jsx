import Layout from "../components/Layout";
import Home from "../features/Home";
import Login from "../features/Login";
import SignUp from "../features/Home/SignUp";
import DisplaySearchResults from "../features/Home/DisplaySearchResults";

export const Routes =

        [
            {
                path:"/",
                element:<Layout/>,
                 children:[
                     {
                         path:"",
                         element:<Home/>,

                     },
                     {
                         path: "/displayResults",
                         element: <DisplaySearchResults/>
                     }

                 ]

            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            }


        ]




