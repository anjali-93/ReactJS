export default function EmployeeTable({
  employees,
  onEdit,
  onDelete,
  onToggle,
}) {
  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Gender</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{emp.id}</td>
              <td className="p-3 flex items-center gap-3">
                {emp.image && (
                  <img
                    src={emp.image}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                {emp.name}
              </td>
              <td className="p-3">{emp.state}</td>
              <td className="p-3">{emp.gender}</td>

              {/* TOGGLE */}
              <td className="p-3">
                <button
                  onClick={() => onToggle(emp.id)}
                  className={`w-12 h-6 rounded-full relative transition ${
                    emp.active ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
                      emp.active ? "translate-x-6" : ""
                    }`}
                  />
                </button>
              </td>

              {/* ACTIONS */}
              <td className="p-3 space-x-3">
                <button onClick={() => onEdit(emp)} className="text-blue-600">
                  Edit
                </button>

                <button
                  onClick={() => onDelete(emp.id)}
                  className="text-red-600"
                >
                  Delete
                </button>

                <button
                  onClick={() => window.print()}
                  className="text-gray-600"
                >
                  Print
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
