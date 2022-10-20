import React from "react";
import './Contato.css'

function Contato(){

    return (
        <div className="contact">
            <h1>Entre em contato conosco!</h1>
        <form method="post">
            <div className="contact-dados">

            <div className="contato-nome">
            <h3 class="nome" >Seu nome:</h3>
            <input type="text" name="nome" className="contato-input"/>
            <h3 class="nome" >Seu email:</h3>
            <input type="text" name="nome" className="contato-input"/>

            </div>


            <div className="contato-mensagem">
            <h3 class="nome" >Sua mensagem: </h3>
            <input type="text" name="universidade"  className="contato-input-mensagem"/>
            </div>
           
           
                
            </div>      
           <div className="contato-enviar">
           <input type="submit" value="Enviar" />
           </div>
           
           
     
     </form>
        </div>

    )

}export default Contato