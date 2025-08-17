import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const mockComplaints = [
  {
    id: "ISS-2024-001",
    title: "Large pothole on Main Street",
    severity: "high",
    category: "Potholes",
    location: "Main Street & 5th Avenue",
    updated: "2024-01-20",
    description:
      "Deep pothole causing damage to vehicles. Approximately 2 feet wide and 6 inches deep.",
    submitted: "2024-01-15",
    photos: 2,
    status: "Resolved",
  },
  {
    id: "ISS-2024-002",
    title: "Broken street light on Park Avenue",
    severity: "medium",
    category: "Street Lights",
    location: "Park Avenue near Oak Street",
    updated: "2024-01-19",
    description:
      "Street light has been flickering for several days and now completely out.",
    submitted: "2024-01-18",
    photos: 1,
    status: "In Progress",
  },
  {
    id: "ISS-2024-003",
    title: "Overflowing garbage bin at Oak Street",
    severity: "low",
    category: "Garbage",
    location: "Oak Street & 3rd",
    updated: "2024-01-10",
    description:
      "Garbage not collected for two weeks, causing smell and pests.",
    submitted: "2024-01-08",
    photos: 3,
    status: "Pending",
  },
];

const statusOptions = ["All", "Pending", "In Progress", "Resolved"];
const categoryOptions = [
  "All Categories",
  "Potholes",
  "Street Lights",
  "Garbage",
  "Power Cuts",
  "Water Issues",
  "Traffic Signals",
];

const MyComplaints = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState(mockComplaints);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  const handleLogout = () => {
    // Clear any stored authentication data
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    sessionStorage.clear();

    // Redirect to landing page
    navigate("/");
  };

  const counts = useMemo(() => {
    const c = {
      All: complaints.length,
      Pending: 0,
      "In Progress": 0,
      Resolved: 0,
    };
    complaints.forEach((it) => {
      if (it.status === "Pending") c.Pending += 1;
      if (it.status === "In Progress") c["In Progress"] += 1;
      if (it.status === "Resolved") c.Resolved += 1;
    });
    return c;
  }, [complaints]);

  const filtered = useMemo(() => {
    return complaints.filter((c) => {
      if (statusFilter !== "All" && c.status !== statusFilter) return false;
      if (categoryFilter !== "All Categories" && c.category !== categoryFilter)
        return false;
      if (!search) return true;
      const q = search.toLowerCase();
      return (
        c.title.toLowerCase().includes(q) ||
        c.id.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
      );
    });
  }, [complaints, statusFilter, categoryFilter, search]);

  const handleViewDetails = (id) => {
    navigate(`/complaints/${id}`);
  };

  const handleUpdate = (id) => {
    // placeholder - open update form later
    alert(`Open update form for ${id}`);
  };

  const handleClose = (id) => {
    setComplaints((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "Resolved" } : c))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar (same structure as Dashboard) */}
      <div className="w-64 bg-[#2D1B69] text-white flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold">CivicFix</h1>
        </div>

        <nav className="flex-1 px-4">
          <div className="space-y-2">
            <button
              onClick={() => navigate("/dashboard")}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/report-issue")}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Report an Issue
            </button>
            <button
              onClick={() => navigate("/my-complaints")}
              className="w-full text-left px-4 py-3 rounded-lg bg-white text-[#2D1B69] font-medium"
            >
              My Complaints
            </button>
            <button
              onClick={() => navigate("/profile")}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Profile
            </button>
          </div>
        </nav>

        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-white text-[#2D1B69] rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            View your past complaints
          </h1>
        </header>

        <main className="flex-1 p-6">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-4">
                <input
                  type="search"
                  placeholder="Search complaints by description or tracking ID..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 p-3 border border-gray-200 rounded"
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  {statusOptions.map((s) => (
                    <button
                      key={s}
                      onClick={() => setStatusFilter(s)}
                      className={`px-3 py-1 rounded-full text-sm border ${
                        statusFilter === s
                          ? "bg-black text-white"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      {s}{" "}
                      {s !== "All" && (
                        <span className="ml-1 text-xs text-gray-500">
                          {counts[s] ?? 0}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                <div className="ml-4 flex items-center gap-2">
                  {categoryOptions.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategoryFilter(cat)}
                      className={`px-3 py-1 rounded-full text-sm border ${
                        categoryFilter === cat
                          ? "bg-black text-white"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {filtered.map((c) => (
                <div
                  key={c.id}
                  className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold">{c.title}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
                          {c.severity}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        ID: {c.id}
                      </div>
                    </div>

                    <div className="text-right">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          c.status === "Resolved"
                            ? "bg-green-100 text-green-700"
                            : c.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {c.status.toLowerCase()}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-gray-600">
                    <div className="mb-2">
                      📍 {c.location} • {c.category} • Updated {c.updated}
                    </div>
                    <p className="text-gray-700">{c.description}</p>
                    <div className="mt-3 text-xs text-gray-400">
                      Submitted on {c.submitted} • {c.photos} photo(s)
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end gap-3">
                    <button
                      onClick={() => handleViewDetails(c.id)}
                      className="px-3 py-2 bg-white border rounded text-sm"
                    >
                      👁 View Details
                    </button>
                    {(c.status === "Pending" || c.status === "In Progress") && (
                      <>
                        <button
                          onClick={() => handleUpdate(c.id)}
                          className="px-3 py-2 bg-white border rounded text-sm"
                        >
                          ✏️ Update
                        </button>
                        <button
                          onClick={() => handleClose(c.id)}
                          className="px-3 py-2 bg-white border rounded text-sm"
                        >
                          ✖ Close
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyComplaints;
