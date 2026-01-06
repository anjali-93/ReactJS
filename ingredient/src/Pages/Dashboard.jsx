import { useEffect, useState } from "react";
import { mockEmployees } from "../data/employees";
import { getEmployees, saveEmployees } from "../utils/storage";
import EmployeeForm from "../Components/EmployeeForm";
import EmployeeTable from "../Components/EmployeeTable";
import SearchFilter from "../Components/SearchFilter";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const openAddForm = () => {
    setSelectedEmployee(null);
    setShowForm(true);
  };

  const openEditForm = (employee) => {
    setSelectedEmployee(employee);
    setShowForm(true);
  };

  const saveEmployee = (emp) => {
    let updated;

    if (selectedEmployee) {
      // EDIT
      updated = employees.map((e) => (e.id === emp.id ? emp : e));
    } else {
      updated = [...employees, { ...emp, id: `EMP${Date.now()}` }];
    }

    setEmployees(updated);
    saveEmployees(updated);
    setShowForm(false);
    setSelectedEmployee(null);
  };

  const toggleStatus = (id) => {
    const updated = employees.map((emp) =>
      emp.id === id ? { ...emp, active: !emp.active } : emp
    );
    setEmployees(updated);
    saveEmployees(updated);
  };

  useEffect(() => {
    const stored = getEmployees();
    if (stored.length === 0) {
      saveEmployees(mockEmployees);
      setEmployees(mockEmployees);
    } else {
      setEmployees(stored);
    }
  }, []);

  const filteredEmployees = employees
    .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
    .filter((e) => (gender ? e.gender === gender : true))
    .filter((e) => (status ? e.active === (status === "active") : true));

  const addEmployee = (emp) => {
    const updated = [...employees, emp];
    setEmployees(updated);
    saveEmployees(updated);
  };

  const deleteEmployee = (id) => {
    if (window.confirm("Delete employee?")) {
      const updated = employees.filter((e) => e.id !== id);
      setEmployees(updated);
      saveEmployees(updated);
    }
  };

  const logout = () => {
    localStorage.removeItem("isAuth");
    window.location.href = "/";
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          gender={gender}
          setGender={setGender}
          status={status}
          setStatus={setStatus}
        />
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg items-center justify-center hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <button
        onClick={() => {
          setSelectedEmployee(null);
          setShowForm(true);
        }}
        className="bg-indigo-600 text-white px-5 py-2 rounded-lg mb-4"
      >
        + Add Employee
      </button>

      {showForm && (
        <EmployeeForm
          onSave={saveEmployee}
          onCancel={() => setShowForm(false)}
          employee={selectedEmployee}
        />
      )}

      <EmployeeTable
        employees={filteredEmployees}
        onEdit={openEditForm}
        onDelete={deleteEmployee}
        onToggle={toggleStatus}
      />
    </div>
  );
}
