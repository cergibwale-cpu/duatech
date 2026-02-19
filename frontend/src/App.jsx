import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
