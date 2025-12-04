import Logo from "../assets/mainlogo.jpg"
function footer()
{


    return(

        <>
        
             <footer class="footer-section pt-5 pb-3">

                <div class="container">

                    <div class="row footer-top">

                    
                    <div class="col-lg-4 col-md-6 mb-4">
                        <img src={Logo} class="footer-logo mb-3" alt="logo" style={{background:"white",padding:"20px"}}/>

                        <p class="footer-tagline">
                        HighGain Real Estate,<br/>
                        Live your dream.
                        </p>
                    </div>

                    
                    <div class="col-lg-3 col-md-6 mb-4">
                        <h5 class="footer-heading">QUICK LINKS</h5>

                        <ul class="footer-links list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Marketing Patners</a></li>
                        <li><a href="#">Why collaborating</a></li>
                        <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    
                    <div class="col-lg-3 col-md-6 mb-4">
                        <h5 class="footer-heading">CONTACT</h5>

                        <p class="footer-contact">81262, Al Qusais, Dubai, UAE</p>
                        <p class="footer-contact">Mobile: <a href="#" class="footer-link">+971 508 364 706</a></p>
                        <p class="footer-contact">Email: <a href="#" class="footer-link">amir@highgainrealestate.com</a></p>
                    </div>

                    
                    <div class="col-lg-2 col-md-6 mb-4">
                        <h5 class="footer-heading">SOCIAL MEDIA</h5>

                        <div class="footer-social">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>

                    </div>

                    <div className="container">
                    <hr class="footer-line"/>
                    </div>

                
                    <div class="text-center footer-copy pt-2">
                    Copyright © 2025  High Gain Real Estate.  All Rights Reserved
                    </div>

                </div>

            </footer>

        
        </>
    )
}

export default footer;