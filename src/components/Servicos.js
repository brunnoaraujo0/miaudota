import React from "react";
import './Servicos.css'
import fundo from './imagens/fundo2.png'
import cachorro from './imagens/cachorro.png'
import osso from './imagens/osso.png'
import racao from './imagens/racao.png'

function Servicos() {

    return (
        <div className="servicos" style={
            {
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage:`url(${fundo})`
            }}>
                <h1 className="h1">Nossos  Serviços</h1>
            <div className="servicos-geral">
                <div className="servicos-item">
                    <div className="item">
                    <img alt="" src={cachorro}/>
    
                    </div>
                    <h1>Adoção</h1>
                </div>
                <div className="servicos-item">
                <div className="item">
                <img alt="" src={osso}/>
                
                </div>
                <h1>Brinquedos</h1>
                </div>
                <div className="servicos-item">
                <div className="item">
                <img alt="" src={racao}/>
                
                </div>
                <h1>Rações</h1>
                </div>
            </div>
        </div>
    )
}
export default Servicos