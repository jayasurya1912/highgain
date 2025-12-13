import Navbar from "./navbar";
import Footer from "./footer";
import Samone from "../assets/samone.webp";
import Samtwo from "../assets/samtwo.webp";
import Samthree from "../assets/samthree.webp";
import Samfour from "../assets/samfour.jpg";
import Samfive from "../assets/samfive.webp";
import Samsix from "../assets/samsix.webp";
import { useEffect } from "react";

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
        
        
        
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 style={{fontWeight:"700"}}>SAMANA PROJECTS</h2>
                            </div>
                        </div>
                    </div>
        
        
                   <div className="container my-5" data-aos="zoom-in">
        
                            <div className="row g-4">
        
                                {/* CARD 1 */}
                                <div className="col-md-4 col-sm-6"  data-aos="flip-up">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Samone} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>SAMANA HILLS</h5>
        
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 2 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Samtwo} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>SAMANA GREENS</h5>
        
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 3 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Samthree} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>SAMANA GOLF AVENUE</h5>
                                
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 4 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Samfour} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>SAMANA PARK VIEWS</h5>
                            
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 5 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Samfive} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>SAMANA WAVES</h5>
                            
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 6 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Samsix} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>SAMANA IVY GARDENS</h5>
                                
                                    </div>
                                </div>
                                </div>
        
                                
        
                            
        
                            </div>
                    </div>
        




        <Footer/>
        
        </>
    )
}
export default samana;