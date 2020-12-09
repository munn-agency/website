import React from "react"
const Footer = () => {
    return(
        <div className="blueBg ">
            <div className="container">
                <div className="row d-flex align-items-center mt-5">
                    <div className="col-xs-12 col-lg-6">
                        <h1 className="yellow ">munn.</h1>
                        <p className="text-left yellow">
                            Suscribe to our newsletter and get tips to improve your impact in the digital ecosystem. 
                        </p>
                    </div>
                </div>
                <div className="py-3 row">
                <div className="col-xs-12 col-lg-4">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="mail@example.com" aria-label="mail@example.com" aria-describedby="button-addon2" /> 
                    <div class="input-group-append">
                        <button class="btn yellowBtn yellow" type="button" id="button-addon2">Suscribe</button>
                    </div>
                </div>   
                </div>                 
                </div>
            </div>
        </div>
    )
}

export default Footer;