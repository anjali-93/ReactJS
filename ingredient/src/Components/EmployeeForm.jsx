import { useEffect, useState } from "react";

const STATES = [
  "Madhya Pradesh",
  "Maharashtra",
  "Uttar Pradesh",
  "Karnataka",
  "Delhi",
  "Rajasthan",
];

export default function EmployeeForm({ onSave, onCancel, employee }) {
  const [form, setForm] = useState({
    id: "",
    name: "",
    gender: "",
    dob: "",
    state: "",
    active: true,
    image: "",
  });

  //Refill form when editing
  useEffect(() => {
    if (employee) {
      setForm(employee);
    }
  }, [employee]);

  // Image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const submit = (e) => {
    e.preventDefault();

    if (!form.name || !form.gender || !form.state || !form.dob) {
      alert("Please fill all required fields");
      return;
    }

    onSave({
      ...form,
      id: form.id || `EMP${Date.now()}`,
    });
  };

  return (
    <form onSubmit={submit} className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">
        {employee ? "Edit Employee" : "Add Employee"}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Full Name */}
        <input
          className="input"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        {/* Gender */}
        <select
          className="input"
          value={form.gender}
          onChange={(e) => setForm({ ...form, gender: e.target.value })}
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        {/* Date of Birth */}
        <input
          type="date"
          className="input"
          value={form.dob}
          onChange={(e) => setForm({ ...form, dob: e.target.value })}
        />

        {/* State Dropdown */}
        <select
          className="input"
          value={form.state}
          onChange={(e) => setForm({ ...form, state: e.target.value })}
        >
          <option value="">Select State</option>
          {STATES.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        {/* Image Upload */}
        <div className="md:col-span-2">
          <label className="block text-sm text-gray-600 mb-1">
            Profile Image
          </label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />

          {/* Image Preview */}
          {form.image && (
            <img
              src={form.image}
              alt="Preview"
              className="mt-3 w-20 h-20 rounded-full object-cover border"
            />
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
        >
          Save
        </button>

        <button type="button" onClick={onCancel} className="text-gray-600">
          Cancel
        </button>
      </div>
    </form>
  );
}
