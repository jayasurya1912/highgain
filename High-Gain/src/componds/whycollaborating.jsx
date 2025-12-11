import Navbar from "./navbar";
import Footer from "./footer";
import { useEffect } from "react";


function why(){


    useEffect(()=>
    {
        document.title="Why Collaborating"
    },[])
    
   

    return(

        <>
        
            <Navbar/>


                    <section className="hg-bannerse-section">
                                <div className="hg-banner-overlay"></div>

                                <div className="container h-100">
                                    <div className="row h-100 align-items-center">

                                    <div className="col-lg-6 col-md-8 col-12 hg-banner-text">
                                        <h1>STRONGER  </h1>
                                        <h1>PARTNERSHIPS </h1>
                                        <h1>GREATER </h1>
                                        <h1>OPPORTUNITIES</h1>
                                    </div>

                                    </div>
                                </div>
                    </section>



                    <section className="hg-collab-section py-5 mt-5"  data-aos="fade-down-left">
                            <div className="container text-center">

                                <h3 className="hg-collab-title mb-3">
                                WHY COLLABORATE WITH HIGH GAIN
                                </h3>

                                <p className="hg-collab-text">
                                At High Gain Real Estate, we believe in the power of strategic partnerships.
                                When we collaborate, we create opportunities that benefit both sides — 
                                through strong branding, effective marketing, and long-term business growth.
                                We value creativity, professionalism, and trust, making us the ideal partner 
                                for agencies, creators, and marketing professionals.
                                </p>

                            </div>
                    </section>



                    <section className="hg-benefits-section py-5">
                            <div className="hg-benefits-bg"></div>

                            <div className="container text-center position-relative">
                                
                                <h3 className="hg-benefits-title mb-5">COLLABORATION BENEFITS</h3>

                                <div className="row g-4 justify-content-center">

                              
                                <div className="col-lg-4 col-md-6 col-12"  data-aos="fade-down-left">
                                    <div className="hg-benefit-card">
                                    <h4 className="hg-benefit-heading">LONG-TERM BUSINESS<br/>OPPORTUNITIES</h4>
                                    <p className="hg-benefit-text">
                                        Consistent collaboration across ongoing and upcoming real estate projects.
                                    </p>
                                    </div>
                                </div>

                             
                                <div className="col-lg-4 col-md-6 col-12"  data-aos="fade-down-left">
                                    <div className="hg-benefit-card">
                                    <h4 className="hg-benefit-heading">STRONG BRAND<br/>ASSOCIATION</h4>
                                    <p className="hg-benefit-text">
                                        Work with a reputable and trusted real estate brand that enhances your credibility.
                                    </p>
                                    </div>
                                </div>

                              
                                <div className="col-lg-4 col-md-6 col-12"  data-aos="fade-down-left">
                                    <div className="hg-benefit-card">
                                    <h4 className="hg-benefit-heading">FAIR & TIMELY<br/>PAYMENTS</h4>
                                    <p className="hg-benefit-text">
                                        Transparent workflows with assured on-time compensation.
                                    </p>
                                    </div>
                                </div>

                                
                                <div className="col-lg-4 col-md-6 col-12"  data-aos="fade-down-right">
                                    <div className="hg-benefit-card">
                                    <h4 className="hg-benefit-heading">ACCESS TO PREMIUM<br/>PROJECTS</h4>
                                    <p className="hg-benefit-text">
                                        Early access to project details, creative assets, and marketing material.
                                    </p>
                                    </div>
                                </div>

                            
                                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down-right">
                                    <div className="hg-benefit-card">
                                    <h4 className="hg-benefit-heading">PROFESSIONAL GROWTH<br/>& PORTFOLIO EXPANSION</h4>
                                    <p className="hg-benefit-text">
                                        Opportunities to showcase your work on high-value, large-scale projects.
                                    </p>
                                    </div>
                                </div>

                             
                                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down-right">
                                    <div className="hg-benefit-card">
                                    <h4 className="hg-benefit-heading">SMOOTH COMMUNICATION<br/>& DEDICATED SUPPORT</h4>
                                    <p className="hg-benefit-text">
                                        Clear coordination, dedicated contacts, and hassle-free working experience.
                                    </p>
                                    </div>
                                </div>

                                </div>
                            </div>
                    </section>



                    <section className="hg-contact-section py-5"  data-aos="zoom-out-up">
                            <div className="container">
                                <div className="row align-items-start justify-content-center">

                             
                                <div className="col-lg-5 col-md-12 text-start hg-contact-text mt-5">
                                    <h3 className="hg-contact-small">WE'D LOVE TO</h3>
                                    <h2 className="hg-contact-large">Hear From You</h2>
                                </div>

                           
                                <div className="col-lg-6 col-md-10 col-12">
                                    <div className="hg-contact-form-card p-4">

                                    <form>

                                        <input type="text" className="form-control hg-contact-input mb-3" placeholder="Your Name*" />

                                        <input type="text" className="form-control hg-contact-input mb-3" placeholder="Company Name /Profession" />

                                        <input type="text" className="form-control hg-contact-input mb-3" placeholder="Phone Number" />

                                        <input type="email" className="form-control hg-contact-input mb-3" placeholder="Email" />

                                        <textarea className="form-control hg-contact-textarea mb-4" rows="4" placeholder="Message"></textarea>

                                        <button className="hg-contact-btn w-100">SUBMIT</button>

                                    </form>

                                    </div>
                                </div>

                                </div>
                            </div>
                    </section>











            <Footer/>
        
        </>


    )
}

export default why;