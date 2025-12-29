
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
            
            
            
                                    <section className="sanctuary-section" data-aos="zoom-out">
                                        <div className="container">
                                          <div className="row align-items-center g-5">
                        
                                        
                                            <div className="col-lg-6">
                                              <h2 className="sanctuary-title">YOUR BINGHATTI SANCTUARY BY THE SEA</h2>

                                                <p className="sanctuary-text">
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
                        
                                        
                                            <div className="col-lg-6 position-relative">
                                              <div className="image-wrapper">
                                                <img src={Abtn} alt="Luxury Villa" className="img-fluid sanctuary-img"/>
                                              </div>
                                            </div>
                        
                                          </div>
                                        </div>
                                    </section>
                        
                        
                        
                                    <div className="container-fluid mt-5">
                                        <div className="row">
                                           
                                        </div>
                                    </div>
                        
                        
                        
                                   <section className="animated-center-slider py-5" data-aos="zoom-in" style={{marginTop:"-60px"}}>
                                        <div className="container">
                        
                                           <div className="col-lg-12 text-center mt-3" style={{marginBottom:"30px"}}>
                                                <h2 className="sanctuary-title" style={{fontWeight:"500",color:"white"}}>BINGHATTI PROJECTS</h2>
                                            </div>
                        
                                          <div id="animatedSlider" className="carousel slide" data-bs-ride="carousel">
                                            <div className="carousel-inner">
                        
                                            
                                              <div className="carousel-item active">
                                                <div className="row justify-content-center align-items-center g-4">
                        
                                              
                                                  <div className="col-lg-3 d-none d-lg-block">
                                                    <div className="slider-card side">
                                                      <img src={Binfive} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                  <div className="col-lg-6 col-md-10">
                                                    <div className="slider-card center animate">
                                                      <img src={Binone} alt=""/>
                                                      <div className="slider-content">
                                                        <h4>AQUARISE</h4>
                                                      </div>
                                                    </div>
                                                  </div>
                        
                                              
                                                  <div className="col-lg-3 d-none d-lg-block">
                                                    <div className="slider-card side">
                                                      <img src={Bintwo} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                </div>
                                              </div>
                        
                                          
                                              <div className="carousel-item">
                                                <div className="row justify-content-center align-items-center g-4">
                        
                                                  <div className="col-lg-3 d-none d-lg-block">
                                                    <div className="slider-card side">
                                                      <img src={Binone} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                  <div className="col-lg-6 col-md-10">
                                                    <div className="slider-card center animate">
                                                      <img src={Bintwo} alt=""/>
                                                      <div className="slider-content">
                                                        <h4>SKYBLADE</h4>
                                                      </div>
                                                    </div>
                                                  </div>
                        
                                                  <div className="col-lg-3 d-none d-lg-block">
                                                    <div className="slider-card side">
                                                      <img src={Binthree} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                </div>
                                              </div>
                        
                        
                        
                                              <div className="carousel-item">
                                                <div className="row justify-content-center align-items-center g-4">
                        
                                                  <div className="col-lg-3 d-none d-lg-block">
                                                    <div className="slider-card side">
                                                      <img src={Bintwo} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                  <div className="col-lg-6 col-md-10">
                                                    <div className="slider-card center animate">
                                                      <img src={Binthree} alt=""/>
                                                      <div className="slider-content">
                                                        <h4>SKY HALL</h4>
                                                      </div>
                                                    </div>
                                                  </div>
                        
                                                  <div className="col-lg-3 d-none d-lg-block">
                                                    <div className="slider-card side">
                                                      <img src={Binfour} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                </div>
                                              </div>
                        
                        
                        
                                              <div className="carousel-item">
                                                <div className="row justify-content-center align-items-center g-4">
                        
                                                  <div className="col-lg-3 d-none d-lg-block">
                                                    <div className="slider-card side">
                                                      <img src={Binthree} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                  <div className="col-lg-6 col-md-10">
                                                    <div className="slider-card center animate">
                                                      <img src={Binfour} alt=""/>
                                                      <div className="slider-content">
                                                        <h4>SKY RISE</h4>
                                                      </div>
                                                    </div>
                                                  </div>
                        
                                                  <div className="col-lg-3 d-none d-lg-block">
                                                    <div className="slider-card side">
                                                      <img src={Binfive} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                </div>
                                              </div>
                        
                        
                                              <div className="carousel-item">
                                                <div className="row justify-content-center align-items-center g-4">
                        
                                                  <div className="col-lg-3 d-none d-lg-block">
                                                    <div className="slider-card side">
                                                      <img src={Binfour} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                  <div className="col-lg-6 col-md-10">
                                                    <div className="slider-card center animate">
                                                      <img src={Binfive} alt=""/>
                                                      <div className="slider-content">
                                                        <h4>ONE BY BINGHATTI</h4>
                                                  
                                                      </div>
                                                    </div>
                                                  </div>
                        
                                                  <div className="col-lg-3 d-none d-lg-block">
                                                    <div className="slider-card side">
                                                      <img src={Binone} alt=""/>
                                                    </div>
                                                  </div>
                        
                                                </div>
                                              </div>
                        
                        
                                              
                        
                                            </div>
                        
                                        
                                            <button className="carousel-control-prev" type="button" data-bs-target="#animatedSlider" data-bs-slide="prev">
                                              <span className="carousel-control-prev-icon"></span>
                                            </button>
                        
                                            <button className="carousel-control-next" type="button" data-bs-target="#animatedSlider" data-bs-slide="next">
                                              <span className="carousel-control-next-icon"></span>
                                            </button>
                        
                                          </div>
                        
                                        </div>
                                  </section>
                        
            





            <Footer/>

        
        </>
    )
}
export default binghatti;