import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Inter:wght@400;500;600;700;800&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      text-decoration: none;
     
    }
   
`;
export const BOX = styled.div`
  background-color:#e8c0ff;

  
`;
export const BoxTwo = styled.div`
display:flex;
align-items: center;
  justify-content: space-around;
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
         padding-top:26vh;
         padding-left:2vw;
        width:31vw;
        heigth:30vh;
    }
    img{
        width:30vw;
        heigth:30vh;
        
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
  

`;
export const Ul = styled.ul`
   display:flex;
   align-items: center;
  justify-content: space-around;
 
  width:50%;
 
    list-style: none;
    font-size:4vh;
  

`;
export const ImgDog = styled.img`
   width:30vw;
   height:60vh;
`;
export const BoxDog = styled.div`
    padding-top:15vh;
   
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
      color:#2b0541;
      background-color:transparent;
   }
  
  
`;
export const BoxCats = styled.div`
      
display:flex-block;
align-items: center;
justify-content: space-around;

  
  

 
 
`;

export const Fig =styled.div`
   border:solid;
   display:flex;
   flex-wrap:wrap;
   align-items: center;
justify-content: space-around;

   width:85vw;
   height:60vh;
   img{
    width:20vw;
  
    height:30vh;
 }
`