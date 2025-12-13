
import Navbar from "./navbar";
import Footer from "./footer";
import Dasone from "../assets/dasone.jpg";
import Dastwo from "../assets/dastwo.webp";
import Dasthree from "../assets/dasthree.webp";
import Dasfour from "../assets/dasfour.jpg";
import Dasfive from "../assets/dasfive.jpg";
import Dassisx from "../assets/dassix.jpg";
import Dasseven from "../assets/dasseven.webp";
import { useEffect } from "react";


function damac()
{


     useEffect(()=>
        {
            document.title="Damac"
        },[])
        


    return(

        <>

                    <Navbar/>



        
                    <section className="hg-damac-section">
                        <div className="hg-banners-overlay"></div>
        
                        <div className="container h-100">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-lg-12 hg-banners-text text-center">
                                    <h1>DAMAC</h1>
                                
                                </div>
                            </div>
                        </div>
                    </section>
        
        
        
                    <div className="container-fluid mt-5" >
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 style={{fontWeight:"700"}}>DAMAC PROJECTS</h2>
                            </div>
                        </div>
                    </div>
        
        
                   <div className="container my-5" data-aos="zoom-in">
        
                            <div className="row g-4">
        
                                {/* CARD 1 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Dasone} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>DAMAC ISLANDS</h5>
        
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 2 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Dastwo} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>DAMAC HILLS</h5>
        
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 3 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Dasthree} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>ADAMAC RIVERSIDE</h5>
                                
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 4 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Dasfour} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>DAMAC LAGOONS</h5>
                            
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 5 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Dasfive} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>CHELSEA RESIDENCES BY DAMAC</h5>
                            
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 6 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Dassisx} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>OCEAN HEIGHTS</h5>
                                
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 7 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Dasseven} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>DAMAC DISTRICT</h5>
                                
                                    </div>
                                </div>
                                </div>
        
                            
        
                            </div>
                    </div>



                    <Footer/>
        
        
        </>
    )
}
export default damac;