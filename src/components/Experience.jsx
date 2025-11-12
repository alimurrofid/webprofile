import { useState, useEffect } from "react";
import { experiences } from "../data/experienceData";

const ExperienceCard = ({ title, position, imgSrc, descriptions }) => (
  <div className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[60vh] overflow-hidden rounded-2xl relative group/detail shadow-lg">
    <img className="object-cover w-full h-full" src={imgSrc} alt={title} />

    <div className="bg-gradient-to-t from-purple-700 to-purple-700/30 w-full h-full absolute top-0 left-0 translate-y-[65%] group-hover/detail:translate-y-0 transition-transform duration-300 ease-in-out p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-between">
      <div className="flex-col justify-start flex-1 hidden pt-1 overflow-y-auto transition-opacity duration-300 delay-100 opacity-0 group-hover/detail:opacity-100 group-hover/detail:flex sm:pt-2">
        <img className="mx-auto mb-2 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 sm:mb-3 md:mb-3" src="https://api.iconify.design/mdi/chevron-down.svg?color=white" alt="down arrow" />
        <ul className="mx-5 space-y-1.5 text-base leading-relaxed text-justify text-white list-disc sm:mx-6 sm:text-lg sm:space-y-2 sm:leading-relaxed md:mx-7 md:text-xl md:space-y-2 lg:mx-8 lg:text-base lg:space-y-2">
          {descriptions.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>

      <div className="flex-shrink-0">
        <div className="transition-opacity duration-300 group-hover/detail:opacity-0 group-hover/detail:hidden">
          <p className="text-xl font-bold text-white sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl line-clamp-1">{title}</p>
          <p className="text-lg font-medium text-white sm:text-xl md:text-xl lg:text-lg line-clamp-1">{position}</p>
        </div>

        <img
          className="mx-auto mt-4 transition-opacity duration-300 transform rotate-180 w-7 h-7 sm:w-8 sm:h-8 sm:mt-5 md:w-9 md:h-9 md:mt-6 lg:w-8 lg:h-8 lg:mt-6 xl:w-9 xl:h-9 xl:mt-7 group-hover/detail:opacity-0 group-hover/detail:hidden"
          src="https://api.iconify.design/mdi/chevron-down.svg?color=white"
          alt="up arrow"
        />
      </div>
    </div>
  </div>
);

export const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(experiences.length / itemsPerSlide);
  const nextSlide = () => setCurrentIndex((p) => (p + 1) % totalSlides);
  const prevSlide = () => setCurrentIndex((p) => (p - 1 + totalSlides) % totalSlides);

  return (
    <section id="experience" className="relative w-full py-8 overflow-hidden sm:py-12 md:py-14 lg:py-16">
      <div className="absolute top-0 left-0 w-full md:w-5/12 h-full rounded-r-full blur-[120px] bg-purple-800"></div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:gap-x-8 lg:gap-x-12 xl:gap-x-20">
          <div className="w-full mb-8 text-center md:w-1/3 sm:mb-10 md:mb-0 md:text-left">
            <p className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-4xl lg:text-5xl">Experience</p>
            <p className="mt-3 text-base font-normal leading-relaxed text-justify text-white sm:text-lg md:leading-loose sm:mt-4">
              My approach to development is driven by creativity, innovation, and adaptability, as showcased throughout my professional roles.
            </p>
          </div>

          <div className="relative w-full md:w-2/3">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="flex flex-shrink-0 w-full gap-4 px-1 sm:gap-5 md:gap-6">
                    {experiences.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((exp, expIndex) => (
                      <div
                        key={expIndex}
                        style={{
                          width: itemsPerSlide === 1 ? "100%" : `calc(50% - 0.75rem)`,
                        }}
                      >
                        <ExperienceCard {...exp} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 -translate-x-4 sm:-translate-x-5 md:-translate-x-6 lg:-translate-x-12 w-[calc(100%+2rem)] sm:w-[calc(100%+2.5rem)] md:w-[calc(100%+3rem)] lg:w-[calc(100%+6rem)]">
              <button onClick={prevSlide} className="bg-purple-800/50 hover:bg-purple-800/80 text-white p-2 sm:p-2.5 md:p-3 rounded-full z-20 transition-colors shadow-lg" aria-label="Previous slide">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button onClick={nextSlide} className="bg-purple-800/50 hover:bg-purple-800/80 text-white p-2 sm:p-2.5 md:p-3 rounded-full z-20 transition-colors shadow-lg" aria-label="Next slide">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-purple-500 w-6 sm:w-8" : "bg-purple-300/50"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
