import React from "react";

function BackgroundDeco() {
  return (
    <>
      <div className="absolute top-10 left-20 animate-float">
        <img src="/vite.svg" alt="Laravel" className="w-16 h-16 opacity-40 " />
      </div>
      <div className="absolute top-35 right-10 animate-float-reverse">
        <img src="/laravel.svg" alt="Vue" className="w-12 h-12 opacity-70" />
      </div>
      <div className="absolute top-20 right-140 animate-float">
        <img src="/react.svg" alt="React" className="w-14 h-14 opacity-60" />
      </div>
      <div className="absolute top-150 right-200 animate-float-reverse">
        <img src="/git.svg" alt="Node.js" className="w-16 h-16 opacity-50" />
      </div>
    </>
  );
}

export default BackgroundDeco;
