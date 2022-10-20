import React from "react";
import './QuemSomos.css'
import fundo from './imagens/fundo1.png'
import pata from './imagens/pata.png'
function QuemSomos() {

return (

    <div className="quemsomos" style={
        {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage:`url(${fundo})`
        }}>
    <div className="quemsomos-foto">
        <img alt="" src={pata}/>
    </div>
    <div className="quemsomos-texto">
        <h1>Quem Somos?</h1>

        <p>A miaudota é uma instituição que abriga animais que foram vítimas de maus tratos com seus antigos donos. Por meio de adoção nossos pets são monitorados mensalmente para que não sofra novamente futuras maus tratos com seus novos donos. Sempre zelando pelo bem estar do animal fornecendo sempre todo amor que ele merece receber.
</p>
    </div>
    </div>
)

}export default QuemSomos
