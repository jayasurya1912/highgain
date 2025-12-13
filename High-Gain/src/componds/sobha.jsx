import Navbar from "./navbar";
import Footer from "./footer";
import Soone from "../assets/soone.webp";
import Sotwo from "../assets/sotwo.jpg";
import Sothree from "../assets/sothree.jpg";
import Sofour from "../assets/sofour.jpg";
import Sofive from "../assets/sofive.webp";
import Sosix from "../assets/sosix.webp";
import { useEffect } from "react";


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
                        
                        
                        
                                    <div className="container-fluid mt-5">
                                        <div className="row">
                                            <div className="col-lg-12 text-center">
                                                <h2 style={{fontWeight:"700"}}>SOBHA PROJECTS</h2>
                                            </div>
                                        </div>
                                    </div>
                        
                        
                                   <div className="container my-5" data-aos="zoom-in">
                        
                                            <div className="row g-4">
                        
                                                {/* CARD 1 */}
                                                <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                                <div className="gallery-card position-relative overflow-hidden">
                                                    <img src={Soone} className="img-fluid w-100 gallery-img" alt="" />
                                                    
                                                    <div className="p-3 text-center">
                                                    <h5>SOBHA HARTLAND</h5>
                        
                                                    </div>
                                                </div>
                                                </div>
                        
                                                {/* CARD 2 */}
                                                <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                                <div className="gallery-card position-relative overflow-hidden">
                                                    <img src={Sotwo} className="img-fluid w-100 gallery-img" alt="" />
                                                    
                                                    <div className="p-3 text-center">
                                                    <h5>SOBHA ONE</h5>
                        
                                                    </div>
                                                </div>
                                                </div>
                        
                                                {/* CARD 3 */}
                                                <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                                <div className="gallery-card position-relative overflow-hidden">
                                                    <img src={Sothree} className="img-fluid w-100 gallery-img" alt="" />
                                                    
                                                    <div className="p-3 text-center">
                                                    <h5>SOBHA CREEK VISTAS</h5>
                                                
                                                    </div>
                                                </div>
                                                </div>
                        
                                                {/* CARD 4 */}
                                                <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                                <div className="gallery-card position-relative overflow-hidden">
                                                    <img src={Sofour} className="img-fluid w-100 gallery-img" alt="" />
                                                    
                                                    <div className="p-3 text-center">
                                                    <h5>SOBHA SEAHAVEN</h5>
                                            
                                                    </div>
                                                </div>
                                                </div>
                        
                                                {/* CARD 5 */}
                                                <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                                <div className="gallery-card position-relative overflow-hidden">
                                                    <img src={Sofive} className="img-fluid w-100 gallery-img" alt="" />
                                                    
                                                    <div className="p-3 text-center">
                                                    <h5>SOBHA RESERVE</h5>
                                            
                                                    </div>
                                                </div>
                                                </div>
                        
                                                {/* CARD 6 */}
                                                <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                                <div className="gallery-card position-relative overflow-hidden">
                                                    <img src={Sosix} className="img-fluid w-100 gallery-img" alt="" />
                                                    
                                                    <div className="p-3 text-center">
                                                    <h5>SHOBHA ORBIS</h5>
                                                
                                                    </div>
                                                </div>
                                                </div>
                        
                                                
                        
                                            
                        
                                            </div>
                                    </div>
                        





            <Footer/>
        
        </>
    )
}
export default sobha;