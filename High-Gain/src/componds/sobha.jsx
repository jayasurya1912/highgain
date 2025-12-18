import Navbar from "./navbar";
import Footer from "./footer";
import Soone from "../assets/soone.webp";
import Sotwo from "../assets/sotwo.jpg";
import Sothree from "../assets/sothree.jpg";
import Sofour from "../assets/sofour.jpg";
import Sofive from "../assets/sofive.webp";
import Sosix from "../assets/sosix.webp";
import { useEffect } from "react";
import Abtn from "../assets/aziziabtn.webp";


function sobha(){


     useEffect(()=>{
            document.title="Sobha"
        },[])
        


    return(

        <>

            <Navbar/>





                                    <section className="hg-so-section">
                                        <div className="hg-banners-overlay"></div>
                        
                                        <div className="container h-100">
                                            <div className="row h-100 justify-content-center align-items-center">
                                                <div className="col-lg-12 hg-banners-text text-center">
                                                    <h1>SOBHA</h1>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                        
                        

                        <section class="sanctuary-section" data-aos="zoom-out">
                            <div class="container">
                              <div class="row align-items-center g-5">
            
                            
                                <div class="col-lg-6">
                                  <h2 class="sanctuary-title">YOUR SOBHA SANCTUARY BY THE SEA</h2>

                                    <p class="sanctuary-text">
                                    Experience a world of uncompromising quality where craftsmanship and luxury
                                    waterfront living converge. Sobha’s sea-facing residences are meticulously
                                    designed with precision engineering, refined aesthetics, and an unwavering focus
                                    on excellence. Located within a prime, high-growth coastal destination, these
                                    exclusive 4, 5, and 6-bedroom villas offer expansive views, thoughtfully planned
                                    layouts, and superior finishes throughout. Built for those who value lasting
                                    quality and consistent appreciation, Sobha delivers a refined lifestyle with
                                    enduring value and strong long-term investment potential.
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
                                    <h2 className="sanctuary-title" style={{fontWeight:"500",color:"white"}}>SOBHA PROJECTS</h2>
                                </div>
            
                              <div id="animatedSlider" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="hover">
                                <div class="carousel-inner">
            
                                
                                  <div class="carousel-item active">
                                    <div class="row justify-content-center align-items-center g-4">
            
                                  
                                      <div class="col-lg-3 d-none d-lg-block">
                                        <div class="slider-card side">
                                          <img src={Sofive} alt=""/>
                                        </div>
                                      </div>
            
                                      <div class="col-lg-6 col-md-10">
                                        <div class="slider-card center animate">
                                          <img src={Soone} alt=""/>
                                          <div class="slider-content">
                                            <h4>VEGA RESIDENCE</h4>
                                          </div>
                                        </div>
                                      </div>
            
                                  
                                      <div class="col-lg-3 d-none d-lg-block">
                                        <div class="slider-card side">
                                          <img src={Sotwo} alt=""/>
                                        </div>
                                      </div>
            
                                    </div>
                                  </div>
            
                              
                                  <div class="carousel-item">
                                    <div class="row justify-content-center align-items-center g-4">
            
                                      <div class="col-lg-3 d-none d-lg-block">
                                        <div class="slider-card side">
                                          <img src={Soone} alt=""/>
                                        </div>
                                      </div>
            
                                      <div class="col-lg-6 col-md-10">
                                        <div class="slider-card center animate">
                                          <img src={Sotwo} alt=""/>
                                          <div class="slider-content">
                                            <h4>ELECTRA APARTMENTS</h4>
                                          </div>
                                        </div>
                                      </div>
            
                                      <div class="col-lg-3 d-none d-lg-block">
                                        <div class="slider-card side">
                                          <img src={Sothree} alt=""/>
                                        </div>
                                      </div>
            
                                    </div>
                                  </div>
            
            
            
                                  <div class="carousel-item">
                                    <div class="row justify-content-center align-items-center g-4">
            
                                      <div class="col-lg-3 d-none d-lg-block">
                                        <div class="slider-card side">
                                          <img src={Sotwo} alt=""/>
                                        </div>
                                      </div>
            
                                      <div class="col-lg-6 col-md-10">
                                        <div class="slider-card center animate">
                                          <img src={Sothree} alt=""/>
                                          <div class="slider-content">
                                            <h4>ADHARA STAR</h4>
                                          </div>
                                        </div>
                                      </div>
            
                                      <div class="col-lg-3 d-none d-lg-block">
                                        <div class="slider-card side">
                                          <img src={Sofour} alt=""/>
                                        </div>
                                      </div>
            
                                    </div>
                                  </div>
            
            
            
                                  <div class="carousel-item">
                                    <div class="row justify-content-center align-items-center g-4">
            
                                      <div class="col-lg-3 d-none d-lg-block">
                                        <div class="slider-card side">
                                          <img src={Sothree} alt=""/>
                                        </div>
                                      </div>
            
                                      <div class="col-lg-6 col-md-10">
                                        <div class="slider-card center animate">
                                          <img src={Sofour} alt=""/>
                                          <div class="slider-content">
                                            <h4>AVIOR BY ACUBE</h4>
                                          </div>
                                        </div>
                                      </div>
            
                                      <div class="col-lg-3 d-none d-lg-block">
                                        <div class="slider-card side">
                                          <img src={Sofive} alt=""/>
                                        </div>
                                      </div>
            
                                    </div>
                                  </div>
            
            
                                  <div class="carousel-item">
                                    <div class="row justify-content-center align-items-center g-4">
            
                                      <div class="col-lg-3 d-none d-lg-block">
                                        <div class="slider-card side">
                                          <img src={Sofour} alt=""/>
                                        </div>
                                      </div>
            
                                      <div class="col-lg-6 col-md-10">
                                        <div class="slider-card center animate">
                                          <img src={Sofive} alt=""/>
                                          <div class="slider-content">
                                            <h4>THE CROWN JEWEL</h4>
                                      
                                          </div>
                                        </div>
                                      </div>
            
                                      <div class="col-lg-3 d-none d-lg-block">
                                        <div class="slider-card side">
                                          <img src={Soone} alt=""/>
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
export default sobha;