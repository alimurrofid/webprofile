export const MenuItems = ({ isMobile, closeMenu }) => {
  const baseClasses = "text-white hover:text-purple-300 font-semibold transition duration-100 ease-in-out";
  const desktopClasses = "flex space-x-10";
  const mobileClasses = "block space-y-10";

  const handleLinkClick = (e, hash) => {
    e.preventDefault();
    
    closeMenu();

    setTimeout(() => {
      const element = document.querySelector(hash);
      
      if (element) {
        element.scrollIntoView();
      }
    }, 300);
  };

  return (
    <ul className={isMobile ? mobileClasses : desktopClasses}>
      <li><a href="#home" className={baseClasses} onClick={(e) => handleLinkClick(e, "#home")}>Home</a></li>
      <li><a href="#about" className={baseClasses} onClick={(e) => handleLinkClick(e, "#about")}>About</a></li>
      <li><a href="#experience" className={baseClasses} onClick={(e) => handleLinkClick(e, "#experience")}>Experience</a></li>
      <li><a href="#project" className={baseClasses} onClick={(e) => handleLinkClick(e, "#project")}>Project</a></li>
      <li><a href="#achievement" className={baseClasses} onClick={(e) => handleLinkClick(e, "#achievement")}>Achievement</a></li>
    </ul>
  );
};