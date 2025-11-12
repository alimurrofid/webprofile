import imgArm from "../assets/images/experiences/monthlyreportcrowdequichain.webp";
import imgNazma from "../assets/images/experiences/usertestingnazmalogy.webp";
import imgFmd from "../assets/images/experiences/pilketum.webp";

export const experiences = [
  {
    title: "PT Intelix Global Crossing",
    position: "Application Developer Partner",
    imgSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=600&fit=crop",
    descriptions: [
      "Mengembangkan dan memelihara modul Omnichannel (PHP/CodeIgniter), mengintegrasikan 6 platform komunikasi (Telephony, Email, iSense, iCare, XOS, iSupport).",
      "Mengimplementasikan frontend interaktif (JavaScript, jQuery, AJAX) untuk meningkatkan fungsionalitas dan menunjang pengalaman pengguna",
      "Mengoptimalkan query MySQL dan PostgreSQL untuk memastikan efisiensi sistem dalam menangani volume data besar.",
      "Mengelola proses remote development dan deployment (WinSCP/SSH), menjaga stabilitas alur kerja tim dan keamanan server.",
    ],
  },
  {
    title: "PT Andal Rancang Multisolusi",
    position: "Backend Web Developer",
    imgSrc: imgArm,
    descriptions: [
      "Merancang dan mengembangkan lebih dari 50 endpoint RESTful API (Express.js) untuk sistem crowdfunding koperasi berbasis Hyperledger Besu.",
      "Mengintegrasikan backend Express.js dengan smart contract Solidity (Hardhat), memfasilitasi alur transaksi yang aman dan konsisten.",
      "Berkoordinasi dengan tim frontend dan blockchain engineer untuk memastikan konsistensi data antar-komponen sistem.",
    ],
  },
  {
    title: "PT Sebangku Jaya Abadi (NaZMa Office)",
    position: "Fullstack Web Developer",
    imgSrc: imgNazma,
    descriptions: [
      "Mengembangkan website pelatihan NaZMaLogy (Laravel + Tailwind CSS) dari awal hingga peluncuran untuk mendukung program digitalisasi UMKM.",
      "Melakukan pengujian performa (Grafana K6) dan deployment VPS, memastikan sistem tervalidasi stabil menangani 400 virtual user secara simultan.",
    ],
  },
  {
    title: "Formadiksi Polinema",
    position: "Staf Ahli Divisi Kominfo | Pengurus Muda Divisi Keagamaan",
    imgSrc: imgFmd,
    descriptions: [
      "Berkomunikasi dan bekerja sama dengan tim untuk pencitraan organisasi. Berhasil meningkatkan pengikut media sosial hingga 15%.",
      "Terpilih menjadi Kandidat Ketua Umum Formadiksi Polinema Periode 2023/2024.",
      "Bertindak sebagai Koordinator Lapangan dan Ketua Pelaksana untuk 4+ program kerja dan agenda internal organisasi.",
    ],
  },
];
