import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  // <Layout>
  <div className="container">
    <SEO title="Inicio" />
    <div className="mt-3">
    <div className="row">
      <div className="col-xs-12 col-lg-6">
        <h1 className="">In <span className="yellow">Data</span> we <span className="yellow">Trust</span></h1>
        <h3>Grow your bussines with <span className="yellow">Artificial Intelligence</span> and <span className="yellow">Digital Marketing.</span> </h3>
        <h2 className="yellow mt-5">Cooming Soon</h2>
      </div>
      <div className="col-xs-12 col-lg-6 text-center">
        <img src="/visualData.svg" alt="" className="img-fluid"/>
      </div>
      </div>
    </div>
    <hr/>
  </div>
  )

//     {/* <div id="mission">
//       <div className="row">
//         <div className="col-xs-12 col-lg-6">
//         <h4>Our <span className="yellow">Mission</span></h4>
//         <p className="text-justify">
//           Ex eiusmod eiusmod do et Lorem minim deserunt. Esse eu ad nisi do. Sit do et fugiat consequat ullamco minim.
//           Elit exercitation velit laboris fugiat occaecat veniam laboris cupidatat ex et nisi veniam enim eiusmod. 
//         </p>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-xs-6 col-sm-6 col-lg-3 text-center">
//             <img src="/digitalPresence.svg" alt="" className="img-fluid"/>
//             <h5>Improve your<br/><span className="yellow">Digital Presence</span></h5>
//         </div>
//         <div className="col-xs-6 col-sm-6 col-lg-3 text-center">
//             <img src="/idealBuyer.svg" alt="" className="img-fluid"/>
//             <h5>Connect with your<br/><span className="yellow">Ideal Buyer</span></h5>
//         </div>
//         <div className="col-xs-6 col-sm-6 col-lg-3 text-center">
//             <img src="/digitalImpact.svg" alt="" className="img-fluid"/>
//             <h5>Analyze your<br/><span className="yellow">Digital Impact</span></h5>
//         </div>
//         <div className="col-xs-6 col-sm-6 col-lg-3 text-center">
//             <img src="/marketingStrategy.svg" alt="" className="img-fluid"/>
//             <h5>Build your<br/><span className="yellow">Marketing Stategy</span></h5>
//         </div>                        
//       </div>
//       <div className="row mt-3">
//         <div className="col-xs-12 col-lg-6">
//         <p className="text-justify">
//           Ex eiusmod eiusmod do et Lorem minim deserunt. Esse eu ad nisi do. Sit do et fugiat consequat ullamco minim.
//         </p>
//         </div>
//       </div>
//       <div className="mt-3">
//         <div className="row">
//           <div className="col-xs-12 col-lg-12 text-center">
//             <Link to="/services">
//               <button className="btn yellowBtn text-white">How does it works?</button>            
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>

//   </Layout> */
// }

export default IndexPage
