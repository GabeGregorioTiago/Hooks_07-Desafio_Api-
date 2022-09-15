import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Inter:wght@400;500;600;700;800&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      text-decoration: none;
     
    }
   
`;
export const BOX = styled.div`
  background-color:#e8c0ff;
  @media  screen and (min-width: 360px) and (max-width: 480px){

     background-color:#fea8f3;
  }
  
`;
export const BoxTwo = styled.div`
display:flex;
align-items: center;
  justify-content: space-around;
  background-color:#e8c0ff;

  height:86.5vh;
    div{
        
    }
    h3{
        
        color:#2b0541;
       
    }
    h4{
       
        color:#2b0541;
    }
    p{
        color:#2b0541;
        width:27vw;
        font-weight:bold;
    }
    
    figure{
         padding-top:12.5vh;
         padding-left:2vw;
        width:31vw;
        heigth:30vh;
    }
    img{
        width:30vw;
        heigth:30vh;
        
    }
    @media  screen and (min-width: 360px) and (max-width: 480px){
      flex-direction: column;
      background-color:#fea8f3;
     
      height:80vh;
      img{
         
         width:80vw;
         heigth:60vh;
          left:10vw;
          bottom:5vh;
         position:absolute;
        
      }
      h3{
         margin-top:9vh;
         margin-left:6vw;
        
      }
      h4{
         margin-left:6vw;
         margin-top:1vh;
      }
      p{
          margin-top:1vh;
         width:85vw;
         margin-left:6vw;
         margin-bottom:25vh;
      }
  }   
 
   
`;
export const Nav = styled.header`
   display:flex;
   align-items: center;
  justify-content: space-around;
   
  
  width:100%;
 h1{
    font-size:4vh;
    color:#1d0e61;
 }

 img{
    width:7vw;
  
    height:13.5vh;
 }
 @media  screen and (min-width: 360px) and (max-width: 480px){
     h1{
       display:none;
     }
     img{
      width:28vw;
    
      height:12vh;
     
      margin-right:20vw;
      margin-bottom:5vh;
   }
 }   

  

`;
export const Ul = styled.ul`
   display:flex;
   align-items: center;
  justify-content: space-around;
  
  width:50%;
 
    list-style: none;
    font-size:4vh;
    
    @media  screen and (min-width: 360px) and (max-width: 480px){
      display:none;
     
    }   

`;
export const ImgDog = styled.img`
   width:30vw;
   height:60vh;
   @media  screen and (min-width: 360px) and (max-width: 480px){
      width:65vw;
      height:40vh;
      margin-left:-8vw;
   }
`;
export const BoxDog = styled.div`
    padding-top:15vh;
    background-color:#e8c0ff;

     height:86.5vh;
    
    display:flex;
    align-items: center;
   justify-content: space-around;
 
   div{
   
    padding-bottom:15vh;
   }
   h2{
    color:#2b0541;
   }
   button{
      width:15vw;
      height:10vh;
      font-size:3vh;
      font-weight:bold;
      margin-top:4vh;
      color:#2b0541;
      background-color:transparent;
   }
   @media  screen and (min-width: 360px) and (max-width: 480px){
      flex-direction: column;
      background-color:#fea8f3;

      height:80.05vh;
      h2{
         font-size:3vh;
         position:absolute;
         bottom:60vh;
         left:8vw;
      }
      button{
         margin-bottom:30vh;
         width:40vw;
         height:6vh;
         font-size:3vh;
    
         
      }
   }  
  
`;
export const BoxCats = styled.div`
      
display:flex-block;
align-items: center;
justify-content: space-around;
background-color:#e8c0ff;

height:86.5vh;


  h2{
     margin-top:20vh;
      margin-left:10vw;
      color:#2b0541;
  }
  
button{
   margin-top:4vh;
   width:15vw;
   height:10vh;
   font-size:3vh;
   font-weight:bold;
   color:#2b0541;
   background-color:transparent;
   margin-left:15vw;
   
}
@media  screen and (min-width: 360px) and (max-width: 480px){
    margin-top:-10vh;
    background-color:#fea8f3;

    height:492vh;
   button{
      width:40vw;
      height:6vh;
      font-size:3vh;
      margin-top:2vh;
   
   }
}
`;

export const Fig =styled.div`
 
  
   display:flex;
   flex-wrap:wrap;
   align-items: center;
justify-content: space-around;
margin-left:10vw;
margin-top:1vh;
   width:80vw;
   height:60vh;
   img{
    width:15vw;
  
    height:25vh;
 }
 @media  screen and (min-width: 360px) and (max-width: 480px){
   flex-direction: column;
  
   width:70vw;
   height:450vh;
   margin-right:10vw;
   img{
      width:70vw;
    
      height:40vh;
   }
   
 } 
`
export const BoxGatos = styled.div`
     
    width:45vw;
    height:56.5vh;
    @media  screen and (min-width: 360px) and (max-width: 480px){
      position:absolute;
      height:40vh;
      width:60vw;
    
      bottom:6vh;
      
    }
`;

export const BoxMenuH=styled.div`
      display:none;
      @media  screen and (min-width: 360px) and (max-width: 480px){
         display:flex;
         flex-direction: column;
  
          width:10vw;
          height:20vh;
          li{

              list-style: none;
              font-size:3vh;
              margin-top:1vh;
              
          }
          
          button{
            width:20vw;
            height:8vh;
            font-size:7vh;
           

            background-color:transparent;
            border:none;
          }
        
      }
`;

export const FiguresHome =styled.figure`

     display:none;
     @media  screen and (min-width: 360px) and (max-width: 480px){
        display:flex;
     }
`


export const FiguresHomeTwo =styled.figure`
@media  screen and (min-width: 360px) and (max-width: 480px){
     display:none

}
   
`