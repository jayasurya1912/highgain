import Navbar from "./navbar";
import Footer from "./footer";
import Ellione from "../assets/ellione.webp";
import Ellitwo from "../assets/ellitwo.jpg";
import Ellithree from "../assets/ellithree.jpg";
import Ellifour from "../assets/ellifour.jpg";
import Ellifive from "../assets/ellifive.webp";
import Ellisix from "../assets/ellisix.webp";
import Elliseven from "../assets/elliseven.webp";
import Ellieight from "../assets/ellieight.webp";
import { useEffect } from "react";
import Abtn from "../assets/elliabtn.webp";
import For from "../assets/forin.webp";

function ellignton()
{

     useEffect(()=>
        {
            document.title="Ellignton"
        },[])


            const sendEmail = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  console.log("Property Type:", formData.get("propertyType")); // 👈 CHECK

  emailjs.sendForm(
    "service_0cc4tup",
    "template_28vl0cp",
    e.target,
    "AMawV6ygbMJr7WlNY"
  )
  .then(() => {
    alert("Thank you! We will contact you shortly.");
    e.target.reset();
  })
  .catch((error) => {
    alert("❌ Failed to send message");
    console.error(error);
  });
};
        


    return(
        <>

        <Navbar/>


                            <section className="hg-elli-section">
                                    <div className="hg-banners-overlay"></div>
                    
                                    <div className="container h-100">
                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-12 hg-banners-text text-center">
                                                <h1>ELLIGNTON</h1>
                                            
                                            </div>
                                        </div>
                                    </div>
                            </section>
                
                
                
                                                <section className="sanctuary-section" data-aos="zoom-out">
                                                      <div className="container">
                                                        <div className="row align-items-center g-5">
                                      
                                                      
                                                          <div className="col-lg-6">
                                                            <h2 className="sanctuary-title">YOUR ELLINGTON SANCTUARY BY THE SEA</h2>

                                                            <p className="sanctuary-text">
                                                            Experience a refined waterfront lifestyle where artful design and thoughtful
                                                            living come together in perfect harmony. Ellington’s sea-facing residences are
                                                            meticulously crafted with a focus on detail, natural light, and elegant spatial
                                                            flow. Set within a prime, high-growth coastal location, these exclusive 4, 5, and
                                                            6-bedroom villas offer panoramic views, sophisticated interiors, and premium
                                                            finishes throughout. Designed for those who value architectural excellence and
                                                            long-term appreciation, Ellington delivers a lifestyle of understated luxury,
                                                            privacy, and enduring investment value.
                                                            </p>

                           
                                      
                                                          </div>
                                      
                                                      
                                                          <div className="col-lg-6 position-relative">
                                                            <div className="image-wrapper">
                                                              <img src={Abtn} alt="Luxury Villa" className="img-fluid sanctuary-img"/>
                                                            </div>
                                                          </div>
                                      
                                                        </div>
                                                      </div>
                                                  </section>
                                      
                                      
                                      
                                                  <div className="container-fluid mt-5">
                                                      <div className="row">
                                                         
                                                      </div>
                                                  </div>
                                      
                                      
                                      
                                                 <section className="animated-center-slider py-5" data-aos="zoom-in" style={{marginTop:"-60px"}}>
                                                      <div className="container">
                                      
                                                         <div className="col-lg-12 text-center mt-3" style={{marginBottom:"30px"}}>
                                                              <h2 className="sanctuary-title" style={{fontWeight:"500",color:"white"}}>ELLIGNTON PROJECTS</h2>
                                                          </div>
                                      
                                                        <div id="animatedSlider" className="carousel slide" data-bs-ride="carousel">
                                                          <div className="carousel-inner">
                                      
                                                          
                                                            <div className="carousel-item active">
                                                              <div className="row justify-content-center align-items-center g-4">
                                      
                                                            
                                                                <div className="col-lg-3 d-none d-lg-block">
                                                                  <div className="slider-card side">
                                                                    <img src={Ellifive} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                                <div className="col-lg-6 col-md-10">
                                                                  <div className="slider-card center animate">
                                                                    <img src={Ellione} alt=""/>
                                                                    <div className="slider-content">
                                                                      <h4>BELGRAVIA</h4>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                      
                                                            
                                                                <div className="col-lg-3 d-none d-lg-block">
                                                                  <div className="slider-card side">
                                                                    <img src={Ellitwo} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                              </div>
                                                            </div>
                                      
                                                        
                                                            <div className="carousel-item">
                                                              <div className="row justify-content-center align-items-center g-4">
                                      
                                                                <div className="col-lg-3 d-none d-lg-block">
                                                                  <div className="slider-card side">
                                                                    <img src={Ellione} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                                <div className="col-lg-6 col-md-10">
                                                                  <div className="slider-card center animate">
                                                                    <img src={Ellitwo} alt=""/>
                                                                    <div className="slider-content">
                                                                      <h4>BELGRAVIA HEIGHTS I</h4>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                      
                                                                <div className="col-lg-3 d-none d-lg-block">
                                                                  <div className="slider-card side">
                                                                    <img src={Ellithree} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                              </div>
                                                            </div>
                                      
                                      
                                      
                                                            <div className="carousel-item">
                                                              <div className="row justify-content-center align-items-center g-4">
                                      
                                                                <div className="col-lg-3 d-none d-lg-block">
                                                                  <div className="slider-card side">
                                                                    <img src={Ellitwo} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                                <div className="col-lg-6 col-md-10">
                                                                  <div className="slider-card center animate">
                                                                    <img src={Ellithree} alt=""/>
                                                                    <div className="slider-content">
                                                                      <h4>BELGRAVIA SQUARE</h4>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                      
                                                                <div className="col-lg-3 d-none d-lg-block">
                                                                  <div className="slider-card side">
                                                                    <img src={Ellifour} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                              </div>
                                                            </div>
                                      
                                      
                                      
                                                            <div className="carousel-item">
                                                              <div className="row justify-content-center align-items-center g-4">
                                      
                                                                <div className="col-lg-3 d-none d-lg-block">
                                                                  <div className="slider-card side">
                                                                    <img src={Ellithree} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                                <div className="col-lg-6 col-md-10">
                                                                  <div className="slider-card center animate">
                                                                    <img src={Ellifour} alt=""/>
                                                                    <div className="slider-content">
                                                                      <h4>BELGRAVIA GARDENS</h4>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                      
                                                                <div className="col-lg-3 d-none d-lg-block">
                                                                  <div className="slider-card side">
                                                                    <img src={Ellifive} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                              </div>
                                                            </div>
                                      
                                      
                                                            <div className="carousel-item">
                                                              <div className="row justify-content-center align-items-center g-4">
                                      
                                                                <div className="col-lg-3 d-none d-lg-block">
                                                                  <div className="slider-card side">
                                                                    <img src={Ellifour} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                                <div className="col-lg-6 col-md-10">
                                                                  <div className="slider-card center animate">
                                                                    <img src={Ellifive} alt=""/>
                                                                    <div className="slider-content">
                                                                      <h4>THE HILLGATEL</h4>
                                                                
                                                                    </div>
                                                                  </div>
                                                                </div>
                                      
                                                                <div className="col-lg-3 d-none d-lg-block">
                                                                  <div className="slider-card side">
                                                                    <img src={Ellione} alt=""/>
                                                                  </div>
                                                                </div>
                                      
                                                              </div>
                                                            </div>
                                      
                                      
                                                            
                                      
                                                          </div>
                                      
                                                      
                                                          <button className="carousel-control-prev" type="button" data-bs-target="#animatedSlider" data-bs-slide="prev">
                                                            <span className="carousel-control-prev-icon"></span>
                                                          </button>
                                      
                                                          <button className="carousel-control-next" type="button" data-bs-target="#animatedSlider" data-bs-slide="next">
                                                            <span className="carousel-control-next-icon"></span>
                                                          </button>
                                      
                                                        </div>
                                      
                                                      </div>
                                                </section>


 <div className="container mt-5">
                                                    <h2 className="abouts-title text-center fw-bold">Our Projects</h2>
                                                    <div class="lr-images">
                                                    <div class="img-box" >
                                                      <img src={Ellieight} alt="Left Image"/>
                                                    </div>
                                                    <div class="img-boxs" style={{marginTop:"3rem"}}>
                                                      <img src={Elliseven} alt="Right Image"/>
                                                    </div>
                                                    <div class="img-box" >
                                                      <img src={Ellisix} alt="Left Image"/>
                                                    </div>
                                                    <div class="img-boxs" style={{marginTop:"3rem"}}>
                                                      <img src={Ellifour} alt="Right Image"/>
                                                    </div>
                                                  </div>
                                                </div>
                                        
                                        
                                        
                                        
                                        
                                                 <section className="contact-section py-5 mt-5"  data-aos="fade-down-left" style={{backgroundColor:"black"}}>
                                                                <div className="container">
                                                                    <div className="contact-wrapper">
                                                
                                                                    <div className="row g-0 align-items-center">
                                                
                                                                    
                                                                        <div className="col-lg-6 p-5 form-area">
                                                
                                                                        <h3 className="contact-title text-center mb-4">GET IN TOUCH</h3>
                                                                      <form onSubmit={sendEmail}>
                                                
                                                                        {/* Property Type */}
                                                                       
                                                
                                                                        {/* Full Name */}
                                                                        <div className="mb-4">
                                                                          <input
                                                                            type="text"
                                                                            name="fullName"
                                                                            className="form-control contact-input"
                                                                            placeholder="Your Name*"
                                                                            required
                                                                          />
                                                                        </div>
                                                
                                                                        {/* Phone */}
                                                                        <div className="mb-4">
                                                                          <input
                                                                            type="text"
                                                                            name="phone"
                                                                            className="form-control contact-input"
                                                                            placeholder="Phone Number*"
                                                                            required
                                                                          />
                                                                        </div>
                                                
                                                                        {/* Email */}
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
                                                                         <select
                                                                            name="propertyType"
                                                                            className="form-control contact-input"
                                                                            required
                                                                          >
                                                                            <option value="">Property Type</option>
                                                                            <option value="Apartments">Apartments</option>
                                                                            <option value="Villas">Villas</option>
                                                                          </select>
                                                                        </div>
                                                
                                                
                                                                        {/* Message */}
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
                                                                        <img src={For} className="img-fluid contact-img" alt=""/>
                                                                        </div>
                                                
                                                                    </div>
                                                
                                                                    </div>
                                                                </div>
                                                            </section>


        



        <Footer/>

        </>
    )
}
export default ellignton;