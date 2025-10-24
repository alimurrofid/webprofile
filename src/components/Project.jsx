import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectData } from "../data/projectData";

const descriptionVariants = {
  hidden: {
    opacity: 0,
    y: 5,
    height: 0,
    marginTop: 0,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    y: 0,
    height: "auto",
    marginTop: "0.25rem",
    transition: { duration: 0.2, delay: 0.1 },
  },
};

export const Project = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const projectSectionRef = useRef(null);

  const showMoreProjects = () => setVisibleProjects(projectData.length);

  const showLessProjects = () => {
    setVisibleProjects(3);
    projectSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="project" ref={projectSectionRef} className="w-full py-20 lg:py-24">
      <div className="w-11/12 mx-auto text-center text-white md:w-2/3 lg:w-1/2">
        <p className="text-5xl font-bold leading-loose">Project</p>
        <p className="text-lg font-normal leading-loose">Several projects I've worked on, showcasing my interest and skills in web development.</p>
      </div>
      <div className="container mt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {projectData.slice(0, visibleProjects).map((project, index) => (
              <motion.a href={project.link} key={index} layout initial="hidden" animate="hidden" whileHover="visible" exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="relative block">
                <motion.div
                  className="w-full"
                  variants={{
                    hidden: { scale: 1 },
                    visible: { scale: 1.05 },
                  }}
                  transition={{ scale: { duration: 0.2 } }}
                >
                  <div className="w-full text-white">
                    <div className="object-cover overflow-hidden rounded-lg">
                      <img className="w-full h-auto" src={project.imgSrc} alt={project.title} />
                    </div>
                    <p className="pt-2 text-xl font-bold leading-relaxed">{project.title}</p>
                    <motion.p variants={descriptionVariants} className="text-base font-normal text-gray-300">
                      {project.description}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        {visibleProjects < projectData.length ? (
          <button onClick={showMoreProjects} className="px-6 py-2 text-base text-white border-2 border-purple-700 rounded-full bg-purple-800/50 hover:bg-purple-800/70">
            See More
          </button>
        ) : (
          <button onClick={showLessProjects} className="px-6 py-2 text-base text-white border-2 border-purple-700 rounded-full bg-purple-800/50 hover:bg-purple-800/70">
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};
