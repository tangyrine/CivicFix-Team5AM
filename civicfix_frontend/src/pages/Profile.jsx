import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    village: "Greenfield",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});

  const handleLogout = () => {
    // Clear any stored authentication data
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    sessionStorage.clear();

    // Redirect to landing page
    navigate("/");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10,12}$/;
    return phoneRegex.test(phone);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setErrors({});
  };

  const handleSave = async () => {
    const newErrors = {};

    if (!profile.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!validateEmail(profile.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!validatePhone(profile.phone)) {
      newErrors.phone = "Phone number must be 10-12 digits";
    }

    if (!profile.village.trim()) {
      newErrors.village = "Village/Town is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Placeholder for API call
    await updateProfile(profile);
    setIsEditing(false);
    setErrors({});
  };

  const updateProfile = async (profileData) => {
    // Mock API call - replace with actual backend integration
    console.log("Updating profile:", profileData);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const handleInputChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
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
            <button
              onClick={() => navigate("/report-issue")}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Report an Issue
            </button>
            <button
              onClick={() => navigate("/my-complaints")}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              My Complaints
            </button>
            <button
              onClick={() => navigate("/profile")}
              className="w-full text-left px-4 py-3 rounded-lg bg-white text-[#2D1B69] font-medium"
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
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Profile</h1>
          <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">👤</span>
          </div>
        </header>

        <main className="flex-1 p-6 flex justify-center items-center">
          <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-lg max-w-md w-full">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  disabled={!isEditing}
                  className={`w-full p-3 border border-gray-200 rounded ${
                    !isEditing ? "bg-gray-50 text-gray-600" : "bg-white"
                  } ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  disabled={!isEditing}
                  className={`w-full p-3 border border-gray-200 rounded ${
                    !isEditing ? "bg-gray-50 text-gray-600" : "bg-white"
                  } ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, ""); // Only allow numbers
                    handleInputChange("phone", value);
                  }}
                  disabled={!isEditing}
                  className={`w-full p-3 border border-gray-200 rounded ${
                    !isEditing ? "bg-gray-50 text-gray-600" : "bg-white"
                  } ${errors.phone ? "border-red-500" : ""}`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Village/Town:
                </label>
                <input
                  type="text"
                  value={profile.village}
                  onChange={(e) => handleInputChange("village", e.target.value)}
                  disabled={!isEditing}
                  className={`w-full p-3 border border-gray-200 rounded ${
                    !isEditing ? "bg-gray-50 text-gray-600" : "bg-white"
                  } ${errors.village ? "border-red-500" : ""}`}
                />
                {errors.village && (
                  <p className="text-red-500 text-sm mt-1">{errors.village}</p>
                )}
              </div>

              <div className="flex justify-center gap-4 pt-4">
                {!isEditing ? (
                  <button
                    onClick={handleEdit}
                    className="px-6 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={handleSave}
                    className="px-6 py-2 bg-[#2D1B69] text-white rounded-lg hover:bg-purple-800 transition-colors"
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
