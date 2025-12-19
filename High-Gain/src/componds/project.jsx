import Navbar from "./navbar";
import Footer from "./footer";
import Aziz from "../assets/aziziban.jpg";
import Acube from "../assets/acubeban.jpg";
import { Link } from "react-router-dom";
import acube from "./acube";
import Damac from "../assets/damacban.jpg";
import Bin from "../assets/binban.jpg";
import Object from "../assets/objban.jpg";
import Emmar from "../assets/emmarban.jpg";
import Elli from "../assets/elliban.jpg";
import Sobha from "../assets/sobhaban.jpg";
import Samana from "../assets/samanaban.jpg";
import samana from "./samana";
import Abtn from "../assets/samanaabtn.webp";
import { useRef, useEffect } from "react";
import Exone from "../assets/exon.jpeg";
import Extwo from "../assets/extw.jpeg";
import Exthree from "../assets/exthree.jpg";
import Exfour from "../assets/exfour.png";



function project()
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


                                 <section className="hg-pro-section">
                                    <div className="hg-banners-overlay"></div>
                                            
                                        <div className="container h-100">
                                            <div className="row h-100 justify-content-center align-items-center">
                                                <div className="col-lg-12 hg-banners-text text-center">
                                                    <h1>PROJECTS</h1>
                                                                    
                                                </div>
                                            </div>
                                        </div>
                                 </section>


                                            <section class="sanctuary-section" data-aos="zoom-out">
                                                 <div class="container">
                                                   <div class="row align-items-center g-5">
                                 
                                                 
                                                     <div class="col-lg-6">
                                                      <h2 class="sanctuary-title">Premium Real Estate Projects by High Gain</h2>

   
                                                       <p class="sanctuary-text">
                                                        Discover a curated portfolio of premium residential and investment opportunities
                                                        brought to you by High Gain Real Estate. Featuring iconic developments from
                                                        Azizi, A-Cube, Binghatti, Ellington, Emaar, Object One, Samana, Sobha, and DAMAC,
                                                        each project is thoughtfully designed to reflect architectural excellence,
                                                        modern living, and long-term value. From waterfront residences and luxury villas
                                                        to contemporary urban apartments, these developments offer exceptional locations,
                                                        world-class amenities, and high-growth potential. Whether you are a discerning
                                                        homeowner or a strategic investor, High Gain connects you to properties that
                                                        deliver lifestyle excellence, strong rental yields, and sustainable capital
                                                        appreciation in Dubai’s most sought-after destinations.
                                                        </p>

   
                      
                                 
                                                     </div>
                                 
                                                 
                                                     <div class="col-lg-6 position-relative">
                                                       <div class="image-wrapper">
                                                         <img src={Abtn} alt="Luxury Villa" class="img-fluid sanctuary-img"/>
                                                       </div>
                                                     </div>
                                 
                                                   </div>
                                                 </div>
                                            </section> 





                                           <section className="projects-section container py-5" data-aos="zoom-in">

      {/* Header Row */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="section-title">Explore our projects</h3>

        {/* Carousel Controls */}
        <div className="carousel-controls">
          <button
            className="carousel-control-prev custom-arrow"
            type="button"
            data-bs-target="#projectsCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next custom-arrow"
            type="button"
            data-bs-target="#projectsCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        id="projectsCarousel"
        className="carousel slide"
        ref={carouselRef}
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-3">
                <Link to="/azizi">
                <div className="project-card">
                  <img src={Aziz} className="img-fluid" alt="Azizi" />
                  <h5 className="project-title">AZIZI</h5>
                </div>
                </Link>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <Link to="/acube">
                <div className="project-card">
                  <img src={Acube} className="img-fluid" alt="A-Cube" />
                  <h5 className="project-title">A-CUBE</h5>
                </div>
                </Link>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <Link to="/binghatti">
                <div className="project-card">
                  <img src={Bin} className="img-fluid" alt="Binghatti" />
                  <h5 className="project-title">BINGHATTI</h5>
                </div>
                </Link>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <Link to="/damac">
                <div className="project-card">
                  <img src={Damac} className="img-fluid" alt="Damac" />
                  <h5 className="project-title">DAMAC</h5>
                </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-3">
                <Link to="/emmar">
                <div className="project-card">
                  <img src={Emmar} className="img-fluid" alt="Emaar" />
                  <h5 className="project-title">EMMAR</h5>
                </div>
                </Link>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <Link to="/ellignton">
                <div className="project-card">
                  <img src={Elli} className="img-fluid" alt="Ellington" />
                  <h5 className="project-title">ELLINGTON</h5>
                </div>
                </Link>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <Link to="/samana">
                <div className="project-card">
                  <img src={Samana} className="img-fluid" alt="Samana" />
                  <h5 className="project-title">SAMANA</h5>
                </div>
                </Link>
              </div>

             
              <div className="col-12 col-md-6 col-lg-3">
                 <Link to="/sobha">
                <div className="project-card">
                  <img src={Sobha} className="img-fluid" alt="Sobha" />
                  <h5 className="project-title">SOBHA</h5>
                </div>
                </Link>
              </div>
              
            </div>
          </div>

        </div>
      </div>

    </section>                          
                                                     





                                                    









        <Footer/>
        
        </>
    )
}
export default project;