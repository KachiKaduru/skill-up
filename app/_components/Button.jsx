const buttonTypes = {
  transparent: "bg-none border border-white",
  primary: "bg-primary-50 text-white border-primary-50",
  secondary: "bg-white text-primary-50 border-primary-50",
};

export default function Button({ type = "transparent", children }) {
  return (
    <button className={`font-bold text-lg py-3 w-full border rounded-md ${buttonTypes[type]}`}>
      {children}
    </button>
  );
}
