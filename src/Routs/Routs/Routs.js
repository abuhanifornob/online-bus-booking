import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Users from "../../Pages/Users/Users";
import Home from "../../Pages/Home/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main/Main");

const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
            path:"/",
            element:<Home></Home>
        },
            {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:"/users",
            element:<Users></Users>
        }
    ]
    }
])

export default router;