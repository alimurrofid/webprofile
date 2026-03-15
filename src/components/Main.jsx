import githubIcon from "../assets/images/github.svg";
import instagramIcon from "../assets/images/instagram.svg";
import twitterIcon from "../assets/images/twitter.svg";
import linkedinIcon from "../assets/images/linkedin.svg";

export const Main = () => {
  return (
    <section id="home" className="relative flex w-full h-screen">
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute right-24 top-1/4 bg-purple-800/80 rounded-full blur-[120px] w-[1000px] h-[700px]" />
      </div>

      <div className="relative z-20 w-full my-auto">
        <div className="container">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="w-full text-center lg:w-2/3 md:text-left">
              <p className="text-xl font-normal leading-snug text-white md:text-2xl">Hi, my name is</p>
              <h1 className="mt-1 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-7xl">Muhammad 'Ali Murrofid</h1>
              <h2 className="text-4xl font-semibold leading-tight text-indigo-400 md:text-5xl lg:text-7xl">I build things for the web</h2>
              <p className="max-w-3xl mx-auto mt-4 text-lg font-normal leading-relaxed text-justify text-white md:text-2xl md:mx-0">
                I'm a Web Developer Enthusiast based in Malang, Indonesia. I enjoy learning the necessary technologies to solve problems effectively. I strive to provide an engaging and functional user experience.
              </p>
            </div>
            <div className="w-full mt-12 md:w-auto md:mt-0 md:pl-8">
              <ul className="flex flex-row items-center justify-center space-x-8 md:flex-col md:space-x-0 md:space-y-8">
                <li>
                  <a aria-label="GitHub Profile" className="transition-opacity hover:opacity-50 duration-250" href="https://github.com/alimurrofid" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="github" />
                  </a>
                </li>
                <li>
                  <a aria-label="Instagram Profile" className="transition-opacity hover:opacity-50 duration-250" href="https://instagram.com/alimurrofid" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a aria-label="Twitter Profile" className="transition-opacity hover:opacity-50 duration-250" href="https://twitter.com/alimurrofid" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="twitter" />
                  </a>
                </li>
                <li>
                  <a aria-label="LinkedIn Profile" className="transition-opacity hover:opacity-50 duration-250" href="https://linkedin.com/in/alimurrofid" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
