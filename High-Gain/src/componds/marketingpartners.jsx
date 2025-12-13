import Navbar from "./navbar";
import Footer from "./footer";
import { useEffect } from "react";
import Men from "../assets/man.png";
import Women from "../assets/women.png";


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

                                <h5 className="partners-title mb-4">MEET THE PARTNERS</h5>

                                <div className="row g-4">


                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="partner-item text-center" >
                                    <div className="partner-img"><img src={Men} width="260px" alt="" /></div>
                                    <h6 className="partner-fullname mt-3">Jayakumar</h6>
                                    <p className="partners-role">Director of Sales (Western Countries)</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="partner-item text-center">
                                    <div className="partner-img"><img src={Men} width="260px" alt="" /></div>
                                    <h6 className="partner-fullname mt-3">Dr. Rajarathinam</h6>
                                    <p className="partners-role">Director of Sales (Canada / USA)</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="partner-item text-center">
                                    <div className="partner-img"><img src={Men} width="260px" alt="" /></div>
                                    <h6 className="partner-fullname mt-3">Dhayanithi Lingesan</h6>
                                    <p className="partners-role">Director of Sales (Chennai)</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="partner-item text-center">
                                    <div className="partner-img"><img src={Women} width="260px" alt="" /></div>
                                    <h6 className="partner-fullname mt-3">Deepika</h6>
                                    <p className="partners-role">Director of Sales (Chennai)</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="partner-item text-center">
                                    <div className="partner-img"><img src={Men} width="260px" alt="" /></div>
                                    <h6 className="partner-fullname mt-3">Thomas</h6>
                                    <p className="partners-role">Director of Sales (Pondicherry)</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="partner-item text-center">
                                    <div className="partner-img"><img src={Men} width="260px" alt="" /></div>
                                    <h6 className="partner-fullname mt-3">Siva Kumar Ramasamy</h6>
                                    <p className="partners-role">Director of Sales (Madurai)</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="partner-item text-center">
                                    <div className="partner-img"><img src={Men} width="260px" alt="" /></div>
                                    <h6 className="partner-fullname mt-3">Nagaraj</h6>
                                    <p className="partners-role">Director of Sales (Coimbatore)</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="partner-item text-center">
                                    <div className="partner-img"><img src={Men} width="260px" alt="" /></div>
                                    <h6 className="partner-fullname mt-3">Seerin Gani</h6>
                                    <p className="partners-role">Director of Sales (Tirunelveli)</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12" data-aos="flip-down">
                                    <div className="partner-item text-center">
                                    <div className="partner-img"><img src={Men} width="260px" alt="" /></div>
                                    <h6 className="partner-fullname mt-3">Sabari</h6>
                                    <p className="partners-role">Director of Sales (Bangalore)</p>
                                    </div>
                                </div>



                                </div>
                            </div>
                    </section>


   

        <Footer/>

        
        </>
    )
}
export default market;