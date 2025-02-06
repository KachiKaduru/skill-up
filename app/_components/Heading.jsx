const headings = {
  h1: { type: "h1", className: "font-bold text-[56px] leading-[67px]" },
  h2: { type: "h2", className: "font-bold text-5xl" },
  h3: { type: "h3", className: "font-bold text-4xl" },
  h4: { type: "h4", className: "font-bold text-2xl" },
  h5: { type: "h5", className: "font-bold text-xl" },
};

export default function Heading({ type = "h2", children, className = "" }) {
  const { type: Element, className: baseClasses } = headings[type];

  return <Element className={`${baseClasses} ${className}`}>{children}</Element>;
}
