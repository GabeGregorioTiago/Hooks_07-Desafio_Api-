import React, {useState} from "react";
import axios from "axios";
import * as S from "../Styles/Styles";
const Dogs = () =>{
   
    const [data, setData]=useState(null);
    const [open,setOPen]=useState(false);

    const API = "https://dog.ceo/api/breeds/image/random";

    const DogsApi=()=>{
        
        axios
        .get(API)
        .then((resposta) => {
          setData(resposta.data.message);
          console.log(data);
        })
        .catch((error) => {
          console.log("Desculpe aconteceu um erro na requisição", error);
        });
    };
    return (
        <S.BoxDog>
          <div>
          <h2>Clique no botão para aparecer imagens de doguinhos</h2>
          <button
            onClick={() => {
              DogsApi();
            }}>
            Clique aqui
          </button>
          </div>
         
          <S.ImgDog src={data} alt="nome" />
        
        </S.BoxDog>
      );


};

export default Dogs;
