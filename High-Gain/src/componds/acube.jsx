import Navbar from "./navbar";
import Footer from "./footer";
import Cubeone from "../assets/Cubeone.webp";
import Cubetwo from "../assets/Cubetwo.jpg";
import Cubethree from "../assets/Cubethree.jpeg";
import Cubefour from "../assets/Cubefour.webp";
import Cubefive from "../assets/Cubefive.webp";
import { useEffect } from "react";
import Abtn from "../assets/acubeabtn.webp"

function acube()
{


     useEffect(()=>
        {
            document.title="A-Cube"
        },[])
        


    return(

        <>


        <Navbar/>


        <section className="hg-acube-section">
                <div className="hg-banners-overlay"></div>

                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-12 hg-banners-text text-center">
                            <h1>A-CUBE</h1>
                        
                        </div>
                    </div>
                </div>
            </section>



                    <section className="sanctuary-section" data-aos="zoom-out">
                           <div className="container">
                             <div className="row align-items-center g-5">
           
                           
                               <div className="col-lg-6">
                                 <h2 className="sanctuary-title">YOUR A-CUBE SANCTUARY BY THE SEA</h2>

                                    <p className="sanctuary-text">
                                    Step into an elevated coastal lifestyle where contemporary design meets
                                    intelligent living. A-CUBE presents exclusive sea-facing residences crafted for
                                    those who seek both refined comfort and long-term value. Positioned along a
                                    serene waterfront with seamless access to lifestyle amenities, these spacious
                                    4, 5, and 6-bedroom villas offer panoramic views, open layouts, and premium
                                    finishes that reflect modern elegance. Designed with precision and purpose,
                                    A-CUBE delivers a harmonious balance of luxury, privacy, and high-growth
                                    investment potential in a destination built for the future.
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
                                   <h2 className="sanctuary-title" style={{fontWeight:"500",color:"white"}}>A-CUBE PROJECTS</h2>
                               </div>
           
                             <div id="animatedSlider" className="carousel slide" data-bs-ride="carousel">
                               <div className="carousel-inner">
           
                               
                                 <div className="carousel-item active">
                                   <div className="row justify-content-center align-items-center g-4">
           
                                 
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Cubefive} alt=""/>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-6 col-md-10">
                                       <div className="slider-card center animate">
                                         <img src={Cubeone} alt=""/>
                                         <div className="slider-content">
                                           <h4>VEGA RESIDENCE</h4>
                                         </div>
                                       </div>
                                     </div>
           
                                 
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Cubetwo} alt=""/>
                                       </div>
                                     </div>
           
                                   </div>
                                 </div>
           
                             
                                 <div className="carousel-item">
                                   <div className="row justify-content-center align-items-center g-4">
           
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Cubeone} alt=""/>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-6 col-md-10">
                                       <div className="slider-card center animate">
                                         <img src={Cubetwo} alt=""/>
                                         <div className="slider-content">
                                           <h4>ELECTRA APARTMENTS</h4>
                                         </div>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Cubethree} alt=""/>
                                       </div>
                                     </div>
           
                                   </div>
                                 </div>
           
           
           
                                 <div className="carousel-item">
                                   <div className="row justify-content-center align-items-center g-4">
           
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Cubetwo} alt=""/>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-6 col-md-10">
                                       <div className="slider-card center animate">
                                         <img src={Cubethree} alt=""/>
                                         <div className="slider-content">
                                           <h4>ADHARA STAR</h4>
                                         </div>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Cubefour} alt=""/>
                                       </div>
                                     </div>
           
                                   </div>
                                 </div>
           
           
           
                                 <div className="carousel-item">
                                   <div className="row justify-content-center align-items-center g-4">
           
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Cubethree} alt=""/>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-6 col-md-10">
                                       <div className="slider-card center animate">
                                         <img src={Cubefour} alt=""/>
                                         <div className="slider-content">
                                           <h4>AVIOR BY ACUBE</h4>
                                         </div>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Cubefive} alt=""/>
                                       </div>
                                     </div>
           
                                   </div>
                                 </div>
           
           
                                 <div className="carousel-item">
                                   <div className="row justify-content-center align-items-center g-4">
           
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Cubefour} alt=""/>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-6 col-md-10">
                                       <div className="slider-card center animate">
                                         <img src={Cubefive} alt=""/>
                                         <div className="slider-content">
                                           <h4>THE CROWN JEWEL</h4>
                                     
                                         </div>
                                       </div>
                                     </div>
           
                                     <div className="col-lg-3 d-none d-lg-block">
                                       <div className="slider-card side">
                                         <img src={Cubeone} alt=""/>
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
export default acube;