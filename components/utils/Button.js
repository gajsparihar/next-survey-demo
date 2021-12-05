export default function Button({ onClick, children, ...rest }) {
  return (
    <button
      className="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
