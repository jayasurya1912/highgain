import React, { useState } from "react";
import Logo from "../assets/mainlogo.png";
import What from "../assets/what.webp";
import Phone from "../assets/phone.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);


  const [projectOpen, setProjectOpen] = useState(false);


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2">
        <div className="container d-flex align-items-center justify-content-between">

          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" />
          </a>

          {/* Desktop Menu */}
          <ul className="navbar-nav desktop-menu d-flex align-items-center">
            <li className="nav-item"><Link className="nav-link" to={"/"}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to={"/about"}>About</Link></li>
            {/* PROJECT DROPDOWN (DESKTOP) */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="projectDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Project
            </a>

            <ul className="dropdown-menu" aria-labelledby="projectDropdown">
              <li><Link className="dropdown-item" to="/azizi">AZIZI</Link></li>
              <li><Link className="dropdown-item" to="/acube">A-CUBE</Link></li>
              <li><Link className="dropdown-item" to="/binghatti">BINGHATTI</Link></li>
              <li><Link className="dropdown-item" to="/damac">DAMAC</Link></li>
              <li><Link className="dropdown-item" to="/object">OBJECT 1</Link></li>
              <li><Link className="dropdown-item" to="/emmar">EMAAR</Link></li>
              <li><Link className="dropdown-item" to="/ellignton">ELLIGNTON</Link></li>
              <li><Link className="dropdown-item" to="/samana">SAMANA</Link></li>
              <li><Link className="dropdown-item" to="/sobha">SOBHA</Link></li>
            </ul>
          </li>

            <li className="nav-item"><Link className="nav-link" to={"/marketingpartner"}>Marketing Partners</Link></li>
            <li className="nav-item"><Link className="nav-link" to={"/whycollaborating"}>Why Collaborating</Link></li>
            <li className="nav-item"><Link className="nav-link" to={"/contact"}>Contact</Link></li>

            <li className="nav-item nav-icons ms-4">
              <img src={What} alt="whatsapp" width="26" />
            </li>

            <li className="nav-item nav-icons ms-5" style={{ marginTop: "-5px" }}>
              <img src={Phone} alt="call" width="20" />
            </li>
          </ul>

          {/* MOBILE MENU ICON */}
          <div className="mobile-icons d-none">
            <i className="fas fa-bars fa-xl" onClick={openSidebar}></i>
          </div>

        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div className={`mobile-sidebar ${sidebarOpen ? "active" : ""}`}>
        <span className="sidebar-close" onClick={closeSidebar}>&times;</span>

        <ul className="list-unstyled sidebar-list">
          <li><Link style={{textDecoration:"none"}} to={"/"} className="menu-item">Home</Link></li>
          <li><Link style={{textDecoration:"none"}} to={"/about"} className="menu-item">About</Link></li>
          <li><Link style={{textDecoration:"none"}} to={"/about"} className="menu-item">About</Link></li>
          {/* PROJECT DROPDOWN (MOBILE) */}
<li className="menu-item">
  <span
    className="d-flex justify-content-between align-items-center"
    onClick={() => setProjectOpen(!projectOpen)}
    style={{ cursor: "pointer" }}
  >
    Project
    <i className={`fas fa-chevron-${projectOpen ? "up" : "down"}`}></i>
  </span>

  {/* Mobile dropdown list */}
  {projectOpen && (
    <ul className="list-unstyled ms-3 mt-2">
      <li><Link className="menu-item" to="/azizi">AZIZI</Link></li>
      <li><Link className="menu-item" to="/acube">A-CUBE</Link></li>
      <li><Link className="menu-item" to="/binghatti">BINGHATTI</Link></li>
      <li><Link className="menu-item" to="/damac">DAMAC</Link></li>
      <li><Link className="menu-item" to="/object">OBJECT 1</Link></li>
      <li><Link className="menu-item" to="/emmar">EMAAR</Link></li>
      <li><Link className="menu-item" to="/ellignton">ELLIGNTON</Link></li>
      <li><Link className="menu-item" to="/samana">SAMANA</Link></li>
      <li><Link className="menu-item" to="/sobha">SOBHA</Link></li>
    </ul>
  )}
</li>

          <li><Link style={{textDecoration:"none"}} to={"/whycollaborating"} className="menu-item">Why Collaborating</Link></li>
          <li><Link style={{textDecoration:"none"}} to={"/contact"} className="menu-item">Contact us</Link></li>
        </ul>


        <div className="mt-3 d-flex gap-3">
          <img src={What} width="28" alt="" />
          <img src={Phone} width="28" alt="" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
