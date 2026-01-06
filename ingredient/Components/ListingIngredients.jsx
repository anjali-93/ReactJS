import React, { useState } from "react";
import Sidebar from "./Sidebar";

const steps = [
  "General Information",
  "Benefits",
  "Properties",
  "Other",
  "Overview",
];

export default function ListingIngredients() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="flex">
         <Sidebar/>
    <div className="p-6 font-inter">
       
      {/* Steps Bar */}
<div className="flex justify-center mb-8">
  <div className="flex items-center gap-12">
    {steps.map((item, index) => (
      <div
        key={index}
        onClick={() => setCurrentStep(index)}
        className="cursor-pointer text-center"
      >
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 text-sm font-semibold
            ${currentStep === index
              ? "bg-green-700 text-white border-green-700"
              : "border-gray-400 text-gray-700"
            }`}
        >
          {index + 1}
        </div>
        <p className="mt-2 text-sm text-gray-700">{item}</p>
      </div>
    ))}
  </div>
</div>


      {/* Card */}
      <div className="bg-white p-6 shadow-md rounded-xl border border-gray-200">
        {/* Step 1 — General Info */}
        {currentStep === 0 && (
          <>
            <h2 className="text-xl font-semibold mb-4">General Information</h2>

            {/* 3 Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium">Ingredient Name *</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  placeholder="Label"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Scientific Name *</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  placeholder="Label"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Sanskrit Name *</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  placeholder="Label"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="text-sm font-medium">Ingredient Description *</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 h-24"
                placeholder="Description..."
              ></textarea>
            </div>

            {/* Upload Box */}
            <div className="w-40 h-40 border-2 border-dashed border-green-300 rounded-lg flex items-center justify-center bg-green-50 text-gray-600 mb-6">
              Upload Image
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-green-700 text-white px-6 py-2 rounded-lg">
                Save
              </button>

              <button
                onClick={() => setCurrentStep(1)}
                className="bg-green-100 text-green-700 px-6 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Step 2 */}
        {currentStep === 1 && (
          <div className="py-10 text-center">
            <h2 className="text-xl font-semibold mb-4">Benefits</h2>

            <button
              className="bg-green-100 text-green-700 px-6 py-2 rounded-lg"
              onClick={() => setCurrentStep(2)}
            >
              Next
            </button>
          </div>
        )}

        {/* Step 3 */}
        {currentStep === 2 && (
          <div className="py-10 text-center">
            <h2 className="text-xl font-semibold mb-4">Properties</h2>

            <button
              className="bg-green-100 text-green-700 px-6 py-2 rounded-lg"
              onClick={() => setCurrentStep(3)}
            >
              Next
            </button>
          </div>
        )}

        {/* Step 4 */}
        {currentStep === 3 && (
          <div className="py-10 text-center">
            <h2 className="text-xl font-semibold mb-4">Other</h2>

            <button
              className="bg-green-100 text-green-700 px-6 py-2 rounded-lg"
              onClick={() => setCurrentStep(4)}
            >
              Next
            </button>
          </div>
        )}

        {/* Step 5 */}
        {currentStep === 4 && (
          <div className="py-10 text-center">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-600">Final summary...</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
