import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: '#0f172a', padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 1000 }}>
      <Link to="/" style={{ color: '#fb923c', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.5rem' }}>DUVATECH SOLAR</Link>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <a href="#services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
        <a href="#products" style={{ color: 'white', textDecoration: 'none' }}>Products</a>
        <Link to="/admin" style={{ background: '#fb923c', color: 'white', padding: '8px 15px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}>Admin Panel</Link>
      </div>
    </nav>
  );
}
