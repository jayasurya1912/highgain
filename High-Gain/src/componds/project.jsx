import Navbar from "./navbar";
import Footer from "./footer";
import Aziz from "../assets/aziziban.jpg";
import Acube from "../assets/acubeban.jpg";
import { Link } from "react-router-dom";
import acube from "./acube";
import Damac from "../assets/damacban.jpg";
import Bin from "../assets/binban.jpg";
import Object from "../assets/objban.jpg";
import Emmar from "../assets/emmarban.jpg";
import Elli from "../assets/elliban.jpg";
import Sobha from "../assets/sobhaban.jpg";
import Samana from "../assets/samanaban.jpg";
import samana from "./samana";



function project()
{


    return(

        <>

        <Navbar/>



                                                        <section className="hg-pro-section">
                                                            <div className="hg-banners-overlay"></div>
                                            
                                                            <div className="container h-100">
                                                                <div className="row h-100 justify-content-center align-items-center">
                                                                    <div className="col-lg-12 hg-banners-text text-center">
                                                                        <h1>PROJECTS</h1>
                                                                    
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>





                                                        <div className="container my-5" data-aos="zoom-in">
                                            
                                                                <div className="row g-4">
                                            
                                                                    {/* CARD 1 */}
                                                                    
                                                                    <div className="col-md-4 col-sm-6"  data-aos="flip-up">
                                                                    <Link className="text-white" style={{textDecoration:"none"}} to="/azizi">
                                                                        <div className="gallery-card position-relative overflow-hidden">
                                                                            <img src={Aziz} className="img-fluid w-100 gallery-img" alt="" />
                                                                            
                                                                            <div className="p-3 text-center">
                                                                            <h5>Azizi</h5>
                                                
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                    </div>
                                                                   
                                            
                                                                    {/* CARD 2 */}
                                                                    <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                                                        <Link className="text-white" style={{textDecoration:"none"}} to="/acube">
                                                                            <div className="gallery-card position-relative overflow-hidden">
                                                                                <img src={Acube} className="img-fluid w-100 gallery-img" alt="" />
                                                                                
                                                                                <div className="p-3 text-center">
                                                                                <h5>A-CUBE</h5>
                                                    
                                                                                </div>
                                                                            </div>
                                                                         </Link>
                                                                    </div>
                                            
                                                                    {/* CARD 3 */}
                                                                    <div className="col-md-4 col-sm-6" data-aos="flip-up">
                                                                    <Link className="text-white" style={{textDecoration:"none"}} to="/binghatti">
                                                                        <div className="gallery-card position-relative overflow-hidden">
                                                                            <img src={Bin} className="img-fluid w-100 gallery-img" alt="" />
                                                                            
                                                                            <div className="p-3 text-center">
                                                                            <h5>BINGHATTI</h5>
                                                                        
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                    </div>
                                            
                                                                    {/* CARD 4 */}
                                                                    <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                                                        <Link className="text-white" style={{textDecoration:"none"}} to="/damac">
                                                                            <div className="gallery-card position-relative overflow-hidden">
                                                                                <img src={Damac} className="img-fluid w-100 gallery-img" alt="" />
                                                                                
                                                                                <div className="p-3 text-center">
                                                                                <h5>DAMAC</h5>
                                                                        
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                            
                                                                    {/* CARD 5 */}
                                                                    <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                                                        <Link className="text-white" style={{textDecoration:"none"}} to="/object">
                                                                            <div className="gallery-card position-relative overflow-hidden">
                                                                                <img src={Object} className="img-fluid w-100 gallery-img" alt="" />
                                                                                
                                                                                <div className="p-3 text-center">
                                                                                <h5>OBJECT 1</h5>
                                                                        
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                            
                                                                    {/* CARD 6 */}
                                                                    <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                                                        <Link className="text-white" style={{textDecoration:"none"}} to="/emmar">
                                                                            <div className="gallery-card position-relative overflow-hidden">
                                                                                <img src={Emmar} className="img-fluid w-100 gallery-img" alt="" />
                                                                                
                                                                                <div className="p-3 text-center">
                                                                                <h5>EMMAR</h5>
                                                                            
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </div>


                                                                    <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                                                        <Link className="text-white" style={{textDecoration:"none"}} to="/ellignton">
                                                                            <div className="gallery-card position-relative overflow-hidden">
                                                                                <img src={Elli} className="img-fluid w-100 gallery-img" alt="" />
                                                                                
                                                                                <div className="p-3 text-center">
                                                                                <h5>ELLIGNTON</h5>
                                                                            
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </div>

                                                                    <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                                                        <Link className="text-white" style={{textDecoration:"none"}} to="/samana">
                                                                            <div className="gallery-card position-relative overflow-hidden">
                                                                                <img src={Samana} className="img-fluid w-100 gallery-img" alt="" />
                                                                                
                                                                                <div className="p-3 text-center">
                                                                                <h5>SAMANA</h5>
                                                                            
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </div>

                                                                    <div className="col-md-4 col-sm-6" data-aos="flip-down">
                                                                        <Link className="text-white" style={{textDecoration:"none"}} to="/sobha">
                                                                            <div className="gallery-card position-relative overflow-hidden">
                                                                                <img src={Sobha} className="img-fluid w-100 gallery-img" alt="" />
                                                                                
                                                                                <div className="p-3 text-center">
                                                                                <h5>SOBHA</h5>
                                                                            
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                            
                                                                    
                                            
                                                                
                                            
                                                                </div>
                                                        </div>









        <Footer/>
        
        </>
    )
}
export default project;