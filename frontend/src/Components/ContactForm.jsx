import { useState } from "react";
import { EmailInput } from "./EmailInput";

export const ContactForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! I'll reach out to you soon at ${email}. Keep it goin'!`);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 max-w-md mx-auto">
      <EmailInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="bg-[#52B0FD] text-white font-medium py-3 px-6 rounded-xl hover:bg-blue-500 transition border"
      >
        Submit
      </button>
    </form>
  );
};