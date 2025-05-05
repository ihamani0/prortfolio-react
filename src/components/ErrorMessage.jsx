import React from "react";

function ErrorMessage({ message="Somthing Happend Please Refresh Page" }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-4xl   text-gray-700 dark:text-red-300 font-dancing-script ">{message}</p>
    </div>
  );
}

export default ErrorMessage;
