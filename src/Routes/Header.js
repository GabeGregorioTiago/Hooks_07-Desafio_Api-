import React from "react";
import {Link} from  "react-router-dom";
import * as S from "../Styles/Styles";
import Logo from "../Figures/3500_2_03-removebg-preview.png"
const Header =({rota,rota2,rota3,rota4})=>{
      return(
         
              <S.Nav>
                <img src={Logo} alt=""/>
                <h1>Veja fotos de animais fofos</h1>
                 <S.Ul>
                    <li><Link to="/home">{rota}</Link></li>
                    <li><Link to="/dog">{rota2}</Link></li>
                    <li><Link to="/cat">{rota3}</Link></li>
                    <li><Link to="/catTwo">{rota4}</Link></li>
                    
                    
                 </S.Ul>
              </S.Nav>
        

      );

};

export default Header;