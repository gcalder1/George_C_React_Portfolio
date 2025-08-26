export const EmailInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="email"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />
  );
};