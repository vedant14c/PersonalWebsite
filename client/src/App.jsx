import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Certifications from "./sections/Certifications";
import Resume from "./sections/Resume";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Certifications />
                <Resume />
                <Contact />
                <Footer />

            </main>
        </>
    );
}

export default App;