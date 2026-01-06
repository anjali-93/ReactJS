// import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";

// export default function Layout() {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 bg-gray-100 min-h-screen p-6">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

import StepsNavbar from "./ListOfPages/StepsNavbar";
import Sidebar from "./Sidebar";
// import StepsNavbar from "./StepsNavbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <Sidebar/>

      {/* Main content */}
      <div className="flex-1 p-6">
        
        {/* Steps navbar */}
       
{/* <StepsNavbar/> */}
        {/* 👇 THIS IS THE KEY LINE */}
        <Outlet />

      </div>
    </div>
  );
}

