
import Navbar from "./navbar";
import Footer from "./footer";
import Emone from "../assets/emone.jpg";
import Emtwo from "../assets/emtwo.jpg";
import Emthree from "../assets/emthree.webp";
import Emfour from "../assets/emfour.png";
import Emfive from "../assets/emfive.jpg";
import Emsix from "../assets/emsix.jpg";
import Emseven from "../assets/emseven.webp";
import { useEffect } from "react";
import Abtn from "../assets/emmarabtn.webp";

function emmar(){


     useEffect(()=>
        {
            document.title="Emmar"
        },[])
        


    return(

        <>


            <Navbar/>


        
                    <section className="hg-emmar-section">
                        <div className="hg-banners-overlay"></div>
        
                        <div className="container h-100">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-lg-12 hg-banners-text text-center">
                                    <h1>EMMAR</h1>
                                
                                </div>
                            </div>
                        </div>
                    </section>
        
        
        
                                            <section className="sanctuary-section" data-aos="zoom-out">
                                               <div className="container">
                                                 <div className="row align-items-center g-5">
                               
                                               
                                                   <div className="col-lg-6">
                                                     <h2 className="sanctuary-title">YOUR EMAAR SANCTUARY BY THE SEA</h2>

                                                    <p className="sanctuary-text">
                                                    Discover an iconic waterfront lifestyle defined by timeless design and unmatched
                                                    quality. EMAAR’s sea-facing residences are meticulously crafted to offer expansive
                                                    views, natural light, and a refined living experience shaped by elegance and
                                                    comfort. Located within one of the most prestigious master-planned communities,
                                                    these exclusive 4, 5, and 6-bedroom villas feature spacious layouts, premium
                                                    finishes, and seamless access to world-class amenities. Designed for both luxury
                                                    living and long-term investment growth, EMAAR delivers enduring value, prestige,
                                                    and exceptional lifestyle appeal.
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
                                                       <h2 className="sanctuary-title" style={{fontWeight:"500",color:"white"}}>EMMAR PROJECTS</h2>
                                                   </div>
                               
                                                 <div id="animatedSlider" className="carousel slide" data-bs-ride="carousel">
                                                   <div className="carousel-inner">
                               
                                                   
                                                     <div className="carousel-item active">
                                                       <div className="row justify-content-center align-items-center g-4">
                               
                                                     
                                                         <div className="col-lg-3 d-none d-lg-block">
                                                           <div className="slider-card side">
                                                             <img src={Emfive} alt=""/>
                                                           </div>
                                                         </div>
                               
                                                         <div className="col-lg-6 col-md-10">
                                                           <div className="slider-card center animate">
                                                             <img src={Emone} alt=""/>
                                                             <div className="slider-content">
                                                               <h4>BURJ VISTA</h4>
                                                             </div>
                                                           </div>
                                                         </div>
                               
                                                     
                                                         <div className="col-lg-3 d-none d-lg-block">
                                                           <div className="slider-card side">
                                                             <img src={Emtwo} alt=""/>
                                                           </div>
                                                         </div>
                               
                                                       </div>
                                                     </div>
                               
                                                 
                                                     <div className="carousel-item">
                                                       <div className="row justify-content-center align-items-center g-4">
                               
                                                         <div className="col-lg-3 d-none d-lg-block">
                                                           <div className="slider-card side">
                                                             <img src={Emone} alt=""/>
                                                           </div>
                                                         </div>
                               
                                                         <div className="col-lg-6 col-md-10">
                                                           <div className="slider-card center animate">
                                                             <img src={Emtwo} alt=""/>
                                                             <div className="slider-content">
                                                               <h4>DUBAI MARINA</h4>
                                                             </div>
                                                           </div>
                                                         </div>
                               
                                                         <div className="col-lg-3 d-none d-lg-block">
                                                           <div className="slider-card side">
                                                             <img src={Emthree} alt=""/>
                                                           </div>
                                                         </div>
                               
                                                       </div>
                                                     </div>
                               
                               
                               
                                                     <div className="carousel-item">
                                                       <div className="row justify-content-center align-items-center g-4">
                               
                                                         <div className="col-lg-3 d-none d-lg-block">
                                                           <div className="slider-card side">
                                                             <img src={Emtwo} alt=""/>
                                                           </div>
                                                         </div>
                               
                                                         <div className="col-lg-6 col-md-10">
                                                           <div className="slider-card center animate">
                                                             <img src={Emthree} alt=""/>
                                                             <div className="slider-content">
                                                               <h4>EMIRATES LIVING</h4>
                                                             </div>
                                                           </div>
                                                         </div>
                               
                                                         <div className="col-lg-3 d-none d-lg-block">
                                                           <div className="slider-card side">
                                                             <img src={Emfour} alt=""/>
                                                           </div>
                                                         </div>
                               
                                                       </div>
                                                     </div>
                               
                               
                               
                                                     <div className="carousel-item">
                                                       <div className="row justify-content-center align-items-center g-4">
                               
                                                         <div className="col-lg-3 d-none d-lg-block">
                                                           <div className="slider-card side">
                                                             <img src={Emthree} alt=""/>
                                                           </div>
                                                         </div>
                               
                                                         <div className="col-lg-6 col-md-10">
                                                           <div className="slider-card center animate">
                                                             <img src={Emfour} alt=""/>
                                                             <div className="slider-content">
                                                               <h4>ARABIAN RANCHES</h4>
                                                             </div>
                                                           </div>
                                                         </div>
                               
                                                         <div className="col-lg-3 d-none d-lg-block">
                                                           <div className="slider-card side">
                                                             <img src={Emfive} alt=""/>
                                                           </div>
                                                         </div>
                               
                                                       </div>
                                                     </div>
                               
                               
                                                     <div className="carousel-item">
                                                       <div className="row justify-content-center align-items-center g-4">
                               
                                                         <div className="col-lg-3 d-none d-lg-block">
                                                           <div className="slider-card side">
                                                             <img src={Emfour} alt=""/>
                                                           </div>
                                                         </div>
                               
                                                         <div className="col-lg-6 col-md-10">
                                                           <div className="slider-card center animate">
                                                             <img src={Emfive} alt=""/>
                                                             <div className="slider-content">
                                                               <h4>EMAAR BEACHFRONT</h4>
                                                         
                                                             </div>
                                                           </div>
                                                         </div>
                               
                                                         <div className="col-lg-3 d-none d-lg-block">
                                                           <div className="slider-card side">
                                                             <img src={Emone} alt=""/>
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
export default emmar;