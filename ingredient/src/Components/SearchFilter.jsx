export default function SearchFilter({
  search,
  setSearch,
  gender,
  setGender,
  status,
  setStatus,
}) {
  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      <input
        className="input w-64"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="input w-48"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <select
        className="input w-48"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
}
