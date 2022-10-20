import React from "react";
import './Footer.css'
import instagram from './imagens/logo-instagram.png'
import github from './imagens/logo-github.png'
import twitter from './imagens/logo-twitter.png'
import facebook from './imagens/logo-facebook.png'
import linkedin from './imagens/logo-linkedin.png'
import rodape from './imagens/rodape.png'

function Footer() {

return (


    <div className="footer">
        <div className="footer-redesSociais">
            <div className="caixa-redes">
                 <img alt="" src={instagram}/>
            </div>
            <div className="caixa-redes">
                 <img alt="" src={facebook}/>
            </div>
            <div className="caixa-redes">
                 <img alt="" src={twitter}/>
            </div>
            <div className="caixa-redes">
                 <img alt="" src={github}/>
            </div>
            <div className="caixa-redes">
                 <img alt="" src={linkedin}/>
            </div>
            
        </div>
        <div className="footer-logo">
            <img alt="" src={rodape}/>
        </div>
    </div>

)

}export default Footer