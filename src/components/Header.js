import React, { useState } from "react";
import './Header.css';
import Home from "./Home";
import logo from "./imagens/logo miaudota.png"
import menu from "./imagens/menu hamburguer.png"
import sair from "./imagens/x.png"
import QuemSomos from "./QuemSomos";



function Header() {
    
    const[estado, setEstado] = useState("provisorio");

    function mudarEstado(){
        if(estado==="opcoes"){
           setEstado("provisorio");
        }
        else {
            setEstado("opcoes");
        }
    }
   
return(
    
    <div className="header">
       
        <div className="header-logo">
        <img src={logo} alt=""></img>
        </div>
        <div className="Hamburguer-menu">
            <button><img alt="" src={menu} onClick={mudarEstado}/></button>
            
        </div>
        <div className={estado}>
            <div className="botao">
            <button><img alt="" src={sair} onClick={mudarEstado}/></button>
            </div>
            <div className="lista">
            <a href={Home}>HOME</a>
            <a href={QuemSomos}>QUEM SOMOS</a>
            <a href="#home">SERVIÇOS</a>
            <a href="#home">PARCEIROS</a>
            <a href="#home">CONTATO</a>
            </div>
        
        </div>
        <div className="header-menu">
            <a href="Home">HOME</a>
            <a href={QuemSomos}>QUEM SOMOS</a>
            <a href="#home">SERVIÇOS</a>
            <a href="#home">PARCEIROS</a>
            <a href="#home">CONTATO</a>
            
            
        </div>
    </div>

)

}
export default Header