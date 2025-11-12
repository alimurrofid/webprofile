import fotoProfile from "../assets/images/fotoprofile.webp";

export const About = () => {
  return (
    <section id="about" className="w-full py-20 lg:py-24">
      <div className="container">
        <div className="flex flex-col items-center md:flex-row md:gap-x-12 lg:gap-x-20">
          <div className="flex justify-center w-full mb-12 md:w-5/12 md:justify-start md:mb-0">
            <div className="relative w-4/5 sm:w-3/5 md:w-full">
              <div className="absolute w-full h-full transition-opacity duration-700 ease-in-out bg-purple-600/70 rounded-2xl hover:opacity-0"></div>
              <img className="w-full h-auto rounded-2xl" src={fotoProfile} alt="Foto Profile Rofid" />
            </div>
          </div>
          <div className="w-full space-y-4 text-center md:w-7/12 md:text-left">
            <p className="text-4xl font-semibold leading-tight text-white md:text-5xl">About</p>
            <p className="text-lg font-normal leading-loose text-justify text-white">I am an Informatics Student at the State Polytechnic of Malang, where creativity, innovation and adaptability are my characteristics.</p>
            <p className="text-lg font-normal leading-loose text-justify text-white">
              I have a special interest in programming, especially web development, and aspire to become a competent full-stack web developer. With over a year of experience, I am determined to create engaging and functional user
              experiences.
            </p>
            <p className="text-lg font-normal leading-loose text-justify text-white">
              Ready to face new challenges and continue to develop myself in web development, I am always ready to expand my knowledge and skills in this dynamic world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
