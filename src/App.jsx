import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";
import { Achievement } from "./components/Achievement";
import { Sayhi } from "./components/Sayhi";
import { Loading } from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <main>
        <Main />
        <About />
        <Experience />
        <Project />
        <Achievement />
        <Sayhi />
      </main>
    </>
  );
}

export default App;
