import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReportIssue = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: "",
    location: "",
    description: "",
    photos: [],
  });

  const issueCategories = [
    "Pothole",
    "Street Light",
    "Garbage Collection",
    "Water Leak",
    "Broken Sidewalk",
    "Traffic Signal",
    "Graffiti",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Issue report submitted:", formData);
    // Redirect back to dashboard after submission
    navigate("/dashboard");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      photos: files,
    }));
  };

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setFormData((prev) => ({
          ...prev,
          location: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`,
        }));
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
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
            <button className="w-full text-left px-4 py-3 rounded-lg bg-white text-[#2D1B69] font-medium">
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
          <h1 className="text-2xl font-semibold text-gray-800">
            Report an Issue
          </h1>
          <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">👤</span>
          </div>
        </header>

        {/* Form Content */}
        <main className="flex-1 p-6">
          <div className="max-w-2xl mx-auto bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <span className="text-lg mr-3">📄</span>
              <h2 className="text-xl font-semibold">Submit New Issue Report</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Issue Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Issue Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select the type of issue</option>
                  {issueCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter the location of the issue"
                    required
                    className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={detectLocation}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    📍
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Click the location button to auto-detect your current location
                </p>
              </div>

              {/* Upload Photos */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Photos (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-4">📷</div>
                  <p className="text-gray-500 mb-4">
                    Add photos to help us understand the issue better
                  </p>
                  <label className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <span className="mr-2">📁</span>
                    Choose Photos
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                  <p className="text-xs text-gray-400 mt-2">
                    Maximum 5 photos, up to 10MB each
                  </p>
                </div>
                {formData.photos.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">
                      {formData.photos.length} photo(s) selected
                    </p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Please provide a detailed description of the issue..."
                  required
                  rows={6}
                  maxLength={500}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.description.length}/500 characters
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Submit Issue Report
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReportIssue;
