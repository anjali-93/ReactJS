// import { Routes, Route, Navigate } from "react-router-dom";
// // import Layout from "./Components/Layout";
// // import Dashboard from "./Components/Dashboard";
// // import Step1General from "./Components/ListOfPages/Step1General";
import "./index.css";
// import Login from "./Pages/Login";
// import Dashboard from "./Pages/Dashboard";
// import { isAuthenticated } from "./utils/auth";
// // import Step2Benefits from "./Components/ListOfPages/Step2Benefits";
// // import Step3Properties from "./Components/ListOfPages/Step3Properties";

// function App() {
//   return (
//     <>
//       {/* <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<Navigate to="/ingredients-list" />} />
//           <Route path="/add-ingredient/general" element={<Step1General />} />
//           <Route path="/add-ingredient/benefits" element={<Step2Benefits />} />
//           <Route path="/add-ingredient/properties" element={<Step3Properties />} />
//           <Route path="/ingredients-list" element={<Dashboard />} />
//           <Route path="/add-ingredient" element={<Step1General />} />
//         </Route>
//       </Routes> */}

//       <Routes>
//       <Route path="/" element={<Login />} />
//       <Route
//         path="/dashboard"
//         element={
//           isAuthenticated() ? <Dashboard /> : <Navigate to="/" />
//         }
//       />
//     </Routes>

     
    
//     </>
//   );
// }

// export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./pages/Dashboard";

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("isAuth");
  return isAuth ? children : <Navigate to="/" />;
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

