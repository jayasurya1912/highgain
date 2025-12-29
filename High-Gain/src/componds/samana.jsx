import Navbar from "./navbar";
import Footer from "./footer";
import Samone from "../assets/samone.webp";
import Samtwo from "../assets/samtwo.webp";
import Samthree from "../assets/samthree.webp";
import Samfour from "../assets/samfour.jpg";
import Samfive from "../assets/samfive.webp";
import Samsix from "../assets/samsix.webp";
import { useEffect } from "react";
import Abtn from "../assets/samanaabtn.webp";
function samana(){



     useEffect(()=>
        {
            document.title="Samana"
        },[])
        



    return(

        <>

        <Navbar/>




                    <section className="hg-sam-section">
                        <div className="hg-banners-overlay"></div>
        
                        <div className="container h-100">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-lg-12 hg-banners-text text-center">
                                    <h1>SAMANA</h1>
                                
                                </div>
                            </div>
                        </div>
                    </section>
        
        
        
                        <section className="sanctuary-section" data-aos="zoom-out">
                           <div className="container">
                             <div className="row align-items-center g-5">
           
                           
                               <div className="col-lg-6">
                                 <h2 className="sanctuary-title">YOUR SAMANA SANCTUARY BY THE SEA</h2>

                                <p className="sanctuary-text">
                                Step into a lifestyle defined by contemporary elegance and smart investment
                                opportunities. Samana’s signature sea-facing residences are thoughtfully designed
                                to combine modern aesthetics with functional luxury. Positioned within a rapidly
                                appreciating waterfront destination, these exclusive 4, 5, and 6-bedroom villas
                                offer panoramic views, spacious layouts, and premium finishes throughout. Crafted
                                for those seeking both elevated living and strong returns, Samana delivers a
                                perfect balance of comfort, privacy, and long-term investment potential.
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
                                   <h2 className="sanctuary-title" style={{fontWeight:"500",color:"white"}}>SAMANA PROJECTS</h2>
                               </div>
           
                             <div id="animatedSlider" className="carousel slide" data-bs-ride="carousel">
                               <div className="carousel-inner">
           
                               
                                 <div className="carousel-item active">
                                   <div className="row justify-content-center align-items-center g-4">
           
                                 
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Samfive} alt=""/>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-6 col-md-10">
                                       <div className="slider-card center animate">
                                         <img src={Samone} alt=""/>
                                         <div className="slider-content">
                                           <h4>SAMANA HILLS</h4>
                                         </div>
                                       </div>
                                     </div>
           
                                 
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Samtwo} alt=""/>
                                       </div>
                                     </div>
           
                                   </div>
                                 </div>
           
                             
                                 <div className="carousel-item">
                                   <div className="row justify-content-center align-items-center g-4">
           
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Samone} alt=""/>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-6 col-md-10">
                                       <div className="slider-card center animate">
                                         <img src={Samtwo} alt=""/>
                                         <div className="slider-content">
                                           <h4>SAMANA GREENS</h4>
                                         </div>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Samthree} alt=""/>
                                       </div>
                                     </div>
           
                                   </div>
                                 </div>
           
           
           
                                 <div className="carousel-item">
                                   <div className="row justify-content-center align-items-center g-4">
           
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Samtwo} alt=""/>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-6 col-md-10">
                                       <div className="slider-card center animate">
                                         <img src={Samthree} alt=""/>
                                         <div className="slider-content">
                                           <h4>SAMANA GOLF AVENUE</h4>
                                         </div>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Samfour} alt=""/>
                                       </div>
                                     </div>
           
                                   </div>
                                 </div>
           
           
           
                                 <div className="carousel-item">
                                   <div className="row justify-content-center align-items-center g-4">
           
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Samthree} alt=""/>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-6 col-md-10">
                                       <div className="slider-card center animate">
                                         <img src={Samfour} alt=""/>
                                         <div className="slider-content">
                                           <h4>SAMANA PARK VIEWS</h4>
                                         </div>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Samfive} alt=""/>
                                       </div>
                                     </div>
           
                                   </div>
                                 </div>
           
           
                                 <div className="carousel-item">
                                   <div className="row justify-content-center align-items-center g-4">
           
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Samfour} alt=""/>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-6 col-md-10">
                                       <div className="slider-card center animate">
                                         <img src={Samfive} alt=""/>
                                         <div className="slider-content">
                                           <h4>SAMANA WAVES</h4>
                                     
                                         </div>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Samone} alt=""/>
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
export default samana;