
import Navbar from "./navbar";
import Footer from "./footer";
import Form from "../assets/formin.jpg";
function contact()
{

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0cc4tup",      // ✅ your Service ID
        "template_28vl0cp",     // ✅ your Template ID
        e.target,
        "AMawV6ygbMJr7WlNY"     // ✅ your Public Key
      )
      .then(
        () => {
          alert("Thank you! We will contact you shortly.");
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send message");
          console.error(error);
        }
      );
  };




    return(
        <>


            <Navbar/>
        


            <section className="hg-bannerss-section">
                <div className="hg-banners-overlay"></div>

                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-12 hg-banners-text text-center">
                            <h1>CONTACT US</h1>
                        
                        </div>
                    </div>
                </div>
            </section>




             <section className="contact-section py-5"  data-aos="zoom-out-up">
                            <div className="container">
                                <div className="contact-wrapper">
            
                                <div className="row g-0 align-items-center">
            
                                
                                    <div className="col-lg-6 p-5 form-area">
            
                                    <h3 className="contact-title text-center mb-4">GET IN TOUCH</h3>
            
                                     <form onSubmit={sendEmail}>

                                        <div className="mb-4">
                                            <input
                                            type="text"
                                            name="fullName"
                                            className="form-control contact-input"
                                            placeholder="Your Name*"
                                            required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <input
                                            type="text"
                                            name="phone"
                                            className="form-control contact-input"
                                            placeholder="Phone Number*"
                                            required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <input
                                            type="email"
                                            name="email"
                                            className="form-control contact-input"
                                            placeholder="Email*"
                                            required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <textarea
                                            name="message"
                                            rows="4"
                                            className="form-control contact-input"
                                            placeholder="Message"
                                            required
                                            ></textarea>
                                        </div>

                                        <button type="submit" className="btn submit-btn w-100">
                                            SUBMIT
                                        </button>

                                        </form>
            
                                    </div>
            
                                
                                    <div className="col-lg-6">
                                    <img src={Form} className="img-fluid contact-img" alt=""/>
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