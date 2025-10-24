import githubIcon from "../assets/images/github.svg";
import instagramIcon from "../assets/images/instagram.svg";
import twitterIcon from "../assets/images/twitter.svg";
import linkedinIcon from "../assets/images/linkedin.svg";

export const Main = () => {
  return (
    <section id="home" className="w-full h-screen relative flex">
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute right-24 top-1/4 bg-purple-800/80 rounded-full blur-[120px] w-[1000px] h-[700px]" />
      </div>

      <div className="w-full my-auto relative z-20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <div className="w-full lg:w-2/3 text-center md:text-left">
              <p className="text-white text-xl md:text-2xl font-normal leading-snug">Hi, my name is</p>
              <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight mt-1">Muhammad 'Ali Murrofid</h1>
              <h2 className="text-indigo-400 text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight">I build things for the web</h2>
              <p className="text-white text-lg md:text-2xl font-normal leading-relaxed text-justify mt-4 max-w-3xl mx-auto md:mx-0">
                I'm a Web Developer Enthusiast based in Malang, Indonesia. I enjoy learning the necessary technologies to solve problems effectively. I strive to provide an engaging and functional user experience.
              </p>
            </div>
            <div className="w-full md:w-auto mt-12 md:mt-0 md:pl-8">
              <ul className="flex flex-row md:flex-col items-center justify-center space-x-8 md:space-x-0 md:space-y-8">
                <li><a className="hover:opacity-50 transition-opacity duration-250" href="https://github.com/alimurrofid" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="github" /></a></li>
                <li><a className="hover:opacity-50 transition-opacity duration-250" href="https://instagram.com/alimurrofid" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="instagram" /></a></li>
                <li><a className="hover:opacity-50 transition-opacity duration-250" href="https://twitter.com/alimurrofid" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="twitter" /></a></li>
                <li><a className="hover:opacity-50 transition-opacity duration-250" href="https://linkedin.com/in/muhammad-ali-murrofid-320a2b254" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="linkedin" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};