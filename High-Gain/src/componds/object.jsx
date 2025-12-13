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
        
        
        
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 style={{fontWeight:"700"}}>OBJECT 1 PROJECTS</h2>
                            </div>
                        </div>
                    </div>
        
        
                   <div className="container my-5" data-aos="zoom-in">
        
                            <div className="row g-4">
        
                                {/* CARD 1 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Ob} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>RA1N RESIDENCE</h5>
        
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 2 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Obtwo} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>1WOOD RESIDENCE</h5>
        
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 3 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Obthree} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>OZONE 1 RESIDENCE</h5>
                                
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 4 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Obfour} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>W1NNER TOWER</h5>
                            
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 5 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Obfive} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>LUM1NAR TOWER 1</h5>
                            
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 6 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Obsix} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>LUM1NAR TOWER 2</h5>
                                
                                    </div>
                                </div>
                                </div>
        
                                {/* CARD 7 */}
                                <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Obseven} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>VERDAN1A RESIDENCE</h5>
                                
                                    </div>
                                </div>
                                </div>


                                 <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Obeight} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>S1LVA PARK LIVING</h5>
                                
                                    </div>
                                </div>
                                </div>


                                 <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                <div className="gallery-card position-relative overflow-hidden">
                                    <img src={Obnine} className="img-fluid w-100 gallery-img" alt="" />
                                    
                                    <div className="p-3 text-center">
                                    <h5>IR1DIAN PARK</h5>
                                
                                    </div>
                                </div>
                                </div>
        
                            
        
                            </div>
                    </div>
        



        <Footer/>
        
        </>
    )
}

export default object;