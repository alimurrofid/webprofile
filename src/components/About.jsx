import fotoProfile from "../assets/images/fotoprofile.webp";

export const About = () => {
  return (
    <section id="about" className="w-full py-20 lg:py-24">
      <div className="container">
        <div className="flex flex-col items-center md:flex-row md:gap-x-12 lg:gap-x-20">
          <div className="flex justify-center w-full mb-12 md:w-5/12 md:justify-start md:mb-0">
            <div className="relative w-4/5 sm:w-3/5 md:w-full">
              <div className="absolute w-full h-full transition-opacity duration-700 ease-in-out bg-purple-600/70 rounded-2xl hover:opacity-0"></div>
              <img loading="lazy" className="w-full h-auto rounded-2xl" src={fotoProfile} alt="Foto Profile Rofid" />
            </div>
          </div>
          <div className="w-full space-y-4 text-center md:w-7/12 md:text-left">
            <p className="text-4xl font-semibold leading-tight text-white md:text-5xl">About</p>
            <p className="text-lg font-normal leading-loose text-justify text-white">I am a Web Developer dedicated to creativity, innovation, and adaptability. My primary focus is full-stack development, and I am driven to continually grow as a competent developer.</p>
            <p className="text-lg font-normal leading-loose text-justify text-white">
              With over a year of experience, I am committed to crafting functional and engaging user experiences. I am always ready to take on new challenges and continuously expand my knowledge and skills in this dynamic field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
