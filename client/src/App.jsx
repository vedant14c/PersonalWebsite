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
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProjects from "./pages/AdminProjects";
import AdminSkills from "./pages/AdminSkills";
import AdminEducation from "./pages/AdminEducation";

function App() {

    if (window.location.pathname === "/admin/projects") {
        const loggedIn = localStorage.getItem("adminLoggedIn");

        if (loggedIn !== "true") {
            window.location.href = "/admin";
            return null;
        }

        return <AdminProjects />;
    }

    if (window.location.pathname === "/admin/skills") {
        const loggedIn = localStorage.getItem("adminLoggedIn");

        if (loggedIn !== "true") {
            window.location.href = "/admin";
            return null;
        }

        return <AdminSkills />;
    }

    if (window.location.pathname === "/admin/education") {
        const loggedIn = localStorage.getItem("adminLoggedIn");

        if (loggedIn !== "true") {
            window.location.href = "/admin";
            return null;
        }

        return <AdminEducation />;
    }

    if (window.location.pathname === "/admin" || window.location.pathname === "/admin/dashboard") {

        const loggedIn = localStorage.getItem("adminLoggedIn");

        if (loggedIn === "true") {
            return <AdminDashboard />;
        }

        return <AdminLogin />;
    }

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