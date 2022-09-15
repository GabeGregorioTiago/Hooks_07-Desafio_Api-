import React,{useState} from "react";
import {Link} from  "react-router-dom";
import * as S from "../Styles/Styles";
import Logo from "../Figures/3500_2_03-removebg-preview.png"
const Header =({rota,rota2,rota3})=>{
    
   const [open,setOpen]=useState(false);  
   return(
         
              <S.Nav>
                 <S.BoxMenuH>
                  <button onClick={()=>{setOpen(!open)}}>{open === true ? "x" : "≡"}</button>
                {open && (<nav>
                   <ul>
                   <li><Link to="/">{rota}</Link></li>
                    <li><Link to="/dog">{rota2}</Link></li>
                    <li><Link to="/cat">{rota3}</Link></li>
                   
                    
                     
                      
                   </ul>
                </nav>)}
        
              </S.BoxMenuH>
                <img src={Logo} alt=""/>
                <h1>Veja fotos de animais fofos</h1>
                 <S.Ul>
                    <li><Link to="/">{rota}</Link></li>
                    <li><Link to="/dog">{rota2}</Link></li>
                    <li><Link to="/cat">{rota3}</Link></li>
                   
                    
                    
                 </S.Ul>
                
              </S.Nav>
              
               

      );

};

export default Header;