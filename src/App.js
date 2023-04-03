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
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/my courses" element={<Course/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
