import { useState } from "react";
import StepsNavbar from "./StepsNavbar";
import { useNavigate } from "react-router-dom";

export default function Step2Benefits() {
  const navigate = useNavigate();
  const [whyToUse, setWhyToUse] = useState([""]);
  const [benefits, setBenefits] = useState([""]);
  const [prakriti, setPrakriti] = useState({
    vata: "",
    vataReason: "",
    kapha: "",
    kaphaReason: "",
    pitta: "",
    pittaReason: "",
  });

  const handleWhyChange = (index, value) => {
    const updated = [...whyToUse];
    updated[index] = value;
    setWhyToUse(updated);
  };

  const handleBenefitChange = (index, value) => {
    const updated = [...benefits];
    updated[index] = value;
    setBenefits(updated);
  };

  const addWhyItem = () => setWhyToUse([...whyToUse, ""]);
  const addBenefitItem = () => setBenefits([...benefits, ""]);

  const addEmoji = (index) => {
    const updated = [...benefits];
    updated[index] = updated[index] + " 😊";
    setBenefits(updated);
  };

  const saveData = () => {
    const data = { whyToUse, benefits, prakriti };
    localStorage.setItem("ingredient_benefits", JSON.stringify(data));
    alert("Benefits saved successfully");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-sm text-green-700 mb-2">
        Ingredient &gt; Add Ingredient
      </h2>

      <StepsNavbar />
      {/* Why To Use */}
      <h3 className="font-semibold mb-3">Why To Use?</h3>
      {whyToUse.map((item, idx) => (
        <div key={idx} className="flex gap-2 mb-3">
          <input
            value={item}
            onChange={(e) => handleWhyChange(idx, e.target.value)}
            className="flex-1 border rounded-lg p-2"
            placeholder="Enter here"
          />
        </div>
      ))}
      <button onClick={addWhyItem} className="text-green-600 text-sm mb-6">
        + Add Another Item
      </button>

      {/* Prakriti Impact */}
      <h3 className="font-semibold mb-3">Prakriti Impact</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="text-sm">Vata *</label>
          <input
            className="w-full border rounded p-2"
            onChange={(e) => setPrakriti({ ...prakriti, vata: e.target.value })}
          />
          <label className="text-sm mt-2">Vata Reason *</label>
          <input
            className="w-full border rounded p-2 "
            placeholder="Vata Reason"
            onChange={(e) =>
              setPrakriti({ ...prakriti, vataReason: e.target.value })
            }
          />
        </div>
        <div>
          <label className="text-sm">Kapha *</label>
          <input
            className="w-full border rounded p-2"
            onChange={(e) =>
              setPrakriti({ ...prakriti, kapha: e.target.value })
            }
          />
          <label className="text-sm">Kapha Reason *</label>
          <input
            className="w-full border rounded p-2 "
            placeholder="Kapha Reason"
            onChange={(e) =>
              setPrakriti({ ...prakriti, kaphaReason: e.target.value })
            }
          />
        </div>
        <div>
          <label className="text-sm">Pitta *</label>
          <input
            className="w-full border rounded p-2"
            onChange={(e) =>
              setPrakriti({ ...prakriti, pitta: e.target.value })
            }
          />
          <label className="text-sm">Pitta Reason *</label>
          <input
            className="w-full border rounded p-2"
            placeholder="Pitta Reason"
            onChange={(e) =>
              setPrakriti({ ...prakriti, pittaReason: e.target.value })
            }
          />
        </div>
      </div>

      {/* Benefits */}
      <h3 className="font-semibold mb-3">Benefits</h3>
      {benefits.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2 mb-3">
          <button
            onClick={() => addEmoji(idx)}
            className="border rounded-full px-3 py-1 text-sm bg-green-50"
          >
            😊 Add Emoji
          </button>
          <input
            value={item}
            onChange={(e) => handleBenefitChange(idx, e.target.value)}
            className="flex-1 border rounded-lg p-2"
            placeholder="Enter benefit"
          />
        </div>
      ))}
      <button onClick={addBenefitItem} className="text-green-600 text-sm mb-8">
        + Add Another Item
      </button>

      {/* Actions */}
      <div className="flex justify-center gap-4">
        <button
          onClick={saveData}
          className="bg-green-700 text-white px-8 py-2 rounded-lg cursor-pointer"
        >
          Save
        </button>
        <button
          onClick={() => navigate("/add-ingredient/properties")}
          className="bg-gray-200 px-8 py-2 rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}
