import Navbar from "./navbar";
import Footer from "./footer";
import Ellione from "../assets/ellione.webp";
import Ellitwo from "../assets/ellitwo.jpg";
import Ellithree from "../assets/ellithree.jpg";
import Ellifour from "../assets/ellifour.jpg";
import Ellifive from "../assets/ellifive.webp";
import Ellisix from "../assets/ellisix.webp";
import Elliseven from "../assets/elliseven.webp";
import Ellieight from "../assets/ellieight.webp";
import { useEffect } from "react";
import Abtn from "../assets/elliabtn.webp";

function ellignton()
{

     useEffect(()=>
        {
            document.title="Ellignton"
        },[])
        


    return(
        <>

        <Navbar/>


                            <section className="hg-elli-section">
                                    <div className="hg-banners-overlay"></div>
                    
                                    <div className="container h-100">
                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-12 hg-banners-text text-center">
                                                <h1>ELLIGNTON</h1>
                                            
                                            </div>
                                        </div>
                                    </div>
                            </section>
                
                
                
                                                <section class="sanctuary-section" data-aos="zoom-out">
                                                      <div class="container">
                                                        <div class="row align-items-center g-5">
                                      
                                                      
                                                          <div class="col-lg-6">
                                                            <h2 class="sanctuary-title">YOUR ELLINGTON SANCTUARY BY THE SEA</h2>

                                                            <p class="sanctuary-text">
                                                            Experience a refined waterfront lifestyle where artful design and thoughtful
                                                            living come together in perfect harmony. Ellington’s sea-facing residences are
                                                            meticulously crafted with a focus on detail, natural light, and elegant spatial
                                                            flow. Set within a prime, high-growth coastal location, these exclusive 4, 5, and
                                                            6-bedroom villas offer panoramic views, sophisticated interiors, and premium
                                                            finishes throughout. Designed for those who value architectural excellence and
                                                            long-term appreciation, Ellington delivers a lifestyle of understated luxury,
                                                            privacy, and enduring investment value.
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
                                      
                                      
                                      
                                                  <div className="container-fluid mt-5">
                                                      <div className="row">
                                                         
                                                      </div>
                                                  </div>
                                      
                                      
                                      
                                                 <section class="animated-center-slider py-5" data-aos="zoom-in" style={{marginTop:"-60px"}}>
                                                      <div class="container">
                                      
                                                         <div className="col-lg-12 text-center mt-3" style={{marginBottom:"30px"}}>
                                                              <h2 className="sanctuary-title" style={{fontWeight:"500",color:"white"}}>ELLIGNTON PROJECTS</h2>
                                                          </div>
                                      
                                                        <div id="animatedSlider" class="carousel slide" data-bs-ride="carousel">
                                                          <div class="carousel-inner">
                                      
                                                          
                                                            <div class="carousel-item active">
                                                              <div class="row justify-content-center align-items-center g-4">
                                      
                                                            
                                                                <div class="col-lg-3 d-none d-lg-block">
                                                                  <div class="slider-card side">
                                                                    <img src={Ellifive} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                                <div class="col-lg-6 col-md-10">
                                                                  <div class="slider-card center animate">
                                                                    <img src={Ellione} alt=""/>
                                                                    <div class="slider-content">
                                                                      <h4>BELGRAVIA</h4>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                      
                                                            
                                                                <div class="col-lg-3 d-none d-lg-block">
                                                                  <div class="slider-card side">
                                                                    <img src={Ellitwo} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                              </div>
                                                            </div>
                                      
                                                        
                                                            <div class="carousel-item">
                                                              <div class="row justify-content-center align-items-center g-4">
                                      
                                                                <div class="col-lg-3 d-none d-lg-block">
                                                                  <div class="slider-card side">
                                                                    <img src={Ellione} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                                <div class="col-lg-6 col-md-10">
                                                                  <div class="slider-card center animate">
                                                                    <img src={Ellitwo} alt=""/>
                                                                    <div class="slider-content">
                                                                      <h4>BELGRAVIA HEIGHTS I</h4>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                      
                                                                <div class="col-lg-3 d-none d-lg-block">
                                                                  <div class="slider-card side">
                                                                    <img src={Ellithree} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                              </div>
                                                            </div>
                                      
                                      
                                      
                                                            <div class="carousel-item">
                                                              <div class="row justify-content-center align-items-center g-4">
                                      
                                                                <div class="col-lg-3 d-none d-lg-block">
                                                                  <div class="slider-card side">
                                                                    <img src={Ellitwo} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                                <div class="col-lg-6 col-md-10">
                                                                  <div class="slider-card center animate">
                                                                    <img src={Ellithree} alt=""/>
                                                                    <div class="slider-content">
                                                                      <h4>BELGRAVIA SQUARE</h4>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                      
                                                                <div class="col-lg-3 d-none d-lg-block">
                                                                  <div class="slider-card side">
                                                                    <img src={Ellifour} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                              </div>
                                                            </div>
                                      
                                      
                                      
                                                            <div class="carousel-item">
                                                              <div class="row justify-content-center align-items-center g-4">
                                      
                                                                <div class="col-lg-3 d-none d-lg-block">
                                                                  <div class="slider-card side">
                                                                    <img src={Ellithree} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                                <div class="col-lg-6 col-md-10">
                                                                  <div class="slider-card center animate">
                                                                    <img src={Ellifour} alt=""/>
                                                                    <div class="slider-content">
                                                                      <h4>BELGRAVIA GARDENS</h4>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                      
                                                                <div class="col-lg-3 d-none d-lg-block">
                                                                  <div class="slider-card side">
                                                                    <img src={Ellifive} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                              </div>
                                                            </div>
                                      
                                      
                                                            <div class="carousel-item">
                                                              <div class="row justify-content-center align-items-center g-4">
                                      
                                                                <div class="col-lg-3 d-none d-lg-block">
                                                                  <div class="slider-card side">
                                                                    <img src={Ellifour} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                                <div class="col-lg-6 col-md-10">
                                                                  <div class="slider-card center animate">
                                                                    <img src={Ellifive} alt=""/>
                                                                    <div class="slider-content">
                                                                      <h4>THE HILLGATEL</h4>
                                                                
                                                                    </div>
                                                                  </div>
                                                                </div>
                                      
                                                                <div class="col-lg-3 d-none d-lg-block">
                                                                  <div class="slider-card side">
                                                                    <img src={Ellione} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                              </div>
                                                            </div>
                                      
                                      
                                                            
                                      
                                                          </div>
                                      
                                                      
                                                          <button class="carousel-control-prev" type="button" data-bs-target="#animatedSlider" data-bs-slide="prev">
                                                            <span class="carousel-control-prev-icon"></span>
                                                          </button>
                                      
                                                          <button class="carousel-control-next" type="button" data-bs-target="#animatedSlider" data-bs-slide="next">
                                                            <span class="carousel-control-next-icon"></span>
                                                          </button>
                                      
                                                        </div>
                                      
                                                      </div>
                                                </section>
        



        <Footer/>

        </>
    )
}
export default ellignton;