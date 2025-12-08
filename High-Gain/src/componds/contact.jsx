
import Navbar from "./navbar";
import Footer from "./footer";
import Form from "../assets/formin.jpg";
function contact()
{
    return(
        <>


            <Navbar/>
        


            <section class="hg-bannerss-section">
                <div class="hg-banners-overlay"></div>

                <div class="container h-100">
                    <div class="row h-100 justify-content-center align-items-center">
                        <div class="col-lg-12 hg-banners-text text-center">
                            <h1>CONTACT US</h1>
                        
                        </div>
                    </div>
                </div>
            </section>




             <section class="contact-section py-5">
                            <div class="container">
                                <div class="contact-wrapper">
            
                                <div class="row g-0 align-items-center">
            
                                
                                    <div class="col-lg-6 p-5 form-area">
            
                                    <h3 class="contact-title text-center mb-4">GET IN TOUCH</h3>
            
                                    <form>
                                        <div class="mb-4">
                                        <input type="text" class="form-control contact-input" placeholder="Your Name*"/>
                                        </div>
            
                                        <div class="mb-4">
                                        <input type="text" class="form-control contact-input" placeholder="Phone Number*"/>
                                        </div>
            
                                        <div class="mb-4">
                                        <input type="email" class="form-control contact-input" placeholder="Email*"/>
                                        </div>
            
                                        <div class="mb-4">
                                        <textarea rows="4" class="form-control contact-input" placeholder="Message"></textarea>
                                        </div>
            
                                        <button type="submit" class="btn submit-btn w-100">SUBMIT</button>
                                    </form>
            
                                    </div>
            
                                
                                    <div class="col-lg-6">
                                    <img src={Form} class="img-fluid contact-img" alt=""/>
                                    </div>
            
                                </div>
            
                                </div>
                            </div>
                        </section>



                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28862.217456450024!2d55.333639096236084!3d25.278079890964523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c35d410acf3%3A0xe8aff9f4de65bf11!2sAl%20Qusais%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1765180754437!5m2!1sen!2sin" width="100%" height="450"style={{ border: 0 }}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                                </div>
                            </div>
                        </div>





            <Footer/>


        </>
    )
}

export default contact;