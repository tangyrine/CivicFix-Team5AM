import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/layout/Footer";

const Emergency = () => {
  const [emergencyType, setEmergencyType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const navigate = useNavigate();

  const emergencyTypes = [
    { id: "medical", label: "Medical Emergency", icon: "" },
    { id: "fire", label: "Fire", icon: "" },
    { id: "police", label: "Police/Security", icon: "" },
    { id: "natural", label: "Natural Disaster", icon: "" },
    { id: "infrastructure", label: "Critical Infrastructure", icon: "" },
    { id: "other", label: "Other Emergency", icon: "" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmation(true);

      // Reset form
      setEmergencyType("");
      setDescription("");
      setLocation("");
      setContactInfo("");
    }, 2000);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    navigate("/");
  };

  const getUserLocation = () => {
    setIsLoadingLocation(true);

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      setIsLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Use reverse geocoding to get address from coordinates (optional)
        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        )
          .then((response) => response.json())
          .then((data) => {
            const address =
              data.display_name ||
              `Lat: ${latitude.toFixed(6)}, Long: ${longitude.toFixed(6)}`;
            setLocation(address);
            setIsLoadingLocation(false);
          })
          .catch((error) => {
            console.error("Error getting address:", error);
            setLocation(
              `Lat: ${latitude.toFixed(6)}, Long: ${longitude.toFixed(6)}`
            );
            setIsLoadingLocation(false);
          });
      },
      (error) => {
        console.error("Error getting location:", error);
        alert(`Error getting your location: ${error.message}`);
        setIsLoadingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50">
        <Link 
          to="/"
          className="flex items-center justify-center bg-white shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 hover:bg-gray-100 transition-colors"
          aria-label="Back to home"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-5 h-5 sm:w-6 sm:h-6 text-red-600"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
        </Link>
      </div>

      <main className="flex-grow pt-12 sm:pt-16 pb-8 px-3 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 px-4 sm:px-6 py-3 sm:py-4">
              <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                <span className="text-2xl sm:text-3xl mr-2"></span> Emergency Reporting
              </h1>
              <p className="text-sm sm:text-base text-white text-opacity-90 mt-1">
                For immediate assistance in life-threatening situations, always
                call emergency services first.
              </p>
            </div>

            {!showConfirmation ? (
              <form onSubmit={handleSubmit} className="px-4 sm:px-6 py-5 sm:py-8 space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Emergency Type *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {emergencyTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        className={`flex items-center justify-center p-3 sm:p-4 border rounded-lg ${
                          emergencyType === type.id
                            ? "bg-red-100 border-red-500 text-red-700"
                            : "bg-white border-gray-200 hover:bg-gray-50"
                        } transition-colors`}
                        onClick={() => setEmergencyType(type.id)}
                      >
                        <span className="text-xl sm:text-2xl mr-2">{type.icon}</span>
                        <span className="text-sm sm:text-base">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Description of Emergency *
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Please describe the emergency situation in detail..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Location *
                  </label>
                  <input
                    id="location"
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter the exact location of the emergency"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                  <button
                    type="button"
                    className="mt-2 text-red-600 hover:text-red-800 text-sm flex items-center"
                    onClick={getUserLocation}
                    disabled={isLoadingLocation}
                  >
                    {isLoadingLocation ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Getting location...
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        Use my current location
                      </>
                    )}
                  </button>
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Contact Information *
                  </label>
                  <input
                    id="contact"
                    type="text"
                    required
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="Phone number where you can be reached"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div className="flex items-start sm:items-center">
                  <input
                    id="confirm"
                    type="checkbox"
                    required
                    className="h-4 w-4 mt-1 sm:mt-0 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <label
                    htmlFor="confirm"
                    className="ml-2 block text-xs sm:text-sm text-gray-700"
                  >
                    I confirm this is a genuine emergency and the information
                    provided is accurate.
                  </label>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || !emergencyType}
                    className="w-full px-5 sm:px-6 py-2.5 sm:py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Submit Emergency Report"
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="px-4 sm:px-6 py-6 sm:py-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 sm:h-8 sm:w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg sm:text-xl font-medium text-gray-900">
                  Emergency Report Submitted
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Your emergency has been reported. A representative will
                  contact you shortly at the number provided. If this is a
                  life-threatening emergency, please also call emergency
                  services directly.
                </p>
                <div className="mt-6">
                  <button
                    onClick={handleCloseConfirmation}
                    className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Return to Home
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 sm:mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4">
            <h2 className="text-base sm:text-lg font-medium text-yellow-800 flex items-center">
              <span className="text-lg sm:text-xl mr-2"></span> Emergency Contact Numbers
            </h2>
            <ul className="mt-2 sm:mt-3 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li className="flex flex-wrap sm:flex-nowrap">
                <span className="font-semibold w-full sm:w-32 mb-1 sm:mb-0">Emergency Services:</span>
                <span>112</span>
              </li>
              <li className="flex flex-wrap sm:flex-nowrap">
                <span className="font-semibold w-full sm:w-32 mb-1 sm:mb-0">Police:</span>
                <span>555-123-4567</span>
              </li>
              <li className="flex flex-wrap sm:flex-nowrap">
                <span className="font-semibold w-full sm:w-32 mb-1 sm:mb-0">Fire Department:</span>
                <span>555-765-4321</span>
              </li>
              <li className="flex flex-wrap sm:flex-nowrap">
                <span className="font-semibold w-full sm:w-32 mb-1 sm:mb-0">Ambulance:</span>
                <span>555-987-6543</span>
              </li>
              <li className="flex flex-wrap sm:flex-nowrap">
                <span className="font-semibold w-full sm:w-32 mb-1 sm:mb-0">Poison Control:</span>
                <span>800-222-1222</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Emergency;
