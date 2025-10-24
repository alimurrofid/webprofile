import { useState } from "react";
import { MenuItems } from "./MenuItems";
import { motion, AnimatePresence } from "framer-motion";
import rofidLogo from "../assets/images/rofidlogo.png";
import menuIcon from "../assets/images/menu.svg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 flex justify-center">
      <div className="relative w-full max-w-sm md:w-auto md:max-w-none">
        
        <motion.div
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { height: "auto" },
            closed: { height: "60px" },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative bg-white/10 backdrop-blur-lg shadow-lg rounded-3xl md:rounded-full border border-white/20 overflow-hidden"
        >
          <div className="flex items-center justify-between h-[60px] py-2 px-4 relative z-10">
            <a href="#home" onClick={closeMenu} className="flex-shrink-0">
              <img src={rofidLogo} alt="Rofid" className="h-10 w-10" />
            </a>
            <div className="hidden md:block md:ml-10">
              <MenuItems closeMenu={closeMenu} />
            </div>
            <div className="block md:hidden">
              <button onClick={handleMenuToggle} className="p-1">
                <img src={menuIcon} alt="menu" className="cursor-pointer w-6 h-6" />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                key="menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="md:hidden"
              >
                <div className="p-6 pt-4 text-center">
                  <MenuItems isMobile={true} closeMenu={closeMenu} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </nav>
  );
};