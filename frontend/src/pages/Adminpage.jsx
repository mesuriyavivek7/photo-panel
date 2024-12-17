import React, { useState } from "react";

export default function AdminPage() {
  // State to toggle sidebar visibility
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`w-64 h-screen bg-white shadow-md p-4 transition-all duration-300 ease-in-out ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-2xl font-bold text-gray-700">
            <span className="text-blue-800">Photo-Panel</span>
          </h1>
        </div>

        {/* Main Section */}
        <ul className="space-y-3">
          <li className="text-gray-400 uppercase text-xs font-semibold">Main</li>
          <li className="text-blue-500 flex items-center space-x-2 cursor-pointer hover:text-blue-700">
            <span>🏠</span>
            <span>Dashboards</span>
          </li>

          <li className="text-gray-400 uppercase text-xs font-semibold mt-4">
            Web Apps
          </li>
          <li className="flex items-center justify-between cursor-pointer hover:text-blue-700">
            <div className="flex items-center space-x-2">
              <span>📊</span>
              <span>Apps</span>
            </div>
          </li>

          <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-700">
            <span>📚</span>
            <span>Nested Menu</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="flex justify-between bg-white shadow-md p-4 h-[70px] w-full">
          {/* Sidebar Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="text-black text-2xl p-1"
          >
            {sidebarOpen ? <span>&#9776;</span> : <span>&#9776;</span>} {/* Hamburger (3 lines) */}
          </button>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="w-1/2 sm:w-96 py-0 px-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-80"
          />

          {/* Profile Icon (optional) */}
          <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full ml-4">
            <span className="text-white">P</span> {/* Profile Icon */}
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6">
          {/* Your content can go here */}
        </div>
      </div>
    </div>
  );
}
