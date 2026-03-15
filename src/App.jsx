import React, { Suspense, useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Loading } from "./components/Loading";

const About = React.lazy(() => import("./components/About").then(module => ({ default: module.About })));
const Experience = React.lazy(() => import("./components/Experience").then(module => ({ default: module.Experience })));
const Project = React.lazy(() => import("./components/Project").then(module => ({ default: module.Project })));
const Achievement = React.lazy(() => import("./components/Achievement").then(module => ({ default: module.Achievement })));
const Sayhi = React.lazy(() => import("./components/Sayhi").then(module => ({ default: module.Sayhi })));

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Main />
        <Suspense fallback={<Loading />}>
          <About />
          <Experience />
          <Project />
          <Achievement />
          <Sayhi />
        </Suspense>
      </main>
    </>
  );
}

export default App;
