import { Link } from "react-router-dom";
import Logo from "../assets/mainlogo.jpg";
import { useEffect, useRef } from "react";

function Footer() {
  const scrollBtnRef = useRef(null);

  // Scroll-to-top logic
  useEffect(() => {
    const handleScroll = () => {
      if (scrollBtnRef.current) {
        scrollBtnRef.current.style.display =
          window.scrollY > 300 ? "block" : "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer-section pt-5 pb-3">
        <div className="container">
          <div className="row footer-top">

            <div className="col-lg-4 col-md-6 mb-4">
              <img
                src={Logo}
                className="footer-logo mb-3"
                alt="logo"
                style={{ background: "white", padding: "20px" }}
              />
              <p className="footer-tagline">
                HighGain Real Estate,<br />
                Live your dream.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="footer-heading">QUICK LINKS</h5>
              <ul className="footer-links list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/marketingpartner">Marketing Partners</Link></li>
                <li><Link to="/whycollaborating">Why Collaborating</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="footer-heading">CONTACT</h5>
              <p className="footer-contact">81262, Al Qusais, Dubai, UAE</p>
              <p className="footer-contact">
                Mobile: <a href="#" className="footer-link">+971 508 364 706</a>
              </p>
              <p className="footer-contact">
                Email: <a href="#" className="footer-link">amir@highgainrealestate.com</a>
              </p>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="footer-heading">SOCIAL MEDIA</h5>
              <div className="footer-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

          </div>

          <hr className="footer-line" />

          <div className="text-center footer-copy pt-2">
            Copyright © 2025 High Gain Real Estate.
            All Rights Reserved | Designed By{" "}
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Tech Mayon
            </a>
          </div>
        </div>
      </footer>


       <div class="whatsapp-icon whatsapp-float"><a href="https://wa.me/+971508364706?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20HighGain%20Could%20you%20please%20provide%20more%20details%20"target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Build Tec Expo WhatsApp"/></a></div>

      {/* Scroll to Top Button */}
      <button
        id="fireScrollTop"
        ref={scrollBtnRef}
        className="fire-scroll-top"
        onClick={scrollToTop}
      >
        ↑
      </button>



    </>
  );
}

export default Footer;
