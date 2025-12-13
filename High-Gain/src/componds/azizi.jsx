import Navbar from "./navbar";
import Footer from "./footer";
import Azzone from "../assets/azzone.jpg";
import Azztwo from "../assets/azztwo.jpg";
import Azzthree from "../assets/azzthree.jpg";
import Azzfour from "../assets/azzfour.webp";
import Azzfive from "../assets/azzfive.jpg";
import Azzsix from "../assets/azzsix.jpg";
import Azzseven from "../assets/azzseven.jpg";
import { useEffect } from "react";


function azizi()
{


     useEffect(()=>
        {
            document.title="Azizi"
        },[])
        


    return(

        <>

            <Navbar/>


            <section className="hg-azizi-section">
                <div className="hg-banners-overlay"></div>

                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-12 hg-banners-text text-center">
                            <h1>AZIZI</h1>
                        
                        </div>
                    </div>
                </div>
            </section>



            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 style={{fontWeight:"700"}}>AZIZI PROJECTS</h2>
                    </div>
                </div>
            </div>


           <div className="container my-5" data-aos="zoom-out">

                    <div className="row g-4">

                        {/* CARD 1 */}
                        <div className="col-md-4 col-sm-6" data-aos="flip-up">
                        <div className="gallery-card position-relative overflow-hidden">
                            <img src={Azzone} className="img-fluid w-100 gallery-img" alt="" />
                            
                            <div className="p-3 text-center">
                            <h5>AZIZI RIVIERA</h5>

                            </div>
                        </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="col-md-4 col-sm-6" data-aos="flip-up">
                        <div className="gallery-card position-relative overflow-hidden">
                            <img src={Azztwo} className="img-fluid w-100 gallery-img" alt="" />
                            
                            <div className="p-3 text-center">
                            <h5>AZIZI VENICE</h5>

                            </div>
                        </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="col-md-4 col-sm-6" data-aos="flip-up">
                        <div className="gallery-card position-relative overflow-hidden">
                            <img src={Azzthree} className="img-fluid w-100 gallery-img" alt="" />
                            
                            <div className="p-3 text-center">
                            <h5>AZIZI MINA</h5>
                        
                            </div>
                        </div>
                        </div>

                        {/* CARD 4 */}
                        <div className="col-md-4 col-sm-6" data-aos="flip-down">
                        <div className="gallery-card position-relative overflow-hidden">
                            <img src={Azzfour} className="img-fluid w-100 gallery-img" alt="" />
                            
                            <div className="p-3 text-center">
                            <h5>AZIZI MILAN</h5>
                    
                            </div>
                        </div>
                        </div>

                        {/* CARD 5 */}
                        <div className="col-md-4 col-sm-6" data-aos="flip-down">
                        <div className="gallery-card position-relative overflow-hidden">
                            <img src={Azzfive} className="img-fluid w-100 gallery-img" alt="" />
                            
                            <div className="p-3 text-center">
                            <h5>BURJ AZIZI</h5>
                    
                            </div>
                        </div>
                        </div>

                        {/* CARD 6 */}
                        <div className="col-md-4 col-sm-6" data-aos="flip-down"> 
                        <div className="gallery-card position-relative overflow-hidden">
                            <img src={Azzsix} className="img-fluid w-100 gallery-img" alt="" />
                            
                            <div className="p-3 text-center">
                            <h5>AZIZI WARES</h5>
                        
                            </div>
                        </div>
                        </div>

                        {/* CARD 7 */}
                        <div className="col-md-4 col-sm-6" data-aos="flip-up">
                        <div className="gallery-card position-relative overflow-hidden">
                            <img src={Azzseven} className="img-fluid w-100 gallery-img" alt="" />
                            
                            <div className="p-3 text-center">
                            <h5>AZIZI RUBY</h5>
                        
                            </div>
                        </div>
                        </div>

                    

                    </div>
            </div>






            <Footer/>

        
        </>
    )
}
export default azizi;