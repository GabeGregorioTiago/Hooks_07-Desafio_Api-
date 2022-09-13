import React, {useState} from "react";
import axios from "axios";
import * as S from "../Styles/Styles";
const Cats = () =>{
   
    const [data, setData]=useState([]);
    const [open,setOPen]=useState(false);

    const API = "https://api.thecatapi.com/v1/images/search?api_key=live_Sso1QGgaTAoqtNUZabwcHIfnOuuPouKzKofG4yQyC9TwAxkskrenZuswdRSLbf79"
    const CatsApi=()=>{
        
      axios
      .get(API)
      .then((resposta) => {
        setData(resposta.data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Desculpe aconteceu um erro na requisição", error);
      });
  };
  
    return (
        <S.BoxDog>
           <div>
             <h2>Clique no botão para aparecer imagens de gatinhos</h2>
             <button
            onClick={() => {
              CatsApi();
            }}>
            Clique aqui
          </button>
           </div>
          
         

          {data.map((item) => (
       
       
                <S.ImgDog src={item.url} alt="Cats" />
          
         
     
      ))}
           
         
        </S.BoxDog>
      );


};

export default Cats;
