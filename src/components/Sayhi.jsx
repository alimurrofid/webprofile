import rofidLogo from "../assets/images/rofidlogo.png";

export const Sayhi = () => {
  return (
    <section className="w-full py-20 lg:py-24">
      <div className="container">
        <div className="w-full h-auto bg-card rounded-xl overflow-hidden relative flex flex-col md:flex-row justify-between items-center p-8 md:p-12">
          <div className="absolute bg-purple-800 blur-[120px] w-full md:w-[28rem] h-[28rem] left-0 md:left-16 -top-56"></div>
          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <img className="w-48 h-48 md:w-72 md:h-72 z-10" src={rofidLogo} alt="Rofid Logo" />
          </div>
          <div className="w-full md:w-1/2 z-10 space-y-4 text-center md:text-left">
            <p className="text-white font-medium text-4xl md:text-5xl">Get In Touch</p>
            <p className="text-white leading-loose tracking-wider text-justify">
              Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a
              href="mailto:alimurrofid77@gmail.com"
              className="inline-block text-white bg-purple-800/30 px-5 py-1.5 rounded-full text-base border-purple-700 border-2 hover:bg-purple-800/70"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
      <p className="text-white text-center mt-12 mb-4">
        ©{new Date().getFullYear()} All Rights Reserved | Created with ❤️ Rofid
      </p>
    </section>
  );
};