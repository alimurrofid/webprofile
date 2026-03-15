import rofidLogo from "../assets/images/rofidlogo.webp";

export const Sayhi = () => {
  return (
    <section className="w-full py-20 lg:py-24">
      <div className="container">
        <div className="relative flex flex-col items-center justify-between w-full h-auto p-8 overflow-hidden bg-card rounded-xl md:flex-row md:p-12">
          <div className="absolute bg-purple-800 blur-[120px] w-full md:w-[28rem] h-[28rem] left-0 md:left-16 -top-56"></div>
          <div className="flex items-center justify-center w-full mb-8 md:w-1/2 md:mb-0">
            <img loading="lazy" className="z-10 w-48 h-48 md:w-72 md:h-72" src={rofidLogo} alt="Rofid Logo" />
          </div>
          <div className="z-10 w-full space-y-4 text-center md:w-1/2 md:text-left">
            <p className="text-4xl font-medium text-white md:text-5xl">Get In Touch</p>
            <p className="leading-loose tracking-wider text-justify text-white">
              Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:alimurrofid77@gmail.com" className="inline-block text-white bg-purple-800/30 px-5 py-1.5 rounded-full text-base border-purple-700 border-2 hover:bg-purple-800/70">
              Say Hello
            </a>
          </div>
        </div>
      </div>
      <p className="mt-12 mb-4 text-center text-white">©{new Date().getFullYear()} All Rights Reserved | Created with ❤️ Rofid</p>
    </section>
  );
};
