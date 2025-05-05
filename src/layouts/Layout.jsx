import React, {  useState } from "react";
import SideBar from "../components/SideBar";

import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";

import Footer from "../components/Footer";


function Layout() {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

  // Function to toggle sidebar on mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };



  return (
    <div className="min-h-screen bg-my-light transition-colors duration-300 ease-in-out dark:bg-gray-950 dark:bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05)_0%,transparent_80%)] ">
      <SideBar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />

      <main className="lg:ms-72">
        <button
          className="lg:hidden fixed top-4 ltr:right-4 rtl:left-4 z-50 p-2 text-gray-600 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-lg  hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 space-x-2"
          onClick={toggleSidebar}
        >
          <Menu size={18} />
        </button>

        <Outlet />
      </main>

      <footer className="md:ms-72 left-1/2 py-4">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
