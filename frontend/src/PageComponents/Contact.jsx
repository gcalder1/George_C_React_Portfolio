import { ProfileHolder } from "../Components/ProfileHolder.jsx";
import { ContactForm } from "../Components/ContactForm.jsx";

export const Contact = () => {
  return (
    <div className="pt-5 pb-10 px-3.5">
      <p className="text-5xl text-center pb-6">Let's stay in touch!</p>
      <div className="flex justify-center mb-10">
        <ProfileHolder 
          altContent={"George Calderon"} 
          imageContent={"/generalImages/georgeProfile.jpg"} 
          imageStyling={"w-72 h-auto rounded-4xl"} 
        />
      </div>
      <div>
        <p className="">Follow my newsletter to get monthly updates on activities, events, or travel plans I’ll be at that may be near you!</p>
      </div>
      <ContactForm />
    </div>
  );
};