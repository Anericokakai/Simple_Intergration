import ApiKey_page from "../pages/ChildElements/ApiKey_page";
import Documentation from "../pages/ChildElements/Documentation";
import OverviewPage from "../pages/ChildElements/OverviewPage";
import LoginPage from "../pages/LoginPage";
 import { RequireAuth } from "../helpers/ProtectRoutes";
import Home_page from "../pages/Home_page";
import CreateAccount from "../pages/Create_Account";



const user_routes = [
  {
    element: <Home_page/>,
    path: "/home",
    children:[
        {
            path:"/home/overview",
            element:<RequireAuth> <OverviewPage/></RequireAuth>
        },{
            path:"/home/api_key",
            element:<RequireAuth><ApiKey_page/></RequireAuth>
        },{
            path:"/home/docs",
            element:<Documentation/>
        }
    ]
  },

  {
    path:"/con_access",
    element:<LoginPage/>
  },{
    path:'/create_acc',
    element:<CreateAccount/>
  }
 
];

export default user_routes;
