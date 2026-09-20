const Button = ({ className, children, onClick }) => {
  return (
    <button
    onClick={onClick}
      className={`border px-10 py-2 capitalize tracking-wider font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
