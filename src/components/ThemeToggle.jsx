import { Moon, Sun } from "lucide-react";
import React from "react";

 
// Assuming Sun and Moon are components you import, e.g., from a library like react-icons
// import { Sun, Moon } from 'your-icon-library';

function ThemeToggle({theme , toggleTheme}) {

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 ltr:left-4 rtl:right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default ThemeToggle; // Make sure to export your component
