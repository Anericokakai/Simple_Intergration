import ApiKey_page from "../pages/ChildElements/ApiKey_page";
import Documentation from "../pages/ChildElements/Documentation";
import OverviewPage from "../pages/ChildElements/OverviewPage";
import LoginPage from "../pages/LoginPage";

import Home_page from "../pages/Home_page";


const user_routes = [
  {
    element: <Home_page/>,
    path: "/home",
    children:[
        {
            path:"/home/overview",
            element:<OverviewPage/>
        },{
            path:"/home/api_key",
            element:<ApiKey_page/>
        },{
            path:"/home/docs",
            element:<Documentation/>
        }
    ]
  },

  {
    path:"/home/con_access",
    element:<LoginPage/>
  }
];

export default user_routes;
