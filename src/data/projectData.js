import TemprinaImg from "../assets/images/projects/temprina.webp";
import PetualanganCuanImg from "../assets/images/projects/petualangancuan.webp";
import jogoTirtoImg from "../assets/images/projects/jogotirto.webp";
import crowdEquiChainImg from "../assets/images/projects/crowdequichain.webp";
import naZMaLogyImg from "../assets/images/projects/nazmalogy.webp";
import officialFmdImg from "../assets/images/projects/officialformadiksi.webp";
import fmdVoteImg from "../assets/images/projects/formadiksivote.webp";
import wadesImg from "../assets/images/projects/wades.webp";
import theKostImg from "../assets/images/projects/thekos.webp";

export const projectData = [
  {
    title: "Temprina",
    imgSrc: TemprinaImg,
    link: "https://erp.temprina.com",
    description: "An ERP system for Jawa Pos Group integrating 9 business modules to support operations across multiple companies, business units, and branches.",
    techStack: ["Laravel", "Vue.js", "Tailwind CSS", "PostgreSQL"]
  },
  {
    title: "Petualangan Cuan",
    imgSrc: PetualanganCuanImg,
    link: "https://petualangancuan.rofid.me",
    description: "A personal finance management platform with WhatsApp chatbot integration for automatic transaction recording and financial reporting.",
    techStack: ["Go", "Vue.js", "Tailwind CSS", "PostgreSQL"]
  },
  {
    title: "JogoTirto",
    imgSrc: jogoTirtoImg,
    link: "https://drive.google.com/file/d/1XeHPrRk-sTDFsPt9zWmdSiTeFj72gELA/view",
    description: "An automated system for monitoring and classifying river waste by type and size.",
    techStack: ["Express.js", "Python", "React", "Tailwind CSS", "PostgreSQL"]
  },
  {
    title: "Official Formadiksi Polinema",
    imgSrc: officialFmdImg,
    link: "https://github.com/alimurrofid/official-formadiksi",
    description: "The official website for the Formadiksi Polinema student organization.",
    techStack: ["Laravel", "Bootstrap", "MySQL"]
  },
  {
    title: "Formadiksivote",
    imgSrc: fmdVoteImg,
    link: "https://github.com/alimurrofid/formadiksivote",
    description: "An e-voting platform developed for the Formadiksi Polinema student organization.",
    techStack: ["Laravel", "Tailwind CSS", "MySQL"]
  },
  {
    title: "Wades",
    imgSrc: wadesImg,
    link: "https://github.com/alimurrofid/web-wades",
    description: "A website for handling official village letter requests, featuring integration with a WhatsApp bot.",
    techStack: ["Laravel", "Express.js", "Tailwind CSS", "MySQL"]
  },
  {
    title: "CrowdEquiChain",
    imgSrc: crowdEquiChainImg,
    link: "http://labai.polinema.ac.id:8000",
    description: "A blockchain-based crowdfunding platform designed to support fundraising for cooperative projects.",
    techStack: ["Express.js", "Solidity", "Hardhat", "PostgreSQL"]
  },
  {
    title: "NaZMaLogy",
    imgSrc: naZMaLogyImg,
    link: "https://nazmalogy.nazmaoffice.com/",
    description: "A platform designed to help Indonesian MSMEs sell local products and training services to an international market.",
    techStack: ["Laravel", "Tailwind CSS", "MySQL"]
  },
  {
    title: "TheKost",
    imgSrc: theKostImg,
    link: "https://github.com/alimurrofid/TheKost",
    description: "A web application built to streamline the management of boarding houses.",
    techStack: ["Laravel", "Bootstrap", "MySQL"]
  },
];
