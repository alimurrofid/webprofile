import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";
import { Achievement } from "./components/Achievement";
import { Sayhi } from "./components/Sayhi";

function App() {
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