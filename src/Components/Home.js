import React from "react";
import ImgCute from '../Figures/cont_1_06.jpg'
import * as S from "../Styles/Styles"
const Home = () =>{
   return(
      <S.BoxTwo>
        <div>
         <h3>Veja fotos aleatorias de gatos e cachorros</h3>
         <h4>Nada melhor do que animais fofos para melhorar o dia</h4>
         <p>Esse site foi construido com o objtivo de consumir api's de fotos de gatos e cachorros. Feito no curso de desenvolverdor front-end do vai na web</p>
        </div>
        <figure>
           <img src={ImgCute}/>
        </figure>
         
      </S.BoxTwo>
   );

}

export default Home;