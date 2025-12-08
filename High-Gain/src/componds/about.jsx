
import Navbar from "./navbar";
import Footer from "./footer";
import Abtn from "../assets/abtn.png";
import { useEffect } from "react";



function about()
{


useEffect(() => {
  document.title = "About";
}, []);




    return(

        <>
        
        <Navbar/>

                <section class="hg-banner-section">
                        <div class="hg-banner-overlay"></div>

                        <div class="container h-100">
                            <div class="row h-100 align-items-center">

                            <div class="col-lg-6 col-md-8 col-12 hg-banner-text">
                                <h1>BUILDING </h1>
                                <h1>TRUST </h1>
                                <h1>DELIVERING</h1>
                                <h1>VALUE</h1>
                            </div>

                            </div>
                        </div>
                </section>






                    <section class="hg-about-wrapper py-5">
                            <div class="container">
                                <div class="row align-items-center">

                         
                                <div class="col-lg-6 col-md-12 hg-about-text">
                                    
                                    <h2 class="hg-about-title" style={{marginBottom:"50px"}}>
                                    HIGHGAIN — WHERE TRUSTED PARTNERS & HAPPY CLIENTS CONNECT
                                    </h2>

                                    <p class="hg-about-para">
                                     HighGain Real Estate is one of Dubai’s most trusted and reliable property 
                                        firms, dedicated to helping individuals, families, and investors find the 
                                        perfect space to call home or grow their wealth. We specialize in guiding 
                                        clients through every step of their real estate journey with transparency, 
                                        expertise, and genuine care. Whether you are searching for your dream home 
                                        or exploring premium investment opportunities, we ensure a smooth, 
                                        informed, and rewarding experience.
                                    </p>

                                    <p class="hg-about-para">
                                     Our mission is simple: to turn property dreams into reality through trust, 
                                    knowledge, and exceptional service. With a deep understanding of the Dubai real 
                                    estate market, we focus on delivering value-driven solutions that empower our 
                                    clients to make confident and beneficial property decisions. At HighGain, your 
                                    goals become our priority, and your satisfaction is at the core of everything we do.
                                    </p>

                                    <p class="hg-about-para">
                                     Strengthening our commitment is the support of our dedicated marketing 
                                    partners, who play a vital role in enhancing our brand presence and promoting 
                                    our projects with strategic precision. Their expertise in digital outreach, real estate 
                                    marketing, and client communication ensures that our properties reach the right 
                                    audience with accuracy and impact. Together, we create wider opportunities, 
                                    stronger visibility, and a seamless, well-informed experience for every client we 
                                    serve.
                                    </p>

                                    <button class="hg-about-btn">Join With Us</button>

                                </div>

                              
                                <div class="col-lg-6 col-md-12 position-relative hg-about-img-wrapper">

                                  
                                    <img src={Abtn} alt="Abtn" width="100%" />

                                </div>

                                </div>
                            </div>
                    </section>




                    <section class="hg-vm-section">
                            <div class="container position-relative">

                                <h2 class="hg-vm-title text-center text-black">
                                Our Commitment to Your Future
                                </h2>

                                <div class="row justify-content-between">

                                
                                <div class="col-lg-5 col-md-6 col-12">
                                    <div class="hg-vm-card hg-vm-card-left">
                                    <h3 class="hg-vm-heading">VISION</h3>
                                    <p class="hg-vm-text mt-5">
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

                               
                                <div class="col-lg-5 col-md-6 col-12">
                                    <div class="hg-vm-card hg-vm-card-right">
                                    <h3 class="hg-vm-heading">MISSION</h3>
                                    <p class="hg-vm-text mt-5">
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




                    <section class="mgmt-section py-5">
                            <div class="container text-center">

                                <h3 class="mgmt-title mb-5">OUR MANAGEMENT TEAM</h3>

                                <div class="row justify-content-center g-4">

                               
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="mgmt-card">
                                    <div class="mgmt-photo mgmt-photo-left"></div>

                                    <h5 class="mgmt-name mt-3">Name</h5>
                                    <p class="mgmt-role">Designation</p>
                                    <p class="mgmt-bio">Biography</p>
                                    </div>
                                </div>

                          
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="mgmt-card">
                                    <div class="mgmt-photo mgmt-photo-bottom"></div>

                                    <h5 class="mgmt-name mt-3">Name</h5>
                                    <p class="mgmt-role">Designation</p>
                                    <p class="mgmt-bio">Biography</p>
                                    </div>
                                </div>

                             
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="mgmt-card">
                                    <div class="mgmt-photo mgmt-photo-right"></div>

                                    <h5 class="mgmt-name mt-3">Name</h5>
                                    <p class="mgmt-role">Designation</p>
                                    <p class="mgmt-bio">Biography</p>
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