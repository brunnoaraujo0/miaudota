import React from "react";
import './Home.css'
import fundo from "./imagens/fundo.png"
import animais from "./imagens/animais.png"

function Home(){

    return (
        <div className="home" style={
            {
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage:`url(${fundo})`
            }
        }>
            <div className="home-texto">
                <h1>O seu <br/> próximo <br/> <span>amor,</span> <br/> esta aqui!</h1>
                <a href="#contato">Me adote aqui</a>
            </div>
            <div className="home-foto" style={
            {
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage:`url(${animais})`
            }}>

            </div>
        </div>
    )

}export default Home