import React from "react";

const Dashboard = () => {
  const recentIssues = [
    {
      id: 1,
      type: "Pothole",
      location: "Main Street & 5th Ave",
      distance: "0.2 miles away",
      reporter: "John D",
      time: "2 hours ago",
      status: "In Progress",
      statusColor: "bg-yellow-400",
    },
    {
      id: 2,
      type: "Street Light",
      location: "Park Avenue",
      distance: "0.4 miles away",
      reporter: "Sarah M",
      time: "1 day ago",
      status: "Pending",
      statusColor: "bg-red-400",
    },
    {
      id: 3,
      type: "Garbage",
      location: "Oak Street",
      distance: "0.6 miles away",
      reporter: "Mike R",
      time: "3 days ago",
      status: "Resolved",
      statusColor: "bg-green-400",
    },
  ];

  const issueSummary = [
    { label: "Total Reported", count: 12, color: "bg-blue-500", icon: "📋" },
    { label: "Resolved", count: 8, color: "bg-green-500", icon: "✅" },
    { label: "In Progress", count: 3, color: "bg-yellow-500", icon: "⏳" },
    { label: "Pending", count: 1, color: "bg-red-500", icon: "⚠️" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#2D1B69] text-white flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold">CivicFix</h1>
        </div>

        <nav className="flex-1 px-4">
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-3 rounded-lg bg-white text-[#2D1B69] font-medium">
              Dashboard
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Report an Issue
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              My Complaints
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Profile
            </button>
          </div>
        </nav>

        <div className="p-4">
          <button className="w-full px-4 py-2 bg-white text-[#2D1B69] rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">👤</span>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <div className="flex items-center mb-2">
                  <span className="text-lg mr-2">➕</span>
                  <h3 className="font-semibold">Report New Issue</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Submit a new problem in your area
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center mb-2">
                  <span className="text-lg mr-2">📄</span>
                  <h3 className="font-semibold text-gray-800">
                    View My Reports
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Check status of your submissions
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center mb-2">
                  <span className="text-lg mr-2">👥</span>
                  <h3 className="font-semibold text-gray-800">
                    Community Feed
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  See what others are reporting
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center mb-2">
                  <span className="text-lg mr-2">📍</span>
                  <h3 className="font-semibold text-gray-800">
                    Find Nearby Issues
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Explore problems in your vicinity
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Issues Near You */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">
                  Recent Issues Near You
                </h3>
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  View Map
                </button>
              </div>

              <div className="space-y-4">
                {recentIssues.map((issue) => (
                  <div
                    key={issue.id}
                    className="flex items-start space-x-3 p-3 border border-gray-100 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-gray-400 mt-2"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-gray-800">
                          {issue.type}
                        </h4>
                        <span
                          className={`px-2 py-1 rounded text-xs text-white ${issue.statusColor}`}
                        >
                          {issue.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        {issue.location}
                      </p>
                      <p className="text-xs text-gray-500">{issue.distance}</p>
                      <p className="text-xs text-gray-500">
                        by {issue.reporter} • {issue.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Issues Summary */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4">
                Your Issues Summary
              </h3>

              <div className="space-y-3">
                {issueSummary.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border border-gray-100 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white text-sm`}
                      >
                        {item.icon}
                      </div>
                      <span className="font-medium text-gray-800">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-xl font-bold text-gray-800">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
