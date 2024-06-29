import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">EV-Olution</div>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="navbar-contact">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
