import { useState, useEffect } from "react";
import StepsNavbar from "./StepsNavbar";

export default function Step3Properties({ goNext }) {
  const [form, setForm] = useState({
    rasa: "",
    guna: "",
    veerya: "",
    vipaka: "",
  });

  const [formulations, setFormulations] = useState([""]);
  const [therapeuticUses, setTherapeuticUses] = useState([""]);

  // Load saved data
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("ayurvedicProperties"));
    if (saved) {
      setForm(saved.form);
      setFormulations(saved.formulations);
      setTherapeuticUses(saved.therapeuticUses);
    }
  }, []);

  const saveData = () => {
    localStorage.setItem(
      "ayurvedicProperties",
      JSON.stringify({ form, formulations, therapeuticUses })
    );

    // Mark step as completed
    const completed = JSON.parse(localStorage.getItem("completedSteps")) || {};
    completed.step3 = true;
    localStorage.setItem("completedSteps", JSON.stringify(completed));

    alert("Saved successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-sm text-green-700 mb-2">
        Ingredient &gt; Add Ingredient
      </h2>

      <StepsNavbar />

      <h2 className="text-lg font-semibold mb-4">Ayurvedic Properties</h2>

      {/* Top Inputs */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {["rasa", "guna", "veerya", "vipaka"].map((field) => (
          <input
            key={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className="border p-2 rounded"
          />
        ))}
      </div>

      {/* Important Formulations */}
      <h3 className="font-medium mb-2">Important Formulations</h3>

      {formulations.map((item, i) => (
        <div key={i} className="flex items-center gap-2 mb-2">
          <button className="border px-2 py-1 rounded text-sm">
            Upload Icon
          </button>

          <input
            className="flex-1 border p-2 rounded"
            value={item}
            onChange={(e) => {
              const copy = [...formulations];
              copy[i] = e.target.value;
              setFormulations(copy);
            }}
          />

          <button
            onClick={() =>
              setFormulations(formulations.filter((_, idx) => idx !== i))
            }
            className="text-red-500"
          >
            ✕
          </button>
        </div>
      ))}

      <button
        onClick={() => setFormulations([...formulations, ""])}
        className="text-green-700 text-sm mt-2"
      >
        + Add Another Item
      </button>

      {/* Therapeutic Uses */}
      <h3 className="font-medium mt-6 mb-2">Therapeutic Uses</h3>

      {therapeuticUses.map((item, i) => (
        <div key={i} className="flex items-center gap-2 mb-2">
          <input
            className="flex-1 border p-2 rounded"
            value={item}
            onChange={(e) => {
              const copy = [...therapeuticUses];
              copy[i] = e.target.value;
              setTherapeuticUses(copy);
            }}
          />

          <button
            onClick={() =>
              setTherapeuticUses(therapeuticUses.filter((_, idx) => idx !== i))
            }
            className="text-red-500"
          >
            ✕
          </button>
        </div>
      ))}

      <button
        onClick={() => setTherapeuticUses([...therapeuticUses, ""])}
        className="text-green-700 text-sm mt-2"
      >
        + Add Another Item
      </button>

      {/* Buttons */}
      <div className="flex gap-4 mt-6 justify-center">
        <button
          onClick={saveData}
          className="bg-green-700 text-white px-6 py-2 rounded"
        >
          Save
        </button>

        <button onClick={goNext} className="bg-gray-100 px-6 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
}
