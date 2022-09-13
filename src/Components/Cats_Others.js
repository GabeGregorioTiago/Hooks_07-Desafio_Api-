import React, {useState} from "react";
import axios from "axios";
import * as S from "../Styles/Styles";
const Cats = () =>{
   
    const [data, setData]=useState([]);
    const [open,setOPen]=useState(false);

    const API = " https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_Sso1QGgaTAoqtNUZabwcHIfnOuuPouKzKofG4yQyC9TwAxkskrenZuswdRSLbf79"
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
      <S.BoxCats>
      <div>
        <h2>Clique no botão para aparecer imagens de gatinhos</h2>
        <button
       onClick={() => {
         CatsApi();
       }}>
       Clique aqui
     </button>
      </div>
     
      <S.Fig>

     {data.map((item) => (
          

              <img src={item.url} alt="Cats" />
          
  
         
    

 ))}
      
    
      </S.Fig>
   </S.BoxCats>
      );


};

export default Cats;
