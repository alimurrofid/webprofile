import imgArm from "../assets/images/experiences/monthlyreportcrowdequichain.webp";
import imgNazma from "../assets/images/experiences/usertestingnazmalogy.webp";
import imgFmd from "../assets/images/experiences/pilketum.webp";

export const experiences = [
  {
    title: "PT Qlcom Solusi Bisnis",
    position: "Fullstack Developer",
    imgSrc: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=400&h=600&fit=crop",
    descriptions: [
      "Maintaining and extending the Temprina ERP system for Jawa Pos Group using Laravel and Vue.js.",
      "Supporting enterprise-scale operations across 10 companies, 6 business units, 14 sub-business units, and 17 branches.",
      "Developing and enhancing features across 9 ERP modules including Marketing, Inventory, Production, Accounting, and Editorial.",
      "Collaborating with the IT Manager and Temprina IT team to understand the existing system architecture, optimize legacy code, and ensure smooth feature integration.",
    ],
  },
  {
    title: "PT Intelix Global Crossing",
    position: "Application Developer Partner (Contract)",
    imgSrc: "https://images.unsplash.com/photo-1536148935331-408321065b18?w=400&h=600&fit=crop",
    descriptions: [
      "Developed and maintained an Omnichannel module using PHP (CodeIgniter).",
      "Integrated 6 communication platforms including Telephony, Email, iSense, iCare, XOS, and iSupport.",
      "Implemented interactive frontend features using JavaScript, jQuery, and AJAX to enhance usability.",
      "Optimized MySQL and PostgreSQL queries to improve system performance in processing large datasets.",
    ],
  },
  {
    title: "PT Andal Rancang Multisolusi",
    position: "Backend Developer Intern",
    imgSrc: imgArm,
    descriptions: [
      "Designed and implemented 50+ RESTful API endpoints using Express.js for a blockchain-based cooperative crowdfunding platform.",
      "Integrated backend services with Solidity smart contracts on Hyperledger Besu.",
      "Collaborated with frontend and blockchain engineers to maintain data consistency across distributed system components.",
    ],
  },
  {
    title: "PT Sebangku Jaya Abadi (NaZMa Office)",
    position: "Fullstack Developer Intern",
    imgSrc: imgNazma,
    descriptions: [
      "Developed the NaZMaLogy training platform using Laravel and Tailwind CSS to support MSME digitalization programs.",
      "Conducted load testing using Grafana K6 and validated system performance.",
      "Managed VPS deployment and ensured the system could handle up to 400 concurrent virtual users.",
    ],
  },
];
