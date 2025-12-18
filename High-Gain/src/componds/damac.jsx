
import Navbar from "./navbar";
import Footer from "./footer";
import Dasone from "../assets/dasone.jpg";
import Dastwo from "../assets/dastwo.webp";
import Dasthree from "../assets/dasthree.webp";
import Dasfour from "../assets/dasfour.jpg";
import Dasfive from "../assets/dasfive.jpg";
import Dassisx from "../assets/dassix.jpg";
import Dasseven from "../assets/dasseven.webp";
import { useEffect } from "react";
import Abtn from "../assets/damacabtn.webp";


function damac()
{


     useEffect(()=>
        {
            document.title="Damac"
        },[])
        


    return(

        <>

                    <Navbar/>



        
                    <section className="hg-damac-section">
                        <div className="hg-banners-overlay"></div>
        
                        <div className="container h-100">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-lg-12 hg-banners-text text-center">
                                    <h1>DAMAC</h1>
                                
                                </div>
                            </div>
                        </div>
                    </section>
        
        
        
                                     <section class="sanctuary-section" data-aos="zoom-out">
                                              <div class="container">
                                                <div class="row align-items-center g-5">
                              
                                              
                                                  <div class="col-lg-6">
                                                    <h2 class="sanctuary-title">YOUR DAMAC SANCTUARY BY THE SEA</h2>

                                                    <p class="sanctuary-text">
                                                    Experience a world of refined luxury where iconic design meets exceptional
                                                    waterfront living. DAMAC’s signature sea-facing residences are masterfully
                                                    designed to offer breathtaking views, expansive layouts, and a lifestyle shaped
                                                    by elegance and comfort. Set within a high-growth destination and surrounded by
                                                    world-class amenities, these exclusive 4, 5, and 6-bedroom villas combine bold
                                                    architecture with premium finishes. Designed for discerning homeowners and
                                                    forward-thinking investors, DAMAC delivers a prestigious lifestyle with strong
                                                    capital appreciation and long-term value.
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
                                                      <h2 className="sanctuary-title" style={{fontWeight:"500",color:"white"}}>DAMAC PROJECTS</h2>
                                                  </div>
                              
                                                <div id="animatedSlider" class="carousel slide" data-bs-ride="carousel">
                                                  <div class="carousel-inner">
                              
                                                  
                                                    <div class="carousel-item active">
                                                      <div class="row justify-content-center align-items-center g-4">
                              
                                                    
                                                        <div class="col-lg-3 d-none d-lg-block">
                                                          <div class="slider-card side">
                                                            <img src={Dasfive} alt=""/>
                                                          </div>
                                                        </div>
                              
                                                        <div class="col-lg-6 col-md-10">
                                                          <div class="slider-card center animate">
                                                            <img src={Dasone} alt=""/>
                                                            <div class="slider-content">
                                                              <h4>DAMAC ISLANDS</h4>
                                                            </div>
                                                          </div>
                                                        </div>
                              
                                                    
                                                        <div class="col-lg-3 d-none d-lg-block">
                                                          <div class="slider-card side">
                                                            <img src={Dastwo} alt=""/>
                                                          </div>
                                                        </div>
                              
                                                      </div>
                                                    </div>
                              
                                                
                                                    <div class="carousel-item">
                                                      <div class="row justify-content-center align-items-center g-4">
                              
                                                        <div class="col-lg-3 d-none d-lg-block">
                                                          <div class="slider-card side">
                                                            <img src={Dasone} alt=""/>
                                                          </div>
                                                        </div>
                              
                                                        <div class="col-lg-6 col-md-10">
                                                          <div class="slider-card center animate">
                                                            <img src={Dastwo} alt=""/>
                                                            <div class="slider-content">
                                                              <h4>DAMAC HILLS</h4>
                                                            </div>
                                                          </div>
                                                        </div>
                              
                                                        <div class="col-lg-3 d-none d-lg-block">
                                                          <div class="slider-card side">
                                                            <img src={Dasthree} alt=""/>
                                                          </div>
                                                        </div>
                              
                                                      </div>
                                                    </div>
                              
                              
                              
                                                    <div class="carousel-item">
                                                      <div class="row justify-content-center align-items-center g-4">
                              
                                                        <div class="col-lg-3 d-none d-lg-block">
                                                          <div class="slider-card side">
                                                            <img src={Dastwo} alt=""/>
                                                          </div>
                                                        </div>
                              
                                                        <div class="col-lg-6 col-md-10">
                                                          <div class="slider-card center animate">
                                                            <img src={Dasthree} alt=""/>
                                                            <div class="slider-content">
                                                              <h4>DAMAC RIVERSIDE</h4>
                                                            </div>
                                                          </div>
                                                        </div>
                              
                                                        <div class="col-lg-3 d-none d-lg-block">
                                                          <div class="slider-card side">
                                                            <img src={Dasfour} alt=""/>
                                                          </div>
                                                        </div>
                              
                                                      </div>
                                                    </div>
                              
                              
                              
                                                    <div class="carousel-item">
                                                      <div class="row justify-content-center align-items-center g-4">
                              
                                                        <div class="col-lg-3 d-none d-lg-block">
                                                          <div class="slider-card side">
                                                            <img src={Dasthree} alt=""/>
                                                          </div>
                                                        </div>
                              
                                                        <div class="col-lg-6 col-md-10">
                                                          <div class="slider-card center animate">
                                                            <img src={Dasfour} alt=""/>
                                                            <div class="slider-content">
                                                              <h4>DAMAC LAGOONS</h4>
                                                            </div>
                                                          </div>
                                                        </div>
                              
                                                        <div class="col-lg-3 d-none d-lg-block">
                                                          <div class="slider-card side">
                                                            <img src={Dasfive} alt=""/>
                                                          </div>
                                                        </div>
                              
                                                      </div>
                                                    </div>
                              
                              
                                                    <div class="carousel-item">
                                                      <div class="row justify-content-center align-items-center g-4">
                              
                                                        <div class="col-lg-3 d-none d-lg-block">
                                                          <div class="slider-card side">
                                                            <img src={Dasfour} alt=""/>
                                                          </div>
                                                        </div>
                              
                                                        <div class="col-lg-6 col-md-10">
                                                          <div class="slider-card center animate">
                                                            <img src={Dasfive} alt=""/>
                                                            <div class="slider-content">
                                                              <h4>CHELSEA RESIDENCES BY DAMAC</h4>
                                                        
                                                            </div>
                                                          </div>
                                                        </div>
                              
                                                        <div class="col-lg-3 d-none d-lg-block">
                                                          <div class="slider-card side">
                                                            <img src={Dasone} alt=""/>
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
export default damac;