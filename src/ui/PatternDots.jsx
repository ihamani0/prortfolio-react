function PatternDots({ children, className = "" }) {
  return (
    <div
      className={` ${className} 
            p-4 sm:p-8 rounded-lg border shadow-md
            bg-gray-950/[2.5%]
            border-gray-200 dark:border-white/10
            bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)]
            bg-[size:10px_10px] bg-fixed
            [--pattern-fg:var(--color-gray-950)]/5
            dark:[--pattern-fg:var(--color-white)]/10
            mx-3
      `}
    >
      <div className="relative z-10">
        {/* Content goes here */}
        {children}
      </div>
    </div>
  );
}

export default PatternDots;

//relative overflow-y-auto
