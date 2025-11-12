import rofidLogo from "../assets/images/rofidlogo.webp";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-background">
      <span className="relative flex w-32 h-32">
        <span className="absolute inline-flex w-full h-full bg-purple-600 rounded-full opacity-75 animate-ping"></span>
        <img src={rofidLogo} alt="Loading..." className="relative inline-flex w-32 h-32" />
      </span>
    </div>
  );
};
