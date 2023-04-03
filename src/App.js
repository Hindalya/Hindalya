import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import Blog from "./pages/Blog.jsx";
import Profile from "./pages/Profile.jsx";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Course from "./pages/Course.jsx";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/course" element={<Course/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
