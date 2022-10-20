import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import QuemSomos from "./components/QuemSomos";
import Servicos from "./components/Servicos";
import "./App.css"
import Parceiros from "./components/Parceiros";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  
   return( <div>
    

   <Header />
   <Home/>
   <QuemSomos />
   <Servicos/>
   <Parceiros/>
   <Contato/>
   <Footer/>
    
    
    </div>);
}

export default App