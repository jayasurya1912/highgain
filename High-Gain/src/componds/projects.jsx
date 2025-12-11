
import Navbar from "./navbar";
import Footer from "./footer";
function project()
{

    return(

        <>

        <Navbar/>


                    <section className="hg-bannersso-section">
                        <div className="hg-banners-overlay"></div>

                        <div className="container h-100">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-lg-12 hg-banners-text text-center">
                                    <h1>PROJECTS</h1>
                                
                                </div>
                            </div>
                        </div>
                    </section>




                    <div className="container py-5">

                        
                        <ul className="nav nav-pills justify-content-center mb-5" id="pills-tab" role="tablist">
                            <li className="nav-item">
                            <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#all">All</button>
                            </li>
                            <li className="nav-item">
                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#delivered">Delivered</button>
                            </li>
                            <li className="nav-item">
                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#launching">Launching Soon</button>
                            </li>
                            <li className="nav-item">
                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#selling">Now Selling</button>
                            </li>
                        </ul>

                        
                        <div className="tab-content">

                           
                            <div className="tab-pane fade show active" id="all">
                            <div className="row g-4">
                                
                               
                                <div className="col-lg-4 col-md-6">
                                <div className="property-card">
                                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt=""/>
                                    <div className="badge-top">Now selling</div>
                                    <div className="card-bottom">
                                    Nineteen Riviera Lagoon, Meydan District
                                    <span>Dubai • Villas</span>
                                    </div>
                                </div>
                                </div>

                           
                                <div className="col-lg-4 col-md-6">
                                <div className="property-card">
                                    <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" alt=""/>
                                    <div className="badge-top">Now selling</div>
                                    <div className="card-bottom">
                                    Riviera Chalet – JVC
                                    <span>Dubai • Apartments</span>
                                    </div>
                                </div>
                                </div>

                           
                                <div className="col-lg-4 col-md-6">
                                <div className="property-card">
                                    <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914" alt=""/>
                                    <div className="badge-top">Now selling</div>
                                    <div className="card-bottom">
                                    Lodge Residences
                                    <span>Dubai • Apartments</span>
                                    </div>
                                </div>
                                </div>

                              

                               
                                <div className="col-lg-4 col-md-6">
                                <div className="property-card">
                                    <img src="https://images.unsplash.com/photo-1613977257365-a4b83649f3f5" alt=""/>
                                    <div className="badge-top">Launching soon</div>
                                    <div className="card-bottom">
                                    Premium Creek Towers
                                    <span>Dubai • Waterfront</span>
                                    </div>
                                </div>
                                </div>

                              
                                <div className="col-lg-4 col-md-6">
                                <div className="property-card">
                                    <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811" alt=""/>
                                    <div className="badge-top">Delivered</div>
                                    <div className="card-bottom">
                                    Riviera Heights
                                    <span>Dubai • Luxury</span>
                                    </div>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                <div className="property-card">
                                    <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd0" alt=""/>
                                    <div className="badge-top">Now selling</div>
                                    <div className="card-bottom">
                                    Marina Sky View
                                    <span>Dubai • Apartments</span>
                                    </div>
                                </div>
                                </div>

                          
                                <div className="col-lg-4 col-md-6"><div className="property-card"><img src="https://picsum.photos/600/400?random=1"/><div className="badge-top">Delivered</div><div className="card-bottom">Sample Project<span>Dubai • Apartments</span></div></div></div>
                                <div className="col-lg-4 col-md-6"><div className="property-card"><img src="https://picsum.photos/600/400?random=2"/><div className="badge-top">Launching soon</div><div className="card-bottom">Palm Elite<span>Dubai • Villas</span></div></div></div>
                                <div className="col-lg-4 col-md-6"><div className="property-card"><img src="https://picsum.photos/600/400?random=3"/><div className="badge-top">Now selling</div><div className="card-bottom">Sunset Beach Homes<span>Dubai • Villas</span></div></div></div>
                                <div className="col-lg-4 col-md-6"><div className="property-card"><img src="https://picsum.photos/600/400?random=4"/><div className="badge-top">Delivered</div><div className="card-bottom">City Luxe Tower<span>Dubai • City</span></div></div></div>
                                <div className="col-lg-4 col-md-6"><div className="property-card"><img src="https://picsum.photos/600/400?random=5"/><div className="badge-top">Now selling</div><div className="card-bottom">Green Estate<span>Dubai • Eco Homes</span></div></div></div>
                                <div className="col-lg-4 col-md-6"><div className="property-card"><img src="https://picsum.photos/600/400?random=6"/><div className="badge-top">Launching soon</div><div className="card-bottom">Riverfront Towers<span>Dubai • Waterfront</span></div></div></div>

                            </div>
                            </div>


                         

                            <div className="tab-pane fade" id="delivered">
                            <h4 className="text-center py-5">Delivered Projects (12 items)</h4>
                            </div>

                            <div className="tab-pane fade" id="launching">
                            <h4 className="text-center py-5">Launching Soon Projects (12 items)</h4>
                            </div>

                            <div className="tab-pane fade" id="selling">
                            <h4 className="text-center py-5">Now Selling Projects (12 items)</h4>
                            </div>

                        </div>
                        </div>







        <Footer/>
        
        </>
    )
}
export default project;