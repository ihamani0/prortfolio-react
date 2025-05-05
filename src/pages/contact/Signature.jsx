import React from "react";

function Signature() {
  return (
    <div className="w-full ">
      <div className="flex p-4 bg-transparent z-50">
        <img
          src="/signature.png" // Replace with your actual image path
          alt="Personal Signature"
          className="
                    w-full h-16 md:h-20 lg:h-24 
                    object-contain 
                    dark:invert dark:opacity-90 
                    transition-all duration-300 ease-in-out
                    drop-shadow-lg
                    "
        />
      </div>
    </div>
  );
}

export default Signature;
