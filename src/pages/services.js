import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
const servicePage = () => (
    <Layout>
      <SEO title="Servicios" />
        <div className="row">
          <div className="col-xs-12 col-lg-6">
          <h1>Our <span className="yellow">Services</span></h1>
            <p className="text-justify">
              We offer a basic plan that can be enriched with multiple add-ons to manage and improve your digital ecosystem.              
            </p>
          </div>
        </div>
        <div className="row d-flex align-items-center">
        <div className="col-xs-12 col-lg-6 text-center">
        <img src="/basicPackage.svg" alt="" className="img-fluid "/>
        </div>          
        <div className="col-xs-12 col-lg-6">
          <h3 className="title yellow">
            Awesome Basic Kit
          </h3>
          <p className="text-justify">
            In sunt pariatur culpa aute non aliquip anim irure duis eu cillum irure duis. Veniam duis mollit laborum eiusmod aliqua est aute est culpa. Cillum culpa incididunt ad eiusmod ea. Occaecat veniam amet dolor ea consequat minim magna do nulla consequat.
          </p>
          <ul class="list-group">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
              </ul>           
              <div className="row mt-2 ">
                <div className="col-12 ">
                  <Link to="/">
                    <button class="btn yellowBtn">More Info</button>                  
                  </Link>
                </div>  
              </div>           
              </div>  
      </div>
      <hr/>
      <h2 className="mt-2">Our <span className="yellow">Packages</span></h2>
      <div className="row">
      <div className="col-12">
            <div className="card-group">
              <div class="card shadow mx-auto my-2 card-md">
                <img src="/marketingCampaign.svg" class="card-img-top img-fluid p-1" alt="..." />
                <div class="card-body">
                  <h5 class="card-title yellow">Marketing Campaign</h5>
                  <p class="card-text text-justify">
                    Anim voluptate eiusmod culpa proident deserunt nisi id adipisicing dolore irure non id irure.
                  </p>           
                </div>
                <div className="card-footer text-center">
                      <Link to="/">
                        <button class="btn yellowBtn">More Info</button>                  
                      </Link>                  
                </div>
              </div>

              <div class="card shadow mx-auto my-2 card-md">
                <img src="/webRedesign.svg" class="card-img-top img-fluid p-1" alt="..." />
                <div class="card-body">
                  <h5 class="card-title yellow">Web Redesign</h5>
                  <p class="card-text text-justify">
                    Anim voluptate eiusmod culpa proident deserunt nisi id adipisicing dolore irure non id irure.
                  </p>           
                </div>
                <div className="card-footer text-center">
                      <Link to="/">
                        <button class="btn yellowBtn">More Info</button>                  
                      </Link>                  
                </div>
              </div>

              <div class="card shadow mx-auto my-2 card-md">
                <img src="/socialMediaCampaign.svg" class="card-img-top img-fluid p-1" alt="..." />
                <div class="card-body">
                  <h5 class="card-title yellow">Social Media Campaign</h5>
                  <p class="card-text text-justify">
                    Anim voluptate eiusmod culpa proident deserunt nisi id adipisicing dolore irure non id irure.
                  </p>           
                </div>
                <div className="card-footer text-center">
                      <Link to="/">
                        <button class="btn yellowBtn">More Info</button>                  
                      </Link>                  
                </div>
              </div>                            
              <div class="card shadow mx-auto my-2 card-md">
                <img src="/bussinessKnowledgeDashboard.svg" class="card-img-top img-fluid p-1" alt="..." />
                <div class="card-body">
                  <h5 class="card-title yellow">Bussiness Knowledge Dashboard</h5>
                  <p class="card-text text-justify">
                    Anim voluptate eiusmod culpa proident deserunt nisi id adipisicing dolore irure non id irure.
                  </p>           
                </div>
                <div className="card-footer text-center">
                      <Link to="/">
                        <button class="btn yellowBtn">More Info</button>                  
                      </Link>                  
                </div>
              </div>                 
            </div>
          </div>        
                
      </div>
    </Layout>
    )
export default servicePage;