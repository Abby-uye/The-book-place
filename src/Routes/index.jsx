import Layout from "../components/Layout";
import Home from "../features/Home";
import Login from "../features/Login";
import SignUp from "../features/Home/SignUp";
import DisplaySearchResults from "../features/Home/DisplaySearchResults";
import DisplayReadingList from "../features/Home/DisplayReadingList";

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
                     },
                     {
                         path: "/readingList",
                         element: <DisplayReadingList/>
                     }

                 ]

            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/sign-up",
                element: <SignUp/>
            }


        ]




