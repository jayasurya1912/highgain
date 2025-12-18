import Navbar from "./navbar";
import Footer from "./footer";

import Ob from "../assets/obone.jpg";
import Obtwo from "../assets/obtwo.jpg";
import Obthree from "../assets/obthree.jpg";
import Obfour from "../assets/obfour.webp";
import Obfive from "../assets/obfive.jpg";
import Obsix from "../assets/obsix.jpg";
import Obseven from "../assets/obseven.jpg";
import Obeight from "../assets/obeight.webp";
import Obnine from "../assets/obnine.png";
import { useEffect } from "react";
import Abtn from "../assets/objectabtn.webp";
function object(){


     useEffect(()=>
        {
            document.title="Object"
        },[])
        

    return(

        <>

        <Navbar/>


        
                    <section className="hg-object-section">
                        <div className="hg-banners-overlay"></div>
        
                        <div className="container h-100">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-lg-12 hg-banners-text text-center">
                                    <h1>OBJECT 1</h1>
                                
                                </div>
                            </div>
                        </div>
                    </section>
        
        
        
                                                        <section class="sanctuary-section" data-aos="zoom-out">
                                                           <div class="container">
                                                             <div class="row align-items-center g-5">
                                           
                                                           
                                                               <div class="col-lg-6">
                                                                <h2 class="sanctuary-title">YOUR OBJECT SANCTUARY BY THE SEA</h2>

                                                                <p class="sanctuary-text">
                                                                Enter a refined waterfront lifestyle where precision design and elevated living
                                                                come together seamlessly. OBJECT presents exclusive sea-facing residences
                                                                crafted for modern lifestyles and high-value investment returns. Strategically
                                                                located in a fast-appreciating destination, these expansive 4, 5, and 6-bedroom
                                                                villas offer panoramic views, intelligent layouts, and premium finishes throughout.
                                                                Designed with a focus on privacy, elegance, and long-term growth, OBJECT delivers
                                                                a future-ready lifestyle that blends luxury living with exceptional investment
                                                                potential.
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
                                                                   <h2 className="sanctuary-title" style={{fontWeight:"500",color:"white"}}>OBJECT PROJECTS</h2>
                                                               </div>
                                           
                                                             <div id="animatedSlider" class="carousel slide" data-bs-ride="carousel">
                                                               <div class="carousel-inner">
                                           
                                                               
                                                                 <div class="carousel-item active">
                                                                   <div class="row justify-content-center align-items-center g-4">
                                           
                                                                 
                                                                     <div class="col-lg-3 d-none d-lg-block">
                                                                       <div class="slider-card side">
                                                                         <img src={Obfive} alt=""/>
                                                                       </div>
                                                                     </div>
                                           
                                                                     <div class="col-lg-6 col-md-10">
                                                                       <div class="slider-card center animate">
                                                                         <img src={Ob} alt=""/>
                                                                         <div class="slider-content">
                                                                           <h4>RA1N RESIDENCE</h4>
                                                                         </div>
                                                                       </div>
                                                                     </div>
                                           
                                                                 
                                                                     <div class="col-lg-3 d-none d-lg-block">
                                                                       <div class="slider-card side">
                                                                         <img src={Obtwo} alt=""/>
                                                                       </div>
                                                                     </div>
                                           
                                                                   </div>
                                                                 </div>
                                           
                                                             
                                                                 <div class="carousel-item">
                                                                   <div class="row justify-content-center align-items-center g-4">
                                           
                                                                     <div class="col-lg-3 d-none d-lg-block">
                                                                       <div class="slider-card side">
                                                                         <img src={Ob} alt=""/>
                                                                       </div>
                                                                     </div>
                                           
                                                                     <div class="col-lg-6 col-md-10">
                                                                       <div class="slider-card center animate">
                                                                         <img src={Obtwo} alt=""/>
                                                                         <div class="slider-content">
                                                                           <h4>1WOOD RESIDENCE</h4>
                                                                         </div>
                                                                       </div>
                                                                     </div>
                                           
                                                                     <div class="col-lg-3 d-none d-lg-block">
                                                                       <div class="slider-card side">
                                                                         <img src={Obthree} alt=""/>
                                                                       </div>
                                                                     </div>
                                           
                                                                   </div>
                                                                 </div>
                                           
                                           
                                           
                                                                 <div class="carousel-item">
                                                                   <div class="row justify-content-center align-items-center g-4">
                                           
                                                                     <div class="col-lg-3 d-none d-lg-block">
                                                                       <div class="slider-card side">
                                                                         <img src={Obtwo} alt=""/>
                                                                       </div>
                                                                     </div>
                                           
                                                                     <div class="col-lg-6 col-md-10">
                                                                       <div class="slider-card center animate">
                                                                         <img src={Obthree} alt=""/>
                                                                         <div class="slider-content">
                                                                           <h4>OZONE 1 RESIDENCE</h4>
                                                                         </div>
                                                                       </div>
                                                                     </div>
                                           
                                                                     <div class="col-lg-3 d-none d-lg-block">
                                                                       <div class="slider-card side">
                                                                         <img src={Obfour} alt=""/>
                                                                       </div>
                                                                     </div>
                                           
                                                                   </div>
                                                                 </div>
                                           
                                           
                                           
                                                                 <div class="carousel-item">
                                                                   <div class="row justify-content-center align-items-center g-4">
                                           
                                                                     <div class="col-lg-3 d-none d-lg-block">
                                                                       <div class="slider-card side">
                                                                         <img src={Obthree} alt=""/>
                                                                       </div>
                                                                     </div>
                                           
                                                                     <div class="col-lg-6 col-md-10">
                                                                       <div class="slider-card center animate">
                                                                         <img src={Obfour} alt=""/>
                                                                         <div class="slider-content">
                                                                           <h4>W1NNER TOWER</h4>
                                                                         </div>
                                                                       </div>
                                                                     </div>
                                           
                                                                     <div class="col-lg-3 d-none d-lg-block">
                                                                       <div class="slider-card side">
                                                                         <img src={Obfive} alt=""/>
                                                                       </div>
                                                                     </div>
                                           
                                                                   </div>
                                                                 </div>
                                           
                                           
                                                                 <div class="carousel-item">
                                                                   <div class="row justify-content-center align-items-center g-4">
                                           
                                                                     <div class="col-lg-3 d-none d-lg-block">
                                                                       <div class="slider-card side">
                                                                         <img src={Obfour} alt=""/>
                                                                       </div>
                                                                     </div>
                                           
                                                                     <div class="col-lg-6 col-md-10">
                                                                       <div class="slider-card center animate">
                                                                         <img src={Obfive} alt=""/>
                                                                         <div class="slider-content">
                                                                           <h4>LUM1NAR TOWER 1</h4>
                                                                     
                                                                         </div>
                                                                       </div>
                                                                     </div>
                                           
                                                                     <div class="col-lg-3 d-none d-lg-block">
                                                                       <div class="slider-card side">
                                                                         <img src={Ob} alt=""/>
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

export default object;