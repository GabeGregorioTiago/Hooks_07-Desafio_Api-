import React from "react";
import Router from "./Routes/Route";
import * as S from "./Styles/Styles";
const App = () => {
  return (
    < S.BOX>
      <S.GlobalStyle/>
      <Router />
    </S.BOX>
  );
};

export default App;
