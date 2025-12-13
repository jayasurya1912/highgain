
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
import Binnine from "../assets/binnine.png";
import { useEffect } from "react";



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
            
            
            
                        <div className="container-fluid mt-5">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 style={{fontWeight:"700"}}>BINGHATTI PROJECTS</h2>
                                </div>
                            </div>
                        </div>
            
            
                       <div className="container my-5" data-aos="zoom-in">
            
                                <div className="row g-4">
            
                                    {/* CARD 1 */}
                                    <div className="col-md-4 col-sm-6"  data-aos="flip-up" >
                                    <div className="gallery-card position-relative overflow-hidden">
                                        <img src={Binone} className="img-fluid w-100 gallery-img" alt="" />
                                        
                                        <div className="p-3 text-center">
                                        <h5>AQUARISE</h5>
            
                                        </div>
                                    </div>
                                    </div>
            
                                    {/* CARD 2 */}
                                    <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                    <div className="gallery-card position-relative overflow-hidden">
                                        <img src={Bintwo} className="img-fluid w-100 gallery-img" alt="" />
                                        
                                        <div className="p-3 text-center">
                                        <h5>SKYBLADE</h5>
            
                                        </div>
                                    </div>
                                    </div>
            
                                    {/* CARD 3 */}
                                    <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                    <div className="gallery-card position-relative overflow-hidden">
                                        <img src={Binthree} className="img-fluid w-100 gallery-img" alt="" />
                                        
                                        <div className="p-3 text-center">
                                        <h5>SKY HALL</h5>
                                    
                                        </div>
                                    </div>
                                    </div>
            
                                    {/* CARD 4 */}
                                    <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                    <div className="gallery-card position-relative overflow-hidden">
                                        <img src={Binfour} className="img-fluid w-100 gallery-img" alt="" />
                                        
                                        <div className="p-3 text-center">
                                        <h5>SKY RISE</h5>
                                
                                        </div>
                                    </div>
                                    </div>
            
                                    {/* CARD 5 */}
                                    <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                    <div className="gallery-card position-relative overflow-hidden">
                                        <img src={Binfive} className="img-fluid w-100 gallery-img" alt="" />
                                        
                                        <div className="p-3 text-center">
                                        <h5>ONE BY BINGHATTI</h5>
                                
                                        </div>
                                    </div>
                                    </div>
            
                                    {/* CARD 6 */}
                                    <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                    <div className="gallery-card position-relative overflow-hidden">
                                        <img src={Binsix} className="img-fluid w-100 gallery-img" alt="" />
                                        
                                        <div className="p-3 text-center">
                                        <h5>TITANIA</h5>
                                    
                                        </div>
                                    </div>
                                    </div>
            
                                    {/* CARD 7 */}
                                    <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                    <div className="gallery-card position-relative overflow-hidden">
                                        <img src={Binseven} className="img-fluid w-100 gallery-img" alt="" />
                                        
                                        <div className="p-3 text-center">
                                        <h5>APEX</h5>
                                    
                                        </div>
                                    </div>
                                    </div>


                                    <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                    <div className="gallery-card position-relative overflow-hidden">
                                        <img src={Bineight} className="img-fluid w-100 gallery-img" alt="" />
                                        
                                        <div className="p-3 text-center">
                                        <h5>AMBER HALL</h5>
                                    
                                        </div>
                                    </div>
                                    </div>


                                    <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                    <div className="gallery-card position-relative overflow-hidden">
                                        <img src={Binnine} className="img-fluid w-100 gallery-img" alt="" />
                                        
                                        <div className="p-3 text-center">
                                        <h5>BINGHATTI FLARE</h5>
                                    
                                        </div>
                                    </div>
                                    </div>
            
                                
            
                                </div>
                        </div>
            
            





            <Footer/>

        
        </>
    )
}
export default binghatti;