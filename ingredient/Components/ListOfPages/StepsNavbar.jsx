import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function StepsNavbar() {
 
  const steps = [
  { id: 1, key: "general", label: "General Information", path: "/add-ingredient/general" },
  { id: 2, key: "benefits", label: "Benefits", path: "/add-ingredient/benefits" },
  { id: 3, key: "properties", label: "Properties", path: "/add-ingredient/properties" },
  { id: 4, key: "other", label: "Other", path: "/add-ingredient/other" },
  { id: 5, key: "overview", label: "Overview", path: "/add-ingredient/overview" },
];
 const [completedSteps, setCompletedSteps] = useState({});
  const location = useLocation();
  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("completedSteps")) || {};
  setCompletedSteps(saved);
}, [location.pathname]);

  return (
    <div className="flex items-center justify-center gap-10 py-5">
      {steps.map((s) => {
        const active = location.pathname === s.path;
        return (
          <Link key={s.id} to={s.path} className="flex flex-col items-center">
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center border 
              ${active ? "border-green-600 bg-green-600 text-white" : "border-gray-400 text-gray-500"}`}
            >
              {String(s.id).padStart(2, "0")}
            </div>
            <p className={`text-sm mt-2 ${active ? "text-green-700 font-semibold" : "text-gray-600"}`}>
              {s.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
