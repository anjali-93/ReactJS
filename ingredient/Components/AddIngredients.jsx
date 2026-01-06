import { FiChevronLeft } from "react-icons/fi";
import Sidebar from "./Sidebar";

export default function AddIngredients() {
  return (
    <div className="min-h-screen bg-[#F6F7FA] flex">

      {/* Sidebar — You already have it, so keeping space */}
      <div className="w-64">
        <Sidebar/>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Top Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <FiChevronLeft className="cursor-pointer" size={22} />
            <span className="text-sm">Ingredients &nbsp;›&nbsp; </span>
            <span className="text-sm font-semibold text-gray-800">
              Add Ingredients
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="font-medium">Name</p>
              <p className="text-xs text-gray-500">Department</p>
            </div>
            <img
              src="https://i.pravatar.cc/50"
              className="h-10 w-10 rounded-full"
              alt="user"
            />
          </div>
        </div>

        {/* Card Box */}
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">

          <h2 className="text-lg font-semibold mb-6">Add Ingredients</h2>

          <div className="grid grid-cols-2 gap-6">

            {/* Ingredient Name */}
            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Ingredient Name *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-100"
                placeholder="Enter ingredient name..."
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Specialty Description *
              </label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-100"
                placeholder="Enter description..."
              ></textarea>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Status *
              </label>

              <div className="flex items-center gap-6 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="status" defaultChecked />
                  <span>Active</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="status" />
                  <span>Inactive</span>
                </label>
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Upload Image *
              </label>

              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  placeholder="No file selected"
                  className="border border-gray-300 px-3 py-2 w-full rounded-lg"
                  disabled
                />
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                  Select
                </button>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-8">
            <button className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 cursor-pointer">
              Clear
            </button>

            <button className="px-6 py-2 rounded-lg bg-green-700 text-white cursor-pointer">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
