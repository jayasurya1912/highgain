
import Navbar from "./navbar";
import Footer from "./footer";
import Binone from "../assets/binone.webp";
import Bintwo from "../assets/bintwo.webp";
import Binthree from "../assets/binthree.webp";
import Binfour from "../assets/binfour.webp";
import Binfive from "../assets/binfive.webp";
import Binsix from "../assets/binsix.png";
import Binseven from "../assets/binseven.jpg";
import Bineight from "../assets/bineight.webp";
import Binnine from "../assets/binnin.jpeg";
import { useEffect } from "react";
import Abtn from "../assets/binabtn.webp";



function binghatti(){

     useEffect(()=>
        {
            document.title="Binghatti"
        },[])
        


    return(

        <>

            <Navbar/>




            
                        <section className="hg-bin-section">
                            <div className="hg-banners-overlay"></div>
            
                            <div className="container h-100">
                                <div className="row h-100 justify-content-center align-items-center">
                                    <div className="col-lg-12 hg-banners-text text-center">
                                        <h1>BINGHATTI</h1>
                                    
                                    </div>
                                </div>
                            </div>
                        </section>
            
            
            
                                    <section class="sanctuary-section" data-aos="zoom-out">
                                        <div class="container">
                                          <div class="row align-items-center g-5">
                        
                                        
                                            <div class="col-lg-6">
                                              <h2 class="sanctuary-title">YOUR BINGHATTI SANCTUARY BY THE SEA</h2>

                                                <p class="sanctuary-text">
                                                Discover a signature lifestyle defined by bold architecture and intelligent
                                                design. Binghatti’s waterfront residences combine iconic aesthetics with
                                                thoughtfully planned living spaces that maximize light, views, and comfort.
                                                Located in a high-growth destination with seamless connectivity, these exclusive
                                                4, 5, and 6-bedroom villas offer panoramic sea views, premium finishes, and
                                                refined interiors. Crafted for discerning homeowners and smart investors alike,
                                                Binghatti delivers a lifestyle of distinction, privacy, and exceptional long-term
                                                value in one of the region’s most sought-after developments.
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
                                                <h2 className="sanctuary-title" style={{fontWeight:"500",color:"white"}}>BINGHATTI PROJECTS</h2>
                                            </div>
                        
                                          <div id="animatedSlider" class="carousel slide" data-bs-ride="carousel">
                                            <div class="carousel-inner">
                        
                                            
                                              <div class="carousel-item active">
                                                <div class="row justify-content-center align-items-center g-4">
                        
                                              
                                                  <div class="col-lg-3 d-none d-lg-block">
                                                    <div class="slider-card side">
                                                      <img src={Binfive} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                  <div class="col-lg-6 col-md-10">
                                                    <div class="slider-card center animate">
                                                      <img src={Binone} alt=""/>
                                                      <div class="slider-content">
                                                        <h4>AQUARISE</h4>
                                                      </div>
                                                    </div>
                                                  </div>
                        
                                              
                                                  <div class="col-lg-3 d-none d-lg-block">
                                                    <div class="slider-card side">
                                                      <img src={Bintwo} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                </div>
                                              </div>
                        
                                          
                                              <div class="carousel-item">
                                                <div class="row justify-content-center align-items-center g-4">
                        
                                                  <div class="col-lg-3 d-none d-lg-block">
                                                    <div class="slider-card side">
                                                      <img src={Binone} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                  <div class="col-lg-6 col-md-10">
                                                    <div class="slider-card center animate">
                                                      <img src={Bintwo} alt=""/>
                                                      <div class="slider-content">
                                                        <h4>SKYBLADE</h4>
                                                      </div>
                                                    </div>
                                                  </div>
                        
                                                  <div class="col-lg-3 d-none d-lg-block">
                                                    <div class="slider-card side">
                                                      <img src={Binthree} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                </div>
                                              </div>
                        
                        
                        
                                              <div class="carousel-item">
                                                <div class="row justify-content-center align-items-center g-4">
                        
                                                  <div class="col-lg-3 d-none d-lg-block">
                                                    <div class="slider-card side">
                                                      <img src={Bintwo} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                  <div class="col-lg-6 col-md-10">
                                                    <div class="slider-card center animate">
                                                      <img src={Binthree} alt=""/>
                                                      <div class="slider-content">
                                                        <h4>SKY HALL</h4>
                                                      </div>
                                                    </div>
                                                  </div>
                        
                                                  <div class="col-lg-3 d-none d-lg-block">
                                                    <div class="slider-card side">
                                                      <img src={Binfour} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                </div>
                                              </div>
                        
                        
                        
                                              <div class="carousel-item">
                                                <div class="row justify-content-center align-items-center g-4">
                        
                                                  <div class="col-lg-3 d-none d-lg-block">
                                                    <div class="slider-card side">
                                                      <img src={Binthree} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                  <div class="col-lg-6 col-md-10">
                                                    <div class="slider-card center animate">
                                                      <img src={Binfour} alt=""/>
                                                      <div class="slider-content">
                                                        <h4>SKY RISE</h4>
                                                      </div>
                                                    </div>
                                                  </div>
                        
                                                  <div class="col-lg-3 d-none d-lg-block">
                                                    <div class="slider-card side">
                                                      <img src={Binfive} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                </div>
                                              </div>
                        
                        
                                              <div class="carousel-item">
                                                <div class="row justify-content-center align-items-center g-4">
                        
                                                  <div class="col-lg-3 d-none d-lg-block">
                                                    <div class="slider-card side">
                                                      <img src={Binfour} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                  <div class="col-lg-6 col-md-10">
                                                    <div class="slider-card center animate">
                                                      <img src={Binfive} alt=""/>
                                                      <div class="slider-content">
                                                        <h4>ONE BY BINGHATTI</h4>
                                                  
                                                      </div>
                                                    </div>
                                                  </div>
                        
                                                  <div class="col-lg-3 d-none d-lg-block">
                                                    <div class="slider-card side">
                                                      <img src={Binone} alt=""/>
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
export default binghatti;