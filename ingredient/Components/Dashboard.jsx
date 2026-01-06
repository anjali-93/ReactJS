import { useState } from "react";
// import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  const [ingredients] = useState([
    {
      name: "Khus Khus",
      description:
        "A versatile herb that enhances fertility and aids in treating insomnia. It has a calming...",
      status: "Active",
    },
    {
      name: "Rakta Chandan",
      description:
        "Also known as Red Sandalwood, this herb is prized for its skin-enhancing properties...",
      status: "Active",
    },
    {
      name: "Swarn Bhasm",
      description:
        "A metallic preparation in Ayurveda, believed to enhance stamina, strength...",
      status: "Active",
    },
    {
      name: "Giloy",
      description:
        "A powerful immunomodulator that boosts overall immunity. It also aids in digestion...",
      status: "Active",
    },
    {
      name: "Bhringraj",
      description:
        "Known as the 'King of Hair', this herb is renowned for preventing hair loss...",
      status: "Active",
    },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* ---------------------- SIDEBAR ---------------------- */}
      {/* <Sidebar/> */}

      {/* ---------------------- MAIN CONTENT ---------------------- */}
      <div className="flex-1 p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">Ingredients</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-right">
              <p className="font-medium">Name</p>
              <p className="text-xs text-gray-500">Department</p>
            </span>
            <img
              src="https://i.pravatar.cc/40"
              className="h-10 w-10 rounded-full"
            />
          </div>
        </div>
        <Outlet/>

        {/* Card */}
        <div className="bg-white p-5 rounded-lg shadow">

          {/* List Header */}
          <div className="flex justify-between mb-5">
            <h3 className="text-md font-semibold">Ingredients List</h3>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search here"
                className="border rounded px-3 py-2 w-64"
              />

              <button className="bg-green-600 text-white px-4 py-2 rounded">
                +
              </button>
            </div>
          </div>

          {/* Table */}
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="text-left p-3">Ingredients</th>
                <th className="text-left p-3">Description</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {ingredients.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3 text-gray-600">{item.description}</td>
                  <td className="p-3">
                    <span className="text-green-600 font-medium">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-end mt-4 items-center gap-3">
            <button className="px-2 py-1 border rounded">{"<"}</button>
            <button className="px-3 py-1 bg-green-600 text-white rounded">1</button>
            <button className="px-3 py-1 border rounded">2</button>
            <button className="px-3 py-1 border rounded">3</button>
            <button className="px-2 py-1 border rounded">{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}


