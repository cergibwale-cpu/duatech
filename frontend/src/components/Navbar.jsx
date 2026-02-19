import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">SolarTech</h1>

        <ul className="flex gap-6 text-lg font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Final Memberone</Link></li>
          <li><Link to="/testimonials">Service</Link></li>
          <li><Link to="/products">Product</Link></li>
          <li><Link to="/products">Product 2</Link></li>
          <li><a href="#lead-form">Contact</a></li>
        </ul>

        <Link
          to="/admin"
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Admin
        </Link>
      </div>
    </nav>
  );
}
