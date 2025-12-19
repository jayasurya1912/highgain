

import { useEffect, useRef,useState } from "react";
import Apple from "../assets/mainlogo.jpg"
import Homein from "../assets/abtn.jpg"
import Middle from "../assets/middlebanner.png"
import Review from "../assets/reviewbac.jpeg";
import Form from "../assets/form.jpg";
import Foot from "../assets/footbac.jpeg";
import Footer from "./footer";
import Person from "../assets/personone.jpg"
import Personone from "../assets/persontwo.jpg";
import Exone from "../assets/exon.jpeg";
import Extwo from "../assets/extw.jpeg";
import Exthree from "../assets/exthree.jpg";
import Exfour from "../assets/exfour.png";
import { Link } from "react-router-dom";
import Men from "../assets/man.png";
import Women from "../assets/Women.png";
import Logo from "../assets/mainlogo.png";
import What from "../assets/what.webp";
import Phone from "../assets/phone.png";
import reone from "../assets/reviewone.jpg";
import retwo from "../assets/reviewtwo.jpg";
import rethree from "../assets/reviewthree.jpg";
import refour from "../assets/reviewfour.jpg";
import Fm from "../assets/samanaban.jpg";

function home()
{



  

     const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      new window.bootstrap.Carousel(carouselRef.current, {
        interval: 3000,
        ride: "carousel",
      });
    }
  }, []);


    const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const CARD_WIDTH = 280;
  const GAP = 32;
  const VISIBLE = 4;
  const TOTAL = 10;

  const maxIndex = TOTAL - VISIBLE;

  // 🔥 Detect screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setIsMobile(true);
        setSlideIndex(0); // reset slider
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (!isMobile && slideIndex < maxIndex) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prev = () => {
    if (!isMobile && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  useEffect(() => {
  document.title = "Home";
}, []);



const sendEmail = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  console.log("Property Type:", formData.get("propertyType")); // 👈 CHECK

  emailjs.sendForm(
    "service_0cc4tup",
    "template_28vl0cp",
    e.target,
    "AMawV6ygbMJr7WlNY"
  )
  .then(() => {
    alert("Thank you! We will contact you shortly.");
    e.target.reset();
  })
  .catch((error) => {
    alert("❌ Failed to send message");
    console.error(error);
  });
};


  const [sidebarOpen, setSidebarOpen] = useState(false);
  
    const openSidebar = () => setSidebarOpen(true);
    const closeSidebar = () => setSidebarOpen(false);
  
  
    const [projectOpen, setProjectOpen] = useState(false);
  


    return(
        <>


        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar py-3">
          <div className="container d-flex align-items-center justify-content-between">
        
            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="Logo" style={{background:"white",padding:"5px"}} />
            </Link>
        
            {/* Desktop Menu */}
            <ul className="navbar-nav desktop-menu align-items-center">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  Projects
                </a>
                <ul className="dropdown-menu">
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
        
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        
              <li className="nav-item ms-4">
                <a href="https://wa.me/+971508364706" target="_blank">
                  <img className="bounce" src={What} width="30" />
                </a>
              </li>

              <li className="nav-item nav-icons ms-5" style={{ marginTop: "-5px" }}>
                            <a href="tel:+971508364706"  target="_blank"><img className="bounce delay" src={Phone} alt="call" width="25" /></a>
              </li>


              
            </ul>
        
            {/* Mobile Icon */}
            <div className="mobile-icons d-none">
              <i className="fas fa-bars text-white fa-xl" onClick={openSidebar}></i>
            </div>
        
          </div>
        </nav>
        
        
              {/* MOBILE SIDEBAR */}
              <div className={`mobile-sidebar ${sidebarOpen ? "active" : ""}`}>
                <span className="sidebar-close" onClick={closeSidebar}>&times;</span>
        
                <ul className="list-unstyled sidebar-list">
                  <li><Link style={{textDecoration:"none"}} to={"/"} className="menu-item">Home</Link></li>
                  <li><Link style={{textDecoration:"none"}} to={"/about"} className="menu-item">About</Link></li>
                  {/* PROJECT DROPDOWN (MOBILE) */}
        <li className="menu-item">
          <span
            className="d-flex justify-content-between align-items-center"
            onClick={() => setProjectOpen(!projectOpen)}
            style={{ cursor: "pointer" }}
          >
            Projects
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
        
        
                <div className="mt-3 d-flex gap-3 bounce-icons">
                  <a href="https://wa.me/+971508364706?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20HighGain%20Could%20you%20please%20provide%20more%20details%20"target="_blank"><img className="bounce" src={What} width="28" alt="WhatsApp" /></a>
                  <a href="tel:+971508364706" target="_blank"><img className="bounce delay" src={Phone} width="28" alt="Phone" /></a>
                </div>

                
        
        
              </div>




           <section className="hero-banner d-flex align-items-center">
  <div className="container text-center">
    <div className="banner-content mx-auto">

      <h1 className="banner-title">
        DUBAI’S MOST RELIABLE REAL ESTATE PARTNER
      </h1>

      <p className="banner-subtitle">
        Connecting you to premium spaces crafted for comfort, class, and lasting value.
      </p>

      <Link to={"/marketingpartner"} className="btn banner-btn">
        Become a Partner <i className="fas fa-arrow-right ms-2 arrow-icon"></i>
      </Link>

    </div>
  </div>
</section>


            <div className="container-fluid" style={{background:" rgb(58, 58, 58)"}} data-aos="fade-down">
            <section className="about-section">
                <div className="container px-0">
                    <div className="row g-0">

                    
                    <div className="col-lg-6" style={{background:"black"}} >
                        <img src={Homein} className="img-fluid about-img" alt="" style={{background:" rgb(58, 58, 58)",paddingTop:"60px",paddingBottom:"50px"}}/>
                    </div>

                    
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="about-content">

                        <h2 className="about-title">
                            HIGHGAIN — WHERE TRUSTED PARTNERS & HAPPY CLIENTS CONNECT
                        </h2>

                        <p className="about-texts">
                            HighGain Real Estate is one of Dubai’s most trusted and reliable property firms,
                            dedicated to helping individuals, families, and investors find the perfect space to call
                            home or grow their wealth. We specialize in guiding clients through every step of their
                            real estate journey with transparency, expertise, and genuine care. Whether you are
                            searching for your dream home or exploring premium investment opportunities, we ensure
                            a smooth, informed, and rewarding experience.
                        </p>

                        <p className="about-text">
                            Our mission is simple: to turn property dreams into reality through trust, knowledge,
                            and exceptional service. With a deep understanding of the Dubai real estate market,
                            we focus on delivering value-driven solutions that empower our clients to make confident
                            and beneficial property decisions. At HighGain, your goals become our priority, and your
                            satisfaction is at the core of everything we do.
                        </p>

                        <p className="about-text">
                            Strengthening our commitment is the support of our dedicated marketing partners,
                            who play a vital role in enhancing our brand presence and promoting our projects with
                            strategic precision. Their expertise in digital outreach, real estate marketing, and client
                            communication ensures that our properties reach the right audience with accuracy and impact.
                            Together, we create wider opportunities, stronger visibility, and a seamless, well-informed
                            experience for every client we serve.
                        </p>

                        <button className="btn btn-light know-btn">
                             <Link style={{color:"black",textDecoration:"none"}} to={"/about"} >Know More</Link>
                        </button>

                        </div>
                    </div>
                    </div>
                </div>
            </section>
            </div>


          

            <section className="projects-section container py-5" data-aos="zoom-in">

                    {/* Header Row */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3 className="section-title">Explore our projects</h3>

                   
                         
                       
                    </div>

                    {/* Carousel */}
                    <div
                        id="projectsCarousel"
                        className="carousel slide"
                        ref={carouselRef} data-bs-interval="3000"
                    >
                        <div className="carousel-inner">

                        {/* Slide 1 */}
                        <div className="carousel-item active">
                            <div className="row g-4">

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="project-card">
                                <img src={Exone} className="img-fluid" alt="" />
                                <h5 className="project-title">DAMAC ISLANDS</h5>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="project-card">
                                <img src={Extwo} className="img-fluid" alt="" />
                                <h5 className="project-title">SAMANA HILLS</h5>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="project-card">
                                <img src={Exthree} className="img-fluid" alt="" />
                                <h5 className="project-title">CHELSEA RESIDENCES</h5>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="project-card">
                                <img src={Exfour} className="img-fluid" alt="" />
                                <h5 className="project-title">EMAAR</h5>
                                </div>
                            </div>

                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="carousel-item">
                            <div className="row g-4">

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="project-card">
                                <img src={Exone} className="img-fluid" alt="" />
                                <h5 className="project-title">PALM VIEWS</h5>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="project-card">
                                <img src={Extwo} className="img-fluid" alt="" />
                                <h5 className="project-title">MARINA BAY</h5>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="project-card">
                                <img src={Exthree} className="img-fluid" alt="" />
                                <h5 className="project-title">DOWNTOWN LUXE</h5>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="project-card">
                                <img src={Exfour} className="img-fluid" alt="" />
                                <h5 className="project-title">ARABIAN ESTATES</h5>
                                </div>
                            </div>

                            </div>
                        </div>

                        </div>
                    </div>

                    <div style={{textAlign:"center",marginTop:"30px"}}>

                    <Link  className="btn btn-outline-dark  px-4 py-2 see-all-btn" style={{textDecoration:"none"}} to={"/projects"} >See All Projects <i className="fas fa-arrow-right ms-2"></i></Link>
                  </div>
            </section>


            <div className="container-fluid" data-aos="fade-up-right">

                <div className="row">

                    <div className="col-lg-12">

                        <img src={Middle} width="100%" alt="" />

                    </div>

                </div>

            </div>



          <section className="partners-section py-5">
  <div className="container">

    {/* HEADER */}
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h5 className="partners-title">MEET THE PARTNERS</h5>

      {!isMobile && (
        <div className="arrow-group">
          <button onClick={prev} className="arrow-btn left-arrow">‹</button>
          <button onClick={next} className="arrow-btn right-arrow">›</button>
        </div>
      )}
    </div>

    {/* SLIDER */}
    <div className="partners-viewport">
      <div
        className="partners-track"
        style={{
          transform: isMobile
            ? "none"
            : `translateX(-${slideIndex * (CARD_WIDTH + GAP)}px)`
        }}
      >

        {/* CARD 1 */}
        <div className="partner-card">
          <div className="photo-box">
            <img src={Men} alt="Jaya Kumar" />
          </div>
          <h6 className="partner-name">Jaya Kumar</h6>
          <p className="partner-role">Director of Sales (Western Countries)</p>
        </div>

        {/* CARD 2 */}
        <div className="partner-card">
          <div className="photo-box">
            <img src={Men} alt="Dr. Rajarathinam" />
          </div>
          <h6 className="partner-name">Dr. Rajarathinam</h6>
          <p className="partner-role">Director of Sales (Canada / USA)</p>
        </div>

        {/* CARD 3 */}
        <div className="partner-card">
          <div className="photo-box">
            <img src={Men} alt="Dhayanithi Lingesan" />
          </div>
          <h6 className="partner-name">Dhayanithi Lingesan</h6>
          <p className="partner-role">Director of Sales (Chennai)</p>
        </div>

        {/* CARD 4 */}
        <div className="partner-card">
          <div className="photo-box">
            <img src={Women} alt="Deepika" />
          </div>
          <h6 className="partner-name">Deepika</h6>
          <p className="partner-role">Director of Sales (Chennai)</p>
        </div>

        {/* CARD 5 */}
        <div className="partner-card">
          <div className="photo-box">
            <img src={Men} alt="Thomas" />
          </div>
          <h6 className="partner-name">Thomas</h6>
          <p className="partner-role">Director of Sales (Pondicherry)</p>
        </div>

        {/* CARD 6 */}
        <div className="partner-card">
          <div className="photo-box">
            <img src={Men} alt="Siva Kumar" />
          </div>
          <h6 className="partner-name">Siva Kumar Ramasamy</h6>
          <p className="partner-role">Director of Sales (Madurai)</p>
        </div>

        {/* CARD 7 */}
        <div className="partner-card">
          <div className="photo-box">
            <img src={Men} alt="Nagaraj" />
          </div>
          <h6 className="partner-name">Nagaraj</h6>
          <p className="partner-role">Director of Sales (Coimbatore)</p>
        </div>

        {/* CARD 8 */}
        <div className="partner-card">
          <div className="photo-box">
            <img src={Men} alt="Seerin Gani" />
          </div>
          <h6 className="partner-name">Seerin Gani</h6>
          <p className="partner-role">Director of Sales (Tirunelveli)</p>
        </div>

        {/* CARD 9 */}
        <div className="partner-card">
          <div className="photo-box">
            <img src={Men} alt="Sabari" />
          </div>
          <h6 className="partner-name">Sabari</h6>
          <p className="partner-role">Director of Sales (Bangalore)</p>
        </div>

      </div>
    </div>

    <Link to="/marketingpartner" className="view-btn">
      View All Team →
    </Link>

  </div>
</section>

  
    

          

      



        <section className="review-section" data-aos="fade-down-right">

           
           

            <div className="container py-5 position-relative">

               
                <div id="reviewCarousel" className="carousel slide" data-bs-ride="carousel">

              
                
               
                <div className="carousel-inner">

                    
                    <div className="carousel-item active">
                    <div className="row gy-4">
                        
                        <div className="col-md-6">
                        <div className="review-card">
                            <img src={Person} className="review-img"/>

                            <p className="review-text">
                            “From the very first call, their team understood exactly what I was looking for...”
                            </p>

                            <p className="review-name">— Aisha Rahman</p>
                        </div>
                        </div>

                        <div className="col-md-6">
                        <div className="review-card">
                            <img src={Personone} className="review-img"/>

                            <p className="review-text">
                            “They handled everything from property search to final paperwork with outstanding professionalism...”
                            </p>

                            <p className="review-name">— Noura Al Saadi</p>
                        </div>
                        </div>

                    </div>
                    </div>

                    
                    <div className="carousel-item">
                    <div className="row gy-4">

                        <div className="col-md-6">
                        <div className="review-card">
                            <img src={reone} className="review-img"/>
                            <p className="review-text">“Amazing experience, highly responsive team...”</p>
                            <p className="review-name">— Hassan Ali</p>
                        </div>
                        </div>

                        <div className="col-md-6">
                        <div className="review-card">
                            <img src={retwo} className="review-img"/>
                            <p className="review-text">“Great professionalism and transparency...”</p>
                            <p className="review-name">— Maria Joseph</p>
                        </div>
                        </div>

                    </div>
                    </div>

                   
                    <div className="carousel-item">
                    <div className="row gy-4">
                        <div className="col-md-6"><div className="review-card"><img src={Men} className="review-img"/><p className="review-text">“Excellent service...”</p><p className="review-name">— Ahmed Khan</p></div></div>
                        <div className="col-md-6"><div className="review-card"><img src={Women} className="review-img"/><p className="review-text">“They really care...”</p><p className="review-name">— Fatima Noor</p></div></div>
                    </div>
                    </div>

                 
                    <div className="carousel-item">
                    <div className="row gy-4">
                        <div className="col-md-6"><div className="review-card"><img src={rethree} className="review-img"/><p className="review-text">“Great communication...”</p><p className="review-name">— Omar Al Saleh</p></div></div>
                        <div className="col-md-6"><div className="review-card"><img src={refour} className="review-img"/><p className="review-text">“Perfect buying experience...”</p><p className="review-name">— Zoya Malik</p></div></div>
                    </div>
                    </div>

                  
                    <div className="carousel-item">
                    <div className="row gy-4">
                        <div className="col-md-6"><div className="review-card"><img src={Person} className="review-img"/><p className="review-text">“Great support...”</p><p className="review-name">— Yusuf Farhan</p></div></div>
                        <div className="col-md-6"><div className="review-card"><img src={Personone} className="review-img"/><p className="review-text">“Very professional...”</p><p className="review-name">— Noor Sabreen</p></div></div>
                    </div>
                    </div>

                </div>

                </div>
            </div>
            <div className="carousel-indicators">
                    <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="4"></button>
                </div>


        </section>





            <section className="contact-section py-5"  data-aos="fade-down-left">
                <div className="container">
                    <div className="contact-wrapper">

                    <div className="row g-0 align-items-center">

                    
                        <div className="col-lg-6 p-5 form-area">

                        <h3 className="contact-title text-center mb-4">GET IN TOUCH</h3>
                      <form onSubmit={sendEmail}>

                        {/* Property Type */}
                       

                        {/* Full Name */}
                        <div className="mb-4">
                          <input
                            type="text"
                            name="fullName"
                            className="form-control contact-input"
                            placeholder="Your Name*"
                            required
                          />
                        </div>

                        {/* Phone */}
                        <div className="mb-4">
                          <input
                            type="text"
                            name="phone"
                            className="form-control contact-input"
                            placeholder="Phone Number*"
                            required
                          />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                          <input
                            type="email"
                            name="email"
                            className="form-control contact-input"
                            placeholder="Email*"
                            required
                          />
                        </div>


                         <div className="mb-4">
                         <select
                            name="propertyType"
                            className="form-control contact-input"
                            required
                          >
                            <option value="">Property Type</option>
                            <option value="Apartments">Apartments</option>
                            <option value="Villas">Villas</option>
                          </select>
                        </div>


                        {/* Message */}
                        <div className="mb-4">
                          <textarea
                            name="message"
                            rows="4"
                            className="form-control contact-input"
                            placeholder="Message"
                            required
                          ></textarea>
                        </div>

                        <button type="submit" className="btn submit-btn w-100">
                          SUBMIT
                        </button>

                      </form>


                        </div>

                    
                        <div className="col-lg-6">
                        <img src={Fm} className="img-fluid contact-img" alt=""/>
                        </div>

                    </div>

                    </div>
                </div>
            </section>



            <section className="footer-banner" data-aos="zoom-in">
                <div className="banner-content">

                    <h2 className="footer-title">
                        Looking for a Home That Truly Fits Your Lifestyle?
                    </h2>

                    <p className="footer-subtitle">
                        Explore handpicked luxury properties with personalized support at every step.
                    </p>

                   
                       <Link className="btn footer-btn" style={{textDecoration:"none"}} to={"/contact"} >   Find Your Dream Home </Link>
                 

                </div>
            </section>



            <Footer/>





        </>
    )
}

export default home;