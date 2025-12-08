import Navbar from "./navbar";
import Footer from "./footer";
import { useEffect } from "react";


function market(){

    
         useEffect(() => {
  document.title = "Marketing Partners";
}, []);


    return(

        <>
        
                 <Navbar/>

                    <section class="hg-banners-section">
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




                    <section class="partners-wrapper py-5">
                            <div class="container">

                                <h5 class="partners-title mb-4">MEET THE PARTNERS</h5>

                                <div class="row g-4">


                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="partner-item text-center">
                                    <div class="partner-img"></div>
                                    <h6 class="partner-fullname mt-3">Name</h6>
                                    <p class="partners-role">Designation</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="partner-item text-center">
                                    <div class="partner-img"></div>
                                    <h6 class="partner-fullname mt-3">Name</h6>
                                    <p class="partners-role">Designation</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="partner-item text-center">
                                    <div class="partner-img"></div>
                                    <h6 class="partner-fullname mt-3">Name</h6>
                                    <p class="partners-role">Designation</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="partner-item text-center">
                                    <div class="partner-img"></div>
                                    <h6 class="partner-fullname mt-3">Name</h6>
                                    <p class="partners-role">Designation</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="partner-item text-center">
                                    <div class="partner-img"></div>
                                    <h6 class="partner-fullname mt-3">Name</h6>
                                    <p class="partners-role">Designation</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="partner-item text-center">
                                    <div class="partner-img"></div>
                                    <h6 class="partner-fullname mt-3">Name</h6>
                                    <p class="partners-role">Designation</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="partner-item text-center">
                                    <div class="partner-img"></div>
                                    <h6 class="partner-fullname mt-3">Name</h6>
                                    <p class="partners-role">Designation</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="partner-item text-center">
                                    <div class="partner-img"></div>
                                    <h6 class="partner-fullname mt-3">Name</h6>
                                    <p class="partners-role">Designation</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="partner-item text-center">
                                    <div class="partner-img"></div>
                                    <h6 class="partner-fullname mt-3">Name</h6>
                                    <p class="partners-role">Designation</p>
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