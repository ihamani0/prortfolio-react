import React from "react";

export default function Toast({ type, message, onClose }) {
  let bgColor = "";
  if (type === "success") bgColor = "bg-green-100 text-green-800";
  if (type === "danger") bgColor = "bg-red-100 text-red-800";
  if (type === "warning") bgColor = "bg-yellow-100 text-yellow-800";

  return (
    <div
      className={`fixed bottom-5 right-5 flex items-center w-full max-w-xs p-4 text-sm rounded-lg shadow-sm z-50 ${bgColor}`}
      role="alert"
    >
      <span className="flex-grow">{message}</span>
      <button onClick={onClose} className="ml-2 font-bold">×</button>
    </div>
  );
}
