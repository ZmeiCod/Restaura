import Dishes from "./components/Dishes";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Preview from "./components/Preview";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="overflow-hidden text-neutral-200 antialiased">
      <Preview />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
      <Review />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
