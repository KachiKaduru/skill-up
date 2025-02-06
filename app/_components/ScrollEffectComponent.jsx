"use client";

import useScrollInView from "../_hooks/useScrollInView";

function ScrollEffectComponent({ children }) {
  const ref = useScrollInView();

  return (
    <div ref={ref} className="scroll-in">
      {children}
    </div>
  );
}

export default ScrollEffectComponent;
