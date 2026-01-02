
import Navbar from "./navbar";
import Footer from "./footer";
import Abtn from "../assets/abt.jpeg";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VS from "../assets/vs.jpg";
import CC from "../assets/cc.jpg";
import MS from "../assets/ms.jpg";
import Mis from "../assets/mis.jpg";
import Vis from "../assets/vis.jpg";
import Val from "../assets/Val.jpg";
import Amir from "../assets/amir.jpg";



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
                                    
                                    <h2 className="hg-about-title" style={{marginBottom:"20px"}}>
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



                    <section className="about-values-section py-5">
                        <div className="container">
                            <div className="row justify-content-center g-4">

                            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
                                <div className="value-card">
                                <img src={Mis} className="img-fluid value-img" alt="Mission"/>

                                <div className="value-content">
                                    <h5 className="value-title">Our Mission</h5>
                                    <p className="value-text">
                                    HIGHGAIN — WHERE TRUSTED PARTNERS & HAPPY CLIENTS CONNECT.
                                    Our mission is to turn property dreams into reality through trust,
                                    transparency, and expert guidance. We empower individuals,
                                    families, and investors to make confident real estate decisions
                                    with clarity and peace of mind.
                                    </p>
                                </div>
                                </div>
                            </div>

                    
                            <div className="col-lg-4 col-md-6" style={{marginTop:"80px"}} data-aos="zoom-in">
                                <div className="value-card featured">
                                <img src={Val} className="img-fluid value-img" alt="Vision"/>

                                <div className="value-content">
                                    <h5 className="value-title">Our Vision</h5>
                                    <p className="value-text">
                                    We envision becoming one of Dubai’s most trusted and reliable
                                    real estate partners by delivering value-driven solutions and
                                    exceptional service. With deep market knowledge, we strive to
                                    create smooth, informed, and rewarding property journeys.
                                    </p>
                                </div>
                                </div>
                            </div>

                           
                            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
                                <div className="value-card">
                                <img src={Vis} className="img-fluid value-img" alt="Core Values"/>

                                <div className="value-content">
                                    <h5 className="value-title">Core Values</h5>
                                    <p className="value-text">
                                    Integrity, transparency, and client-first commitment define
                                    HighGain. Supported by our expert marketing partners, we ensure
                                    strong visibility, strategic outreach, and a seamless experience
                                    for every client we serve.
                                    </p>
                                </div>
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

                                    <h5 className="mgmt-name mt-4">Name</h5>
                                    <p className="mgmt-role">Designation</p>
                                    <p className="mgmt-bio">Biography</p>
                                    </div>
                                </div>

                          
                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="mgmt-card">
                                    <div className=""><img src={Amir} alt="" width="400px" height="290px" style={{borderTopLeftRadius:"90px"}} /></div>

                                    <h5 className="mgmt-name mt-4">AMIR</h5>
                                    <p className="mgmt-role">MANAGING DIRECTOR</p>
                                    <p className="mgmt-bio">Biography</p>
                                    </div>
                                </div>

                             
                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-up">
                                    <div className="mgmt-card">
                                    <div className="mgmt-photo mgmt-photo-right"></div>

                                    <h5 className="mgmt-name mt-4">Name</h5>
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