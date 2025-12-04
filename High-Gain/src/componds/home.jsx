
import Navbar from "./navbar";
import { useEffect, useRef } from "react";
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

                    <button className="btn btn-light banner-btn">
                        Become a Partner <i className="fas fa-arrow-right ms-2"></i>
                    </button>

                    </div>
                </div>
             </section>

            <div className="container-fluid" style={{background:"black"}}>
            <section class="about-section">
                <div class="container px-0">
                    <div class="row g-0">

                    
                    <div class="col-lg-6" style={{background:"black"}}>
                        <img src={Homein} class="img-fluid about-img" alt="" style={{paddingTop:"60px",paddingBottom:"50px"}}/>
                    </div>

                    
                    <div class="col-lg-6 d-flex align-items-center">
                        <div class="about-content">

                        <h2 class="about-title">
                            HIGHGAIN — WHERE TRUSTED PARTNERS & HAPPY CLIENTS CONNECT
                        </h2>

                        <p class="about-text">
                            HighGain Real Estate is one of Dubai’s most trusted and reliable property firms,
                            dedicated to helping individuals, families, and investors find the perfect space to call
                            home or grow their wealth. We specialize in guiding clients through every step of their
                            real estate journey with transparency, expertise, and genuine care. Whether you are
                            searching for your dream home or exploring premium investment opportunities, we ensure
                            a smooth, informed, and rewarding experience.
                        </p>

                        <p class="about-text">
                            Our mission is simple: to turn property dreams into reality through trust, knowledge,
                            and exceptional service. With a deep understanding of the Dubai real estate market,
                            we focus on delivering value-driven solutions that empower our clients to make confident
                            and beneficial property decisions. At HighGain, your goals become our priority, and your
                            satisfaction is at the core of everything we do.
                        </p>

                        <p class="about-text">
                            Strengthening our commitment is the support of our dedicated marketing partners,
                            who play a vital role in enhancing our brand presence and promoting our projects with
                            strategic precision. Their expertise in digital outreach, real estate marketing, and client
                            communication ensures that our properties reach the right audience with accuracy and impact.
                            Together, we create wider opportunities, stronger visibility, and a seamless, well-informed
                            experience for every client we serve.
                        </p>

                        <button class="btn btn-light know-btn">
                            Know More
                        </button>

                        </div>
                    </div>
                    </div>
                </div>
            </section>
            </div>


          

            <section className="projects-section container py-5">

                    {/* Header Row */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3 className="section-title">Explore our projects</h3>

                        <button className="btn btn-outline-dark  px-4 py-2 see-all-btn">
                        See All Projects <i className="fas fa-arrow-right ms-2"></i>
                        </button>
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


            <div className="container-fluid">

                <div className="row">

                    <div className="col-lg-12">

                        <img src={Middle} width="100%" alt="" />

                    </div>

                </div>

            </div>





          

        <section class="partners-section container py-5">

               
                <h3 class="partners-title mb-4">MEET THE PATNERS</h3>

             
                <div class="position-relative">

                   
                    <div class="partners-slider d-flex" id="partnersSlider">

                   
                    <div class="partner-card">
                        <div class="photo-box">PHOTO</div>
                        <h5 class="partner-name">Name</h5>
                        <p class="partner-role">Designation</p>
                    </div>

                   
                    <div class="partner-card">
                        <div class="photo-box">PHOTO</div>
                        <h5 class="partner-name">Name</h5>
                        <p class="partner-role">Designation</p>
                    </div>

                    
                    <div class="partner-card">
                        <div class="photo-box">PHOTO</div>
                        <h5 class="partner-name">Name</h5>
                        <p class="partner-role">Designation</p>
                    </div>

                   
                    <div class="partner-card">
                        <div class="photo-box">PHOTO</div>
                        <h5 class="partner-name">Name</h5>
                        <p class="partner-role">Designation</p>
                    </div>

                  
                    <div class="partner-card">
                        <div class="photo-box">PHOTO</div>
                        <h5 class="partner-name">Name</h5>
                        <p class="partner-role">Designation</p>
                    </div>

                    

                    </div>

               
                    <button class="arrow-btn left-arrow" id="prevBtn">❮</button>
                    <button class="arrow-btn right-arrow" id="nextBtn">❯</button>

                </div>

               
                <button class="btn btn-outline-dark  mt-5 px-4 py-2 view-btn">
                    View All Team <i class="fas fa-arrow-right ms-2"></i>
                </button>

        </section>



        <section class="review-section">

           
           

            <div class="container py-5 position-relative">

               
                <div id="reviewCarousel" class="carousel slide" data-bs-ride="carousel">

              
                
               
                <div class="carousel-inner">

                    
                    <div class="carousel-item active">
                    <div class="row gy-4">
                        
                        <div class="col-md-6">
                        <div class="review-card">
                            <img src={Person} class="review-img"/>

                            <p class="review-text">
                            “From the very first call, their team understood exactly what I was looking for...”
                            </p>

                            <p class="review-name">— Aisha Rahman</p>
                        </div>
                        </div>

                        <div class="col-md-6">
                        <div class="review-card">
                            <img src={Personone} class="review-img"/>

                            <p class="review-text">
                            “They handled everything from property search to final paperwork with outstanding professionalism...”
                            </p>

                            <p class="review-name">— Noura Al Saadi</p>
                        </div>
                        </div>

                    </div>
                    </div>

                    
                    <div class="carousel-item">
                    <div class="row gy-4">

                        <div class="col-md-6">
                        <div class="review-card">
                            <img src="img3.jpg" class="review-img"/>
                            <p class="review-text">“Amazing experience, highly responsive team...”</p>
                            <p class="review-name">— Hassan Ali</p>
                        </div>
                        </div>

                        <div class="col-md-6">
                        <div class="review-card">
                            <img src="img4.jpg" class="review-img"/>
                            <p class="review-text">“Great professionalism and transparency...”</p>
                            <p class="review-name">— Maria Joseph</p>
                        </div>
                        </div>

                    </div>
                    </div>

                   
                    <div class="carousel-item">
                    <div class="row gy-4">
                        <div class="col-md-6"><div class="review-card"><img src="img5.jpg" class="review-img"/><p class="review-text">“Excellent service...”</p><p class="review-name">— Ahmed Khan</p></div></div>
                        <div class="col-md-6"><div class="review-card"><img src="img6.jpg" class="review-img"/><p class="review-text">“They really care...”</p><p class="review-name">— Fatima Noor</p></div></div>
                    </div>
                    </div>

                 
                    <div class="carousel-item">
                    <div class="row gy-4">
                        <div class="col-md-6"><div class="review-card"><img src="img7.jpg" class="review-img"/><p class="review-text">“Great communication...”</p><p class="review-name">— Omar Al Saleh</p></div></div>
                        <div class="col-md-6"><div class="review-card"><img src="img8.jpg" class="review-img"/><p class="review-text">“Perfect buying experience...”</p><p class="review-name">— Zoya Malik</p></div></div>
                    </div>
                    </div>

                  
                    <div class="carousel-item">
                    <div class="row gy-4">
                        <div class="col-md-6"><div class="review-card"><img src="img9.jpg" class="review-img"/><p class="review-text">“Great support...”</p><p class="review-name">— Yusuf Farhan</p></div></div>
                        <div class="col-md-6"><div class="review-card"><img src="img10.jpg" class="review-img"/><p class="review-text">“Very professional...”</p><p class="review-name">— Noor Sabreen</p></div></div>
                    </div>
                    </div>

                </div>

                </div>
            </div>
            <div class="carousel-indicators">
                    <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="4"></button>
                </div>


        </section>





            <section class="contact-section py-5">
                <div class="container">
                    <div class="contact-wrapper">

                    <div class="row g-0 align-items-center">

                    
                        <div class="col-lg-6 p-5 form-area">

                        <h3 class="contact-title text-center mb-4">GET IN TOUCH</h3>

                        <form>
                            <div class="mb-4">
                            <input type="text" class="form-control contact-input" placeholder="Your Name*"/>
                            </div>

                            <div class="mb-4">
                            <input type="text" class="form-control contact-input" placeholder="Phone Number*"/>
                            </div>

                            <div class="mb-4">
                            <input type="email" class="form-control contact-input" placeholder="Email*"/>
                            </div>

                            <div class="mb-4">
                            <textarea rows="4" class="form-control contact-input" placeholder="Message"></textarea>
                            </div>

                            <button type="submit" class="btn submit-btn w-100">SUBMIT</button>
                        </form>

                        </div>

                    
                        <div class="col-lg-6">
                        <img src={Form} class="img-fluid contact-img" alt=""/>
                        </div>

                    </div>

                    </div>
                </div>
            </section>



            <section class="footer-banner">
                <div class="banner-content">

                    <h2 class="footer-title">
                        Looking for a Home That Truly Fits Your Lifestyle?
                    </h2>

                    <p class="footer-subtitle">
                        Explore handpicked luxury properties with personalized support at every step.
                    </p>

                    <button class="btn footer-btn">
                        Find Your Dream Home
                    </button>

                </div>
            </section>



            <Footer/>





        </>
    )
}

export default home;