import imgArm from "../assets/images/experiences/monthlyreportcrowdequichain.webp";
import imgNazma from "../assets/images/experiences/usertestingnazmalogy.webp";
import imgFmd from "../assets/images/experiences/pilketum.webp";

export const experiences = [
  {
    title: "PT Intelix Global Crossing",
    position: "Application Developer Partner",
    imgSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=600&fit=crop",
    descriptions: [
      "Developed and maintained an Omnichannel module (PHP/CodeIgniter), integrating 6 communication platforms (Telephony, Email, iSense, iCare, XOS, iSupport).",
      "Implemented interactive frontend features (JavaScript, jQuery, AJAX) to enhance functionality and user experience.",
      "Optimized MySQL and PostgreSQL queries to ensure system efficiency in handling large data volumes.",
      "Managed remote development and deployment processes (WinSCP/SSH), maintaining team workflow stability and server security.",
    ],
  },
  {
    title: "PT Andal Rancang Multisolusi",
    position: "Backend Web Developer",
    imgSrc: imgArm,
    descriptions: [
      "Designed and developed over 50 RESTful API endpoints (Express.js) for a cooperative crowdfunding system built on Hyperledger Besu.",
      "Integrated the Express.js backend with Solidity smart contracts (Hardhat), facilitating a secure and consistent transaction flow.",
      "Coordinated with frontend and blockchain engineers to ensure data consistency across system components.",
    ],
  },
  {
    title: "PT Sebangku Jaya Abadi (NaZMa Office)",
    position: "Fullstack Web Developer",
    imgSrc: imgNazma,
    descriptions: [
      "Developed the NaZMaLogy training website (Laravel + Tailwind CSS) from initial concept to launch, supporting an MSME digitalization program.",
      "Conducted performance testing (Grafana K6) and managed VPS deployment, ensuring the system was validated to stably handle 400 concurrent virtual users.",
    ],
  },
  {
    title: "Formadiksi Polinema",
    position: "Staf Ahli Divisi Kominfo | Pengurus Muda Divisi Keagamaan",
    imgSrc: imgFmd,
    descriptions: [
      "Collaborated with the team on organizational branding, successfully increasing social media followers by 15%.",
      "Selected as a candidate for the Head of Formadiksi Polinema for the 2023/2024 period.",
      "Acted as a Field Coordinator and Project Lead for 4+ organizational work programs and internal agendas.",
    ],
  },
];
