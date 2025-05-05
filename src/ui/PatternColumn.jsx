import React from "react";

const PatternColumn = React.memo(({ children, className = "" }) => {
  return (
    <div
      className={`
        h-full 
        bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
        bg-[size:10px_10px] bg-fixed
        border-x border-x-[var(--pattern-fg)]
      [--pattern-fg:var(--color-gray-950)]/5
      dark:[--pattern-fg:var(--color-white)]/10
        ${className}
      `}
    >
      {children}
    </div>
  );
});

export default PatternColumn;
