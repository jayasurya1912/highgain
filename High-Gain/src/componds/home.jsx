
import Navbar from "./navbar";
import { useEffect, useRef,useState } from "react";
import Apple from "../assets/mainlogo.jpg"
import Homein from "../assets/abtn.jpg"
import Middle from "../assets/middlebanner.png"
import Review from "../assets/reviewback.png";
import Form from "../assets/form.jpg";
import Foot from "../assets/footback.png";
import Footer from "./footer";
import Person from "../assets/personone.jpg"
import Personone from "../assets/persontwo.jpg";
import Exone from "../assets/exone.png";
import Extwo from "../assets/extwo.png";
import Exthree from "../assets/exthree.jpg";
import Exfour from "../assets/exfour.png";
import { Link } from "react-router-dom";
import Men from "../assets/man.png";
import Women from "../assets/Women.png"

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


    return(
        <>


            <Navbar/>
           <section className="hero-banner d-flex align-items-center">
                <div className="container">
                    <div className="banner-content">

                    <h1 className="banner-title">
                        DUBAI’S MOST RELIABLE REAL ESTATE PARTNER
                    </h1>

                    <p className="banner-subtitle">
                        Connecting you to premium spaces crafted for comfort, class, and lasting value.
                    </p>

                    <button className="btn btn-light banner-btn" >
                        <Link style={{color:"black",textDecoration:"none"}} to={"/marketingpartner"} > Become a Partner <i className="fas fa-arrow-right ms-2"></i></Link>
                    </button>

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

                        <p className="about-text">
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
                             <Link style={{color:"black",textDecoration:"none"}} to={"/marketingpartner"} >Know More</Link>
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

                   
                         <Link  className="btn btn-outline-dark  px-4 py-2 see-all-btn" style={{textDecoration:"none"}} to={"/projects"} >See All Projects <i className="fas fa-arrow-right ms-2"></i></Link>
                       
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
                        <button onClick={prev}>‹</button>
                        <button onClick={next}>›</button>
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

                        {/* 10 MANUAL CARDS */}
                        <div className="partner-card"><div className="photo"><img src={Men} width="100%" alt="" /></div><h6>Jaya Kumar</h6><p>Director of Sales (Western Countries)</p></div>
                        <div className="partner-card"><div className="photo"><img src={Men} width="100%" alt="" /></div><h6>Dr. Rajarathinam</h6><p>Director of Sales (Canada / USA)</p></div>
                        <div className="partner-card"><div className="photo"><img src={Men} width="100%" alt="" /></div><h6>Dhayanithi Lingesan</h6><p>Director of Sales (Chennai)</p></div>
                        <div className="partner-card"><div className="photo"><img src={Women} width="100%" alt="" /></div><h6>Deepika</h6><p>Director of Sales (Chennai)</p></div>
                        <div className="partner-card"><div className="photo"><img src={Men} width="100%" alt="" /></div><h6>Thomas</h6><p>Director of Sales (Pondicherry)</p></div>

                        <div className="partner-card"><div className="photo"><img src={Men} width="100%" alt="" /></div><h6>Siva Kumar Ramasamy</h6><p>Director of Sales (Madurai)</p></div>
                        <div className="partner-card"><div className="photo"><img src={Men} width="100%" alt="" /></div><h6>Nagaraj</h6><p>Director of Sales (Coimbatore)</p></div>
                        <div className="partner-card"><div className="photo"><img src={Men} width="100%" alt="" /></div><h6>Seerin Gani</h6><p>Director of Sales (Tirunelveli)</p></div>
                        <div className="partner-card"><div className="photo"><img src={Men} width="100%" alt="" /></div><h6>Sabari</h6><p>Director of Sales (Bangalore)</p></div>
                        

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
                            <img src={Person} className="review-img"/>
                            <p className="review-text">“Amazing experience, highly responsive team...”</p>
                            <p className="review-name">— Hassan Ali</p>
                        </div>
                        </div>

                        <div className="col-md-6">
                        <div className="review-card">
                            <img src={Personone} className="review-img"/>
                            <p className="review-text">“Great professionalism and transparency...”</p>
                            <p className="review-name">— Maria Joseph</p>
                        </div>
                        </div>

                    </div>
                    </div>

                   
                    <div className="carousel-item">
                    <div className="row gy-4">
                        <div className="col-md-6"><div className="review-card"><img src={Person} className="review-img"/><p className="review-text">“Excellent service...”</p><p className="review-name">— Ahmed Khan</p></div></div>
                        <div className="col-md-6"><div className="review-card"><img src={Personone} className="review-img"/><p className="review-text">“They really care...”</p><p className="review-name">— Fatima Noor</p></div></div>
                    </div>
                    </div>

                 
                    <div className="carousel-item">
                    <div className="row gy-4">
                        <div className="col-md-6"><div className="review-card"><img src={Person} className="review-img"/><p className="review-text">“Great communication...”</p><p className="review-name">— Omar Al Saleh</p></div></div>
                        <div className="col-md-6"><div className="review-card"><img src={Personone} className="review-img"/><p className="review-text">“Perfect buying experience...”</p><p className="review-name">— Zoya Malik</p></div></div>
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

                        <form>
                            <div className="mb-4">
                            <input type="text" className="form-control contact-input" placeholder="Your Name*"/>
                            </div>

                            <div className="mb-4">
                            <input type="text" className="form-control contact-input" placeholder="Phone Number*"/>
                            </div>

                            <div className="mb-4">
                            <input type="email" className="form-control contact-input" placeholder="Email*"/>
                            </div>

                            <div className="mb-4">
                            <textarea rows="4" className="form-control contact-input" placeholder="Message"></textarea>
                            </div>

                            <button type="submit" className="btn submit-btn w-100">SUBMIT</button>
                        </form>

                        </div>

                    
                        <div className="col-lg-6">
                        <img src={Form} className="img-fluid contact-img" alt=""/>
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