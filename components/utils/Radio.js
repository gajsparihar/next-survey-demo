export default function Radio({ value, text, name, selected, onClick }) {
  return (
    <label
      htmlFor={value}
      className={`block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg hover:bg-gray-100 cursor-pointer ${
        selected && "bg-green-200"
      }`}
    >
      <input
        className="hidden"
        type="radio"
        name={name}
        id={value}
        value={value}
        onClick={() => onClick(value)}
      />{" "}
      {text}
    </label>
  );
}
