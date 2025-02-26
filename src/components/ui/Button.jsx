export default function Button({ variant, size, children, ...props }) {
  const variants = {
    primary: "bg-primary",
    secondary: "bg-secondary",
  };

  const sizes = {
    sm: "py-1 px-2",
    md: "py-2 px-3",
    lg: "py-3 px-6",
  };

  return (
    <button className={`${variants[variant]} ${sizes[size]}`} {...props}>
      {children}
    </button>
  );
}
