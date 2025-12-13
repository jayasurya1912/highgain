import Navbar from "./navbar";
import Footer from "./footer";
import Ellione from "../assets/ellione.webp";
import Ellitwo from "../assets/ellitwo.jpg";
import Ellithree from "../assets/ellithree.jpg";
import Ellifour from "../assets/ellifour.jpg";
import Ellifive from "../assets/ellifive.webp";
import Ellisix from "../assets/ellisix.webp";
import Elliseven from "../assets/elliseven.webp";
import Ellieight from "../assets/ellieight.webp";
import { useEffect } from "react";

function ellignton()
{

     useEffect(()=>
        {
            document.title="Ellignton"
        },[])
        


    return(
        <>

        <Navbar/>


                            <section className="hg-elli-section">
                                    <div className="hg-banners-overlay"></div>
                    
                                    <div className="container h-100">
                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-12 hg-banners-text text-center">
                                                <h1>ELLIGNTON</h1>
                                            
                                            </div>
                                        </div>
                                    </div>
                            </section>
                
                
                
                            <div className="container-fluid mt-5">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <h2 style={{fontWeight:"700"}}>ELLIGNTON PROJECTS</h2>
                                    </div>
                                </div>
                            </div>
                
                
                           <div className="container my-5" data-aos="zoom-out">
                
                                    <div className="row g-4">
                
                                        {/* CARD 1 */}
                                        <div className="col-md-4 col-sm-6" data-aos="flip-up" >
                                        <div className="gallery-card position-relative overflow-hidden">
                                            <img src={Ellione} className="img-fluid w-100 gallery-img" alt="" />
                                            
                                            <div className="p-3 text-center">
                                            <h5>BELGRAVIA</h5>
                
                                            </div>
                                        </div>
                                        </div>
                
                                        {/* CARD 2 */}
                                        <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                        <div className="gallery-card position-relative overflow-hidden">
                                            <img src={Ellitwo} className="img-fluid w-100 gallery-img" alt="" />
                                            
                                            <div className="p-3 text-center">
                                            <h5>BELGRAVIA HEIGHTS I</h5>
                
                                            </div>
                                        </div>
                                        </div>
                
                                        {/* CARD 3 */}
                                        <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                        <div className="gallery-card position-relative overflow-hidden">
                                            <img src={Ellithree} className="img-fluid w-100 gallery-img" alt="" />
                                            
                                            <div className="p-3 text-center">
                                            <h5>BELGRAVIA SQUARE</h5>
                                        
                                            </div>
                                        </div>
                                        </div>
                
                                        {/* CARD 4 */}
                                        <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                        <div className="gallery-card position-relative overflow-hidden">
                                            <img src={Ellifour} className="img-fluid w-100 gallery-img" alt="" />
                                            
                                            <div className="p-3 text-center">
                                            <h5>BELGRAVIA GARDENS</h5>
                                    
                                            </div>
                                        </div>
                                        </div>
                
                                        {/* CARD 5 */}
                                        <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                        <div className="gallery-card position-relative overflow-hidden">
                                            <img src={Ellifive} className="img-fluid w-100 gallery-img" alt="" />
                                            
                                            <div className="p-3 text-center">
                                            <h5>THE HILLGATE</h5>
                                    
                                            </div>
                                        </div>
                                        </div>
                
                                        {/* CARD 6 */}
                                        <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                        <div className="gallery-card position-relative overflow-hidden">
                                            <img src={Ellisix} className="img-fluid w-100 gallery-img" alt="" />
                                            
                                            <div className="p-3 text-center">
                                            <h5>OCEAN HOUSE</h5>
                                        
                                            </div>
                                        </div>
                                        </div>
                
                                        {/* CARD 7 */}
                                        <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                        <div className="gallery-card position-relative overflow-hidden">
                                            <img src={Elliseven} className="img-fluid w-100 gallery-img" alt="" />
                                            
                                            <div className="p-3 text-center">
                                            <h5>THE LAKESHORE</h5>
                                        
                                            </div>
                                        </div>
                                        </div>



                                        <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                        <div className="gallery-card position-relative overflow-hidden">
                                            <img src={Ellieight} className="img-fluid w-100 gallery-img" alt="" />
                                            
                                            <div className="p-3 text-center">
                                            <h5>THE WATERCREST</h5>
                                        
                                            </div>
                                        </div>
                                        </div>
                
                                    
                
                                    </div>
                            </div>
        



        <Footer/>

        </>
    )
}
export default ellignton;