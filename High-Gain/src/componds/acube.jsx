import Navbar from "./navbar";
import Footer from "./footer";
import Cubeone from "../assets/Cubeone.webp";
import Cubetwo from "../assets/Cubetwo.jpg";
import Cubethree from "../assets/Cubethree.jpeg";
import Cubefour from "../assets/Cubefour.webp";
import Cubefive from "../assets/Cubefive.webp";
import { useEffect } from "react";


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



            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 style={{fontWeight:"700"}}>A-CUBE PROJECTS</h2>
                    </div>
                </div>
            </div>


           <div className="container my-5" data-aos="zoom-in">

                    <div className="row g-4">

                        {/* CARD 1 */}
                        <div className="col-md-4 col-sm-6"  data-aos="flip-up">
                        <div className="gallery-card position-relative overflow-hidden">
                            <img src={Cubeone} className="img-fluid w-100 gallery-img" alt="" />
                            
                            <div className="p-3 text-center">
                            <h5>VEGA RESIDENCE</h5>

                            </div>
                        </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="col-md-4 col-sm-6" data-aos="flip-up">
                        <div className="gallery-card position-relative overflow-hidden">
                            <img src={Cubetwo} className="img-fluid w-100 gallery-img" alt="" />
                            
                            <div className="p-3 text-center">
                            <h5>ELECTRA APARTMENTS</h5>

                            </div>
                        </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="col-md-4 col-sm-6" data-aos="flip-up">
                        <div className="gallery-card position-relative overflow-hidden">
                            <img src={Cubethree} className="img-fluid w-100 gallery-img" alt="" />
                            
                            <div className="p-3 text-center">
                            <h5>ADHARA STAR</h5>
                        
                            </div>
                        </div>
                        </div>

                        {/* CARD 4 */}
                        <div className="col-md-4 col-sm-6" data-aos="flip-down">
                        <div className="gallery-card position-relative overflow-hidden">
                            <img src={Cubefour} className="img-fluid w-100 gallery-img" alt="" />
                            
                            <div className="p-3 text-center">
                            <h5>AVIOR BY ACUBE</h5>
                    
                            </div>
                        </div>
                        </div>

                        {/* CARD 5 */}
                        <div className="col-md-4 col-sm-6" data-aos="flip-down">
                        <div className="gallery-card position-relative overflow-hidden">
                            <img src={Cubefive} className="img-fluid w-100 gallery-img" alt="" />
                            
                            <div className="p-3 text-center">
                            <h5>THE CROWN JEWEL</h5>
                    
                            </div>
                        </div>
                        </div>


                    

                    </div>
            </div>






            <Footer/>

        
        </>
    )
}
export default acube;