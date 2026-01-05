import Navbar from "./navbar";
import Footer from "./footer";
import { useEffect } from "react";
import Men from "../assets/man.jpg";
import Women from "../assets/women.jpg";
import Dhaya from "../assets/dhaya.png";
import Rathina from "../assets/rathina.png";
import Sabari from "../assets/sabari.png";
import Thomas from "../assets/thomas.png";
import Raj from "../assets/raj.png";
import { Link } from "react-router-dom";
import Dep from "../assets/dep.png";


function market(){

    
         useEffect(() => {
  document.title = "Marketing Partners";
}, []);


    return(

        <>
        
                 <Navbar/>

                    <section className="hg-banners-section">
                        <div className="hg-banner-overlay"></div>

                        <div className="container h-100">
                            <div className="row h-100 align-items-center">

                            <div className="col-lg-6 col-md-8 col-12 hg-banner-text">
                                <h1>BUILDING </h1>
                                <h1>TRUST </h1>
                                <h1>DELIVERING</h1>
                                <h1>VALUE</h1>
                            </div>

                            </div>
                        </div>
                    </section>




                    <section className="partners-wrapper py-5" data-aos="zoom-in">
                            <div className="container">

                                <h5 className="partners-title mb-4" style={{fontSize:"19px"}}>MEET THE PARTNERS</h5>

                                <div className="row g-4">


                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="partner-item text-center" >
                                    <div className=""><img src={Men}  alt="" width="100%" /></div>
                                    <h6 className="partner-fullname mt-3">Jayakumar</h6>
                                    <p className="partners-role">Director of Sales (Western Countries)</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="partner-item text-center">
                                    <div className=""><img src={Thomas}  alt="" width="100%" /></div>
                                    <h6 className="partner-fullname mt-3">Dr. Rajarathinam</h6>
                                    <p className="partners-role">Director of Sales (Canada / USA)</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="partner-item text-center">
                                    <div className=""><img src={Dhaya}  alt="" width="100%" /></div>
                                    <h6 className="partner-fullname mt-3">Dhayanithi Lingesan</h6>
                                    <p className="partners-role">Director of Sales (Chennai)</p>
                                    </div>
                                </div>



                                <div className="container mt-5 text-center">
                                    <div className="col-lg-12">
                                        <h2 className="abouts-title">Become a Partner</h2>
                                        <p className="abouts-text">Partner with High Gain Real Estate and grow your presence in Dubai’s competitive property market. We collaborate with developers, investors, and industry professionals to deliver strategic marketing, qualified leads, and consistent results. Backed by market expertise, transparent processes, and a results-driven approach, we help our partners build stronger visibility, long-term value, and trusted client relationships.</p>
                                        <Link className="know-btn" style={{color:"white",textDecoration:"none",backgroundColor:"black"}} to={"/whycollaborating"}>Know More</Link>
                                    </div>
                                </div>





                                <div className="col-lg-4 col-md-6 col-12 mt-5" data-aos="flip-down">
                                    <div className="partner-item text-center">
                                    <div className=""><img src={Dep} alt="" width="100%" /></div>
                                    <h6 className="partner-fullname mt-3">Deepika</h6>
                                    <p className="partners-role">Director of Sales (Chennai)</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 mt-5" data-aos="flip-down">
                                    <div className="partner-item text-center">
                                    <div className=""><img src={Raj}  alt="" width="100%" /></div>
                                    <h6 className="partner-fullname mt-3">Thomas</h6>
                                    <p className="partners-role">Director of Sales (Pondicherry)</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 mt-5" data-aos="flip-down">
                                    <div className="partner-item text-center">
                                    <div className=""><img src={Men}  alt="" width="100%" /></div>
                                    <h6 className="partner-fullname mt-3">Siva Kumar Ramasamy</h6>
                                    <p className="partners-role">Director of Sales (Madurai)</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="partner-item text-center">
                                    <div className=""><img src={Rathina} alt="" width="100%" /></div>
                                    <h6 className="partner-fullname mt-3">M RATHINA PAUL</h6>
                                    <p className="partners-role">RERA Certified Property Consultant</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="partner-item text-center">
                                    <div className=""><img src={Men}  alt="" width="100%" /></div>
                                    <h6 className="partner-fullname mt-3">Seerin Gani</h6>
                                    <p className="partners-role">Director of Sales (Tirunelveli)</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="partner-item text-center">
                                    <div className=""><img src={Sabari}  alt="" width="100%" /></div>
                                    <h6 className="partner-fullname mt-3">Sabari</h6>
                                    <p className="partners-role">Director of Sales (Bangalore)</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    
                                </div>

                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="partner-item text-center">
                                    <div className=""><img src={Men}  alt="" width="100%" /></div>
                                    <h6 className="partner-fullname mt-3">Nagaraj</h6>
                                    <p className="partners-role">Director of Sales (Coimbatore)</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                   
                                </div>



                                </div>
                            </div>
                    </section>


   

        <Footer/>

        
        </>
    )
}
export default market;