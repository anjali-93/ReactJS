import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  FiHome,
  FiUsers,
  FiGrid,
  FiFileText,
  FiChevronLeft,
} from "react-icons/fi";

export default function Sidebar() {
  const [activeSub, setActiveSub] = useState("list");

  return (
    <>
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 flex items-center gap-2 border-b">
          <button className="p-2 border rounded-full">
            <FiChevronLeft size={18} />
          </button>
          <h1 className="text-xl font-semibold tracking-wide">AMRUTAM</h1>
        </div>

        <ul className="mt-4 space-y-1 text-gray-700">
          <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
            <FiHome className="mr-3" /> Dashboard
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
            <FiUsers className="mr-3" /> Doctor
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
            <FiUsers className="mr-3" /> Patients
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
            <FiGrid className="mr-3" /> Appointment
          </li>

          <li className="bg-green-100 border-l-4 border-green-500 flex items-center px-4 py-2 cursor-pointer">
            <FiGrid className="mr-3 text-green-600" /> Ingredients
          </li>

          {/* Submenu – Ingredients List */}
          <li>
            <NavLink
              to="/ingredients-list"
              className={({ isActive }) =>
                `block pl-8 py-2 rounded-md cursor-pointer ${
                  isActive
                    ? "bg-green-100 text-green-700 font-semibold"
                    : "text-gray-600"
                }`
              }
            >
              Ingredients List
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/add-ingredient/general"
              className={({ isActive }) =>
                `block pl-8 py-2 rounded-md cursor-pointer ${
                  isActive
                    ? "bg-green-100 text-green-700 font-semibold"
                    : "text-gray-600"
                }`
              }
            >
              Add Ingredients
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
