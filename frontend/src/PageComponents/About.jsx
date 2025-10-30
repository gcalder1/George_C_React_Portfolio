import { InfoCard } from "../Components/InfoCard";
import { ListCard } from "../Components/ListCard";

export const About = () => {
  return (
    <section className="px-6 py-12 text-[#222222]">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 drop-shadow-md">
        Who am I?
      </h2>

      <div className="max-w-4xl mx-auto text-center mb-12 bg-[#bfc0cf]/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
        <p className="text-lg leading-relaxed mb-4">
          I’m a web developer in training with a background in music, education, and community service, all of which are fields that taught me communication, creativity, and empathy.
        </p>
        <p className="text-lg leading-relaxed">
          My journey into tech began with HTML and CSS at TKH Foundations and grew into full-stack development, where I discovered how design and function come together to create user-centered experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <InfoCard
          infoCardStyling="bg-[#bfc0cf]/80 backdrop-blur-sm text-black p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          infoCardContent="My background in music and education shaped my ability to communicate and create engaging experiences — skills I now apply to designing accessible and interactive digital products."
        />
        <InfoCard
          infoCardStyling="bg-[#bfc0cf]/80 backdrop-blur-sm text-black p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          infoCardContent="I first learned user engagement by co-managing a Minecraft server — sparking my passion for building fun, intuitive experiences that keep users coming back."
        />
        <InfoCard
          infoCardStyling="bg-[#bfc0cf]/80 backdrop-blur-sm text-[#222222] p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          infoCardContent="Volunteering with diverse communities taught me that tech has the power to connect people and make a difference — a value I carry into every project I build."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ListCard
          cardTitle="Hobbies"
          cardItems={[
            { icon: "🎵", text: "Creating and listening to music" },
            { icon: "💪", text: "Staying active" },
            { icon: "🎮", text: "Playing PC & mobile games" },
            { icon: "📸", text: "Exploring NYC" },
            { icon: "🧁", text: "Trying my hand at baking" },
          ]}
        />
        <ListCard
          cardTitle="Aspirations"
          cardItems={[
            { icon: "🌍", text: "Travel the world twice" },
            { icon: "🗣️", text: "Learn 3 more languages" },
            { icon: "🌐", text: "Create meaningful web experiences" },
            { icon: "🚴‍♂️", text: "Finally learn to ride a bike" },
          ]}
        />
        <ListCard
          cardTitle="Habits"
          cardItems={[
            { icon: "🙏", text: "Daily gratitude" },
            { icon: "📖", text: "Read something positive daily" },
            { icon: "🎯", text: "Revisit an old skill regularly" },
            { icon: "📚", text: "Start a new book each season" },
          ]}
        />
        <ListCard
          cardTitle="Strengths"
          cardItems={[
            { icon: "🤝", text: "Collaborative and team-oriented" },
            { icon: "🔥", text: "Persistent and eager to learn" },
            { icon: "🌟", text: "Uplifting and encouraging others" },
          ]}
        />
        <ListCard
          cardTitle="Weaknesses"
          cardItems={[
            { icon: "⚖️", text: "Finding work-life balance" },
            { icon: "🎤", text: "Public speaking nerves" },
            { icon: "🔍", text: "Over-focusing on details" },
          ]}
        />
        <ListCard
          cardTitle="Passions"
          cardItems={[
            { icon: "🤲", text: "Community service & outreach" },
            { icon: "✈️", text: "Cultural exploration & travel" },
            { icon: "🧑‍🤝‍🧑", text: "Meeting new people" },
            { icon: "🏡", text: "Creating inclusive spaces" },
          ]}
        />
      </div>
    </section>
  );
};
