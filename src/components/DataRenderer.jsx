import React from "react";
import Spinner from "../ui/Spinner";

function DataRenderer({ children, data, isLoading, error }) {
  if (isLoading) {
    return <Spinner />;
  }

  if (error && !isLoading) {
    return <div className="text-red-500">Error loading data</div>;
  }

  if (!data && !error && !isLoading) {
    return <div>No data found</div>;
  }
  return <>{children}</>;
}

export default DataRenderer;
