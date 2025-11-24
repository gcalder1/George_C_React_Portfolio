import { ProfileHolder } from "../Components/ProfileHolder.jsx";
import { ContactForm } from "../Components/ContactForm.jsx";

export const Contact = () => {
  return (
    <div className="pt-5 pb-10 px-3.5">
      <p className="text-4xl md:text-5xl font-bold text-center mb-10 drop-shadow-md">Let's stay in touch!</p>
      <div className="flex justify-center mb-10">
        <ProfileHolder 
          altContent={"George Calderon"} 
          imageContent={"/generalImages/georgeProfile.jpg"} 
          imageStyling={"w-72 h-auto rounded-4xl"} 
        />
      </div>
      <div>
        <p className="">Send me an email so we can keep the conversation going. I would love to get to know you and connect with you!</p>
      </div>
      <ContactForm />
    </div>
  );
};