import React, { useState } from "react";
import Img2 from "../assets/aperture.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
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
        className={`w-56 h-screen bg-white shadow-md transition-all duration-300 ease-in-out ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        {/* Logo */}
        <div className="flex p-4 items-center gap-2 justify-center">
          <img alt="logo" className="flex h-6 w-6 " src={Img2} />
          <span className=" font-playwrite text-xl text-blue-800">
            Photo-Panel
          </span>
        </div>
        <hr className="h-.5 bg-black"></hr>

        {/* Main Section */}
        <ul className="space-y-3 p-4">
          <li className="text-gray-400 uppercase text-[10.4px] font-semibold">
            Main
          </li>
          <span className="text-blue-700 text-[12.8px] tracker-wider font-semibold  flex items-center gap-1 space-x-2 cursor-pointer ">
            <HomeOutlinedIcon style={{ fontSize: "1.2rem" }} />
            Dashboards
          </span>

          <li className="text-gray-400 uppercase text-[10.4px]  font-semibold mt-4">
            Web Apps
          </li>

          <li className="flex text-[11.8px] cursor-pointer font-medium  hover:text-blue-700 gap-1 items-center space-x-2">
            <FileUploadOutlinedIcon style={{ fontSize: "1.2rem" }} /> Upload
            Photos
          </li>

          <li className="flex text-[11.8px]  font-medium items-center gap-1 space-x-2 cursor-pointer hover:text-blue-700">
            <CollectionsOutlinedIcon style={{ fontSize: "1.2rem" }} /> Showcase
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="flex justify-between items-center bg-transparent  p-4 h-[60px] w-full">
          <div className="flex items-center gap-4">
            {/* Sidebar Toggle Button */}
            <button
              onClick={toggleSidebar}
              className="text-gray-600 text-2xl p-1"
            >
              {sidebarOpen ? (
                <span>
                  <ListOutlinedIcon style={{ fontSize: "1.4rem" }} />
                </span>
              ) : (
                <span>
                  <CloseOutlinedIcon style={{ fontSize: "1.4rem" }} />
                </span>
              )}
              {/* Hamburger (3 lines) */}
            </button>

            {/* Search Bar */}
            <div className="flex items-center justify-between w-60 sm:w-90 py-1 px-2 rounded-md bg-white ">
              <input
                type="text"
                placeholder="Search..."
                className="w-full  outline-none text-xs"
              />
              <SearchOutlinedIcon className="text-gray-600"  style={{ fontSize: "1.4rem" }}  />
            </div>
          </div>

          {/* Profile Icon (optional) */}
          <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full ml-4">
            <span className="text-white">P</span> {/* Profile Icon */}
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6">{/* Your content can go here */}</div>
      </div>
    </div>
  );
}
