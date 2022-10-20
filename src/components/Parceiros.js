import React, {useState} from "react";
import fundo from './imagens/fundo3.png'
import petz from './imagens/petz.png'
import luisamell from './imagens/luisamell.png'
import pedigree from './imagens/pedigree.png'
import prefeitura from './imagens/prefeitura.png'
import viralata from './imagens/vira lata.png'
import whiskas from './imagens/whiskas.png'
import './Parceiros.css'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

function Parceiros() {

    const [scrollX, setScrollX] = useState(-200)

const leftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth);
    if(x > 0 ) {
        x = 0;
    }setScrollX(x);

}
const rightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = 2200;
        if(window.innerWidth - listW > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
}

    return (

        <div className="parceiros" style={
            {
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage:`url(${fundo})`
            }}>

        
     <div className="parceiros--left">
        <FaAngleLeft style={{fontSize: 50, cursor: "pointer", color: '#FFA840', backgroundColor: ' #371669', borderRadius: '50px'}} onClick={leftArrow}/>
     </div>
     <div className="parceiros-listarea">
        <h1>Nossos parceiros</h1>
            <div className="parceiros-list" style={{marginLeft: scrollX}}>
                <div className="parceiros-item">
                    <img alt="" src={petz}/>

                </div>
                <div className="parceiros-item">
                <img alt="" src={luisamell}/>

                </div>
                <div className="parceiros-item">
                <img alt="" src={pedigree}/>


                </div>
                <div className="parceiros-item">
                <img alt="" src={whiskas}/>

                </div>
                <div className="parceiros-item">
                <img alt="" src={viralata}/>

                </div>
                <div className="parceiros-item">
                <img alt="" src={prefeitura}/>


</div>
            </div>
     </div>

     <div className="parceiros--right" >
        <FaAngleRight style={{fontSize: 50, cursor: "pointer", color: '#FFA840', backgroundColor: ' #371669', borderRadius: '50px'}}  onClick={rightArrow}/>
     </div>


        </div>

    )

} 
export default Parceiros