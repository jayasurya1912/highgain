import Navbar from "./navbar";
import Footer from "./footer";
import Azzone from "../assets/azzone.jpg";
import Azztwo from "../assets/azztwo.jpg";
import Azzthree from "../assets/azzthree.jpg";
import Azzfour from "../assets/azzfour.webp";
import Azzfive from "../assets/azzfive.jpg";
import Azzsix from "../assets/azzsix.jpg";
import Azzseven from "../assets/azzseven.jpg";
import { useEffect } from "react";
import Abtn from "../assets/aziziabtn.webp";
import For from "../assets/forin.webp";


function azizi()
{


     useEffect(()=>
        {
            document.title="Azizi"
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


            <section className="hg-azizi-section">
                <div className="hg-banners-overlay"></div>

                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-12 hg-banners-text text-center">
                            <h1>AZIZI</h1>
                        
                        </div>
                    </div>
                </div>
            </section>


            <section className="sanctuary-section" data-aos="zoom-out">
                <div className="container">
                  <div className="row align-items-center g-5">

                
                    <div className="col-lg-6">
                      <h2 className="sanctuary-title">YOUR AZIZI SANCTUARY BY THE SEA</h2>

                      <p className="sanctuary-text">
                        Imagine beginning every day in an exclusive waterfront address where refined
                        luxury meets serene coastal living. Azizi’s sea-facing residences are thoughtfully
                        designed to offer uninterrupted views, natural light, and a tranquil ambience that
                        elevates everyday living. Nestled along a pristine lagoon and private boardwalk,
                        these elegant 4, 5, and 6-bedroom villas redefine sophistication with spacious
                        layouts, contemporary architecture, and world-class finishes. A perfect harmony
                        of modern design and nature’s beauty, Azizi presents a lifestyle of prestige,
                        privacy, and timeless value.
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
                        <h2 className="sanctuary-title" style={{fontWeight:"500",color:"white"}}>AZIZI PROJECTS</h2>
                    </div>

                  <div id="animatedSlider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="hover">
                    <div className="carousel-inner">

                    
                      <div className="carousel-item active">
                        <div className="row justify-content-center align-items-center g-4">

                      
                          <div className="col-lg-3 d-none d-lg-block">
                            <div className="slider-card side">
                              <img src={Azzsix} alt=""/>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-10">
                            <div className="slider-card center animate">
                              <img src={Azzone} alt=""/>
                              <div className="slider-content">
                                <h4>AZIZI RIVIERA</h4>
                              </div>
                            </div>
                          </div>

                      
                          <div className="col-lg-3 d-none d-lg-block">
                            <div className="slider-card side">
                              <img src={Azztwo} alt=""/>
                            </div>
                          </div>

                        </div>
                      </div>

                  
                      <div className="carousel-item">
                        <div className="row justify-content-center align-items-center g-4">

                          <div className="col-lg-3 d-none d-lg-block">
                            <div className="slider-card side">
                              <img src={Azzone} alt=""/>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-10">
                            <div className="slider-card center animate">
                              <img src={Azztwo} alt=""/>
                              <div className="slider-content">
                                <h4>AZIZI VENICE</h4>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-3 d-none d-lg-block">
                            <div className="slider-card side">
                              <img src={Azzthree} alt=""/>
                            </div>
                          </div>

                        </div>
                      </div>



                      <div className="carousel-item">
                        <div className="row justify-content-center align-items-center g-4">

                          <div className="col-lg-3 d-none d-lg-block">
                            <div className="slider-card side">
                              <img src={Azztwo} alt=""/>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-10">
                            <div className="slider-card center animate">
                              <img src={Azzthree} alt=""/>
                              <div className="slider-content">
                                <h4>AZIZI MINA</h4>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-3 d-none d-lg-block">
                            <div className="slider-card side">
                              <img src={Azzfour} alt=""/>
                            </div>
                          </div>

                        </div>
                      </div>



                      <div className="carousel-item">
                        <div className="row justify-content-center align-items-center g-4">

                          <div className="col-lg-3 d-none d-lg-block">
                            <div className="slider-card side">
                              <img src={Azzthree} alt=""/>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-10">
                            <div className="slider-card center animate">
                              <img src={Azzfour} alt=""/>
                              <div className="slider-content">
                                <h4>AZIZI MILAN</h4>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-3 d-none d-lg-block">
                            <div className="slider-card side">
                              <img src={Azzfive} alt=""/>
                            </div>
                          </div>

                        </div>
                      </div>


                      <div className="carousel-item">
                        <div className="row justify-content-center align-items-center g-4">

                          <div className="col-lg-3 d-none d-lg-block">
                            <div className="slider-card side">
                              <img src={Azzfour} alt=""/>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-10">
                            <div className="slider-card center animate">
                              <img src={Azzfive} alt=""/>
                              <div className="slider-content">
                                <h4>BURJ AZIZI</h4>
                          
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-3 d-none d-lg-block">
                            <div className="slider-card side">
                              <img src={Azzsix} alt=""/>
                            </div>
                          </div>

                        </div>
                      </div>


                      <div className="carousel-item">
                        <div className="row justify-content-center align-items-center g-4">

                          <div className="col-lg-3 d-none d-lg-block">
                            <div className="slider-card side">
                              <img src={Azzfive} alt=""/>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-10">
                            <div className="slider-card center animate">
                              <img src={Azzsix} alt=""/>
                              <div className="slider-content">
                                <h4>AZIZI WARES</h4>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-3 d-none d-lg-block">
                            <div className="slider-card side">
                              <img src={Azzone} alt=""/>
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
              <img src={Azzfive} alt="Left Image"/>
            </div>
            <div class="img-boxs" style={{marginTop:"3rem"}}>
              <img src={Azzone} alt="Right Image"/>
            </div>
            <div class="img-box" >
              <img src={Azzfour} alt="Left Image"/>
            </div>
            <div class="img-boxs" style={{marginTop:"3rem"}}>
              <img src={Azzthree} alt="Right Image"/>
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
export default azizi;