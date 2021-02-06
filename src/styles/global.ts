import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

import { colors } from "./colorVariables";

export default createGlobalStyle`
  *  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
    
    body, input {
      -webkit-font-smoothing: antialiased;
      font-family: Roboto;
    } 
    
    
    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
    }
    button {
      cursor: pointer;
    }

    div.Toastify__toast.Toastify__toast--error{
    background : ${colors.secondary};
  }
  div.Toastify__toast.Toastify__toast--success{
    background : ${colors.primary};
  }
`;
