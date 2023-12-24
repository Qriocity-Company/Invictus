import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import OurServices from "./pages/OurServices";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogItem from "./components/BlogItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <div className="flex justify-center items-center flex-col">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="services" element={<OurServices />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:blog" element={<BlogItem />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
