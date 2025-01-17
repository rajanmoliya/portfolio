// App.jsx
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <NavBar />
      <Profile />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
