
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
        
        
        
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 style={{fontWeight:"700"}}>EMMAR PROJECTS</h2>
                            </div>
                        </div>
                    </div>
        
        
                   <div className="container my-5" data-aos="zoom-in">
        
                            <div className="row g-4">
        
                                {/* CARD 1 */}
                                <div className="col-md-4 col-sm-6"  data-aos="flip-up">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Emone} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>BURJ KHALIFA</h5>
        
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 2 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Emtwo} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>BURJ VISTA</h5>
        
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 3 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Emthree} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>DUBAI MARINA</h5>
                                
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 4 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Emfour} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>EMIRATES LIVING</h5>
                            
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 5 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Emfive} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>ARABIAN RANCHES</h5>
                            
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 6 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Emsix} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>EMAAR BEACHFRONT</h5>
                                
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 7 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Emseven} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>EMAAR SOUTH</h5>
                                
                                    </div>
                                </div>
                                </div>


        
                            </div>
                    </div>
        



        <Footer/>


        
        </>
    )
}
export default emmar;