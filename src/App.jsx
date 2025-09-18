import { BrowserRouter as Router } from "react-router-dom";
import Homepage from '../src/pages/Homepage.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" }
  ];

  const button = { label: "Contact Us", href: "#contact" };

  return (
    <Router>
    <Navbar logo="LOGO" links={links} button={button} /> 
      <Homepage />
    </Router>
  );
}

export default App;
