import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { achievementData } from "../data/achievementData";
import rofidLogo from "../assets/images/rofidlogo.png";
import linkIcon from "../assets/images/link.svg";

export const Achievement = () => {
  const [visibleAchievements, setVisibleAchievements] = useState(3);
  const achievementSectionRef = useRef(null);

  const showMoreAchievements = () => setVisibleAchievements(achievementData.length);
  
  const showLessAchievements = () => {
    setVisibleAchievements(3);
    achievementSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="achievement" ref={achievementSectionRef} className="w-full py-20 lg:py-24">
      <div className="w-11/12 mx-auto text-center text-white md:w-2/3 lg:w-1/2">
        <p className="text-5xl font-bold leading-loose">Achievement</p>
        <p className="text-lg font-normal leading-loose">Some achievements I've earned throughout my journey in both academic and non-academic fields.</p>
      </div>
      <div className="container mt-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {achievementData.slice(0, visibleAchievements).map((achievement, index) => (
              <motion.a
                href={achievement.link}
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ scale: 1.05 }}
                transition={{ 
                  duration: 0.3,
                  scale: { duration: 0.2 }
                }}
                className="relative w-full h-56 overflow-hidden bg-card rounded-xl"
              >
                <div className="flex justify-between">
                  <img className="w-12 h-12 m-4" src={rofidLogo} alt="Logo Rofid" />
                  <img className="z-10 m-6" src={linkIcon} alt="Tautan eksternal" />
                </div>
                <div className="relative z-10 mx-6 mt-2 text-white">
                  <p className="text-2xl font-semibold line-clamp-2">{achievement.title}</p>
                  <div className="absolute w-full -bottom-12">
                    <p>{achievement.description}</p>
                  </div>
                </div>
                <div className="bg-purple-800 w-80 h-80 rounded-full blur-[80px] -right-16 -top-24 absolute"></div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        {visibleAchievements < achievementData.length ? (
            <button onClick={showMoreAchievements} className="px-6 py-2 text-base text-white border-2 border-purple-700 rounded-full bg-purple-800/50 hover:bg-purple-800/70">
                See More
            </button>
        ) : (
            <button onClick={showLessAchievements} className="px-6 py-2 text-base text-white border-2 border-purple-700 rounded-full bg-purple-800/50 hover:bg-purple-800/70">
                Show Less
            </button>
        )}
      </div>
    </section>
  );
};