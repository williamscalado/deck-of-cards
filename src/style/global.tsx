import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #F0F2F5;
    --background-header: #283a50;
    --buttonheader: #02849B; 
    --red:#E62E4D;
    --blue: #5429CC;
    --blue-light: #6933ff;
    --green-light:#02EB64;
   
    --green-select:#02AB92;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape: #FFFFFF;
    
    --shape-box: #02849B;
    --green-sucess: hsl(120,100%,90%);
    --red-danger: hsl(0, 100%, 90%);
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: var(--background);
    font-size: 16;
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}
h1 , h2 , h3 , h4 , h5 , h6, strong{
    font-weight: 600;
}
html{
    
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
    @media (max-width: 720px){
        font-size: 87.5%;
    }
}
button{
    cursor: pointer;
}
[disabled]{
    cursor: not-allowed;
    opacity: 0.6;
}
.modal-style{
    width: 576px;
    background-color: var(--background);
    padding: 0 2rem 2rem;
    margin: auto;
    border-radius: 0.5rem;
    display: flex;
}
.modal-style-overlay{
      display: flex;
      justify-items: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.75);
 
}
.button-close-modal{
    position: relative;
    margin-right: 0;
    padding: 1rem 1rem ;
    float: right;
    margin-top: 1rem;
    margin-right: 0px;
}

`;
