
import Navbar from "./navbar";
import Footer from "./footer";
import Abtn from "../assets/abtn.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";



function about()
{


useEffect(() => {
  document.title = "About";
}, []);




    return(

        <>
        
        <Navbar/>

                <section className="hg-banner-section">
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






                    <section className="hg-about-wrapper py-5" data-aos="zoom-in-down">
                            <div className="container">
                                <div className="row align-items-center">

                         
                                <div className="col-lg-6 col-md-12 hg-about-text">
                                    
                                    <h2 className="hg-about-title" style={{marginBottom:"50px"}}>
                                    HIGHGAIN — WHERE TRUSTED PARTNERS & HAPPY CLIENTS CONNECT
                                    </h2>

                                    <p className="hg-about-para">
                                     HighGain Real Estate is one of Dubai’s most trusted and reliable property 
                                        firms, dedicated to helping individuals, families, and investors find the 
                                        perfect space to call home or grow their wealth. We specialize in guiding 
                                        clients through every step of their real estate journey with transparency, 
                                        expertise, and genuine care. Whether you are searching for your dream home 
                                        or exploring premium investment opportunities, we ensure a smooth, 
                                        informed, and rewarding experience.
                                    </p>

                                    <p className="hg-about-para">
                                     Our mission is simple: to turn property dreams into reality through trust, 
                                    knowledge, and exceptional service. With a deep understanding of the Dubai real 
                                    estate market, we focus on delivering value-driven solutions that empower our 
                                    clients to make confident and beneficial property decisions. At HighGain, your 
                                    goals become our priority, and your satisfaction is at the core of everything we do.
                                    </p>

                                    <p className="hg-about-para">
                                     Strengthening our commitment is the support of our dedicated marketing 
                                    partners, who play a vital role in enhancing our brand presence and promoting 
                                    our projects with strategic precision. Their expertise in digital outreach, real estate 
                                    marketing, and client communication ensures that our properties reach the right 
                                    audience with accuracy and impact. Together, we create wider opportunities, 
                                    stronger visibility, and a seamless, well-informed experience for every client we 
                                    serve.
                                    </p>

                                     <Link  className="hg-about-btn " style={{textDecoration:"none"}} to={"/contact"} >   Join With Us </Link>

                                </div>

                              
                                <div className="col-lg-6 col-md-12 position-relative hg-about-img-wrapper">

                                  
                                    <img src={Abtn} alt="Abtn" width="100%" />

                                </div>

                                </div>
                            </div>
                    </section>




                    <section className="hg-vm-section" data-aos="fade-down">
                            <div className="container position-relative">

                                <h2 className="hg-vm-title text-center text-black">
                                Our Commitment to Your Future
                                </h2>

                                <div className="row justify-content-between">

                                
                                <div className="col-lg-5 col-md-6 col-12" data-aos="zoom-in-left">
                                    <div className="hg-vm-card hg-vm-card-left">
                                    <h3 className="hg-vm-heading">VISION</h3>
                                    <p className="hg-vm-text mt-5">
                                        HighGain Real Estate envisions becoming 
                                        Dubai’s most trusted and preferred real 
                                        estate partner by delivering exceptional 
                                        value, transparent guidance, and a seamless 
                                        property experience. Our goal is to inspire 
                                        confidence and create long-term success for 
                                        every homeowner and investor we serve.
                                    </p>
                                    </div>
                                </div>

                               
                                <div className="col-lg-5 col-md-6 col-12" data-aos="zoom-in-right">
                                    <div className="hg-vm-card hg-vm-card-right">
                                    <h3 className="hg-vm-heading">MISSION</h3>
                                    <p className="hg-vm-text mt-5">
                                         Our mission is to turn your property dreams 
                                        into reality through trust, expertise, and 
                                        exceptional service. We focus on delivering 
                                        value-driven solutions backed by deep 
                                        knowledge of Dubai’s real estate market. At 
                                        HighGain, your goals come first, and your 
                                        satisfaction leads every decision we make.
                                    </p>
                                    </div>
                                </div>

                                </div>
                            </div>
                    </section>




                    <section className="mgmt-section py-5">
                            <div className="container text-center">

                                <h3 className="mgmt-title mb-5">OUR MANAGEMENT TEAM</h3>

                                <div className="row justify-content-center g-4">

                               
                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-up">
                                    <div className="mgmt-card">
                                    <div className="mgmt-photo mgmt-photo-left"></div>

                                    <h5 className="mgmt-name mt-3">Name</h5>
                                    <p className="mgmt-role">Designation</p>
                                    <p className="mgmt-bio">Biography</p>
                                    </div>
                                </div>

                          
                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="mgmt-card">
                                    <div className="mgmt-photo mgmt-photo-bottom"></div>

                                    <h5 className="mgmt-name mt-3">Name</h5>
                                    <p className="mgmt-role">Designation</p>
                                    <p className="mgmt-bio">Biography</p>
                                    </div>
                                </div>

                             
                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-up">
                                    <div className="mgmt-card">
                                    <div className="mgmt-photo mgmt-photo-right"></div>

                                    <h5 className="mgmt-name mt-3">Name</h5>
                                    <p className="mgmt-role">Designation</p>
                                    <p className="mgmt-bio">Biography</p>
                                    </div>
                                </div>

                                </div>
                            </div>
                    </section>





                    


   

        <Footer/>

        </>
    )
}
export default about;