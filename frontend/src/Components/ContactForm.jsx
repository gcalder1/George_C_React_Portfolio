import { useState } from "react";
import { EmailInput } from "./EmailInput";

export const ContactForm = () => {
  const [email, setEmail] = useState("");

  const mailtoLink = `mailto:george.calderon2000@gmail.com?subject=Let's Connect!&body=Hi George,%0D%0A%0D%0AMy email is: ${email} and I would love to catch up some time!`;

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
      <a 
        className="text-center text-white font-medium py-3 px-6 rounded-xl hover:bg-[] transition border cursor-pointer"
        href={mailtoLink}
      >
        <button
          type="submit" 
          className="cursor-pointer"       
        >
          Submit
        </button>
      </a>
    </form>
  );
};