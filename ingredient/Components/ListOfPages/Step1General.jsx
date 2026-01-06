import StepsNavbar from "./StepsNavbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Step1General() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };


  return (
    <div>
      <h2 className="text-sm text-green-700 mb-2">
        Ingredient &gt; Add Ingredient
      </h2>

      <StepsNavbar />

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">General Information</h3>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium">Ingredient Name *</label>
            <input className="w-full border p-2 rounded mt-1" />
          </div>

          <div>
            <label className="text-sm font-medium">Scientific Name *</label>
            <input className="w-full border p-2 rounded mt-1" />
          </div>

          <div>
            <label className="text-sm font-medium">Sanskrit Name *</label>
            <input className="w-full border p-2 rounded mt-1" />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-sm font-medium">
            Ingredient Description *
          </label>
          <input className="w-full border p-2 rounded mt-1" />
        </div>

        {/* IMAGE UPLOAD */}
        <div className="mt-6">
          <label className="text-sm font-medium">Upload Image</label>

          <div className="mt-2 border-2 border-dashed border-green-300 rounded-lg p-4 w-40 h-40 flex items-center justify-center">
            {image ? (
              <img src={image} className="h-full w-full object-cover rounded" />
            ) : (
              <label className="cursor-pointer text-gray-400">
                <input type="file" onChange={handleImage} className="hidden" />
                Upload Image
              </label>
            )}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-green-600 text-white px-8 py-2 rounded cursor-pointer">
            Save
          </button>
          <button
            onClick={() => navigate("/add-ingredient/benefits")}
            className="bg-gray-200 px-8 py-2 rounded cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
