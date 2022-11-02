import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #000;

--bs-blue: #0d6efd;
--bs-indigo: #6610f2;
--bs-purple: #6f42c1;
--bs-pink: #d63384;
--bs-red: #dc3545;
--bs-orange: #fd7e14;
--bs-yellow: #F2CB05;
--bs-yellow-sd: #F2B705;
--bs-green: #198754;
--bs-teal: #37ad90;
--bs-cyan: #0dcaf0;
 --blue-soft: #00D2FF;
--bs-white: #fff;
--white: #fff;
--bs-gray: #d9d9de;
--bs-gray-dark: #343a40;
--bs-primary: #0d6efd;
--bs-secondary: #6c757d;
--bs-success: #198754;
--bs-info: #0dcaf0;
--bs-warning: #ffc107;
--bs-danger: #dc3545;
--bs-light: #f8f9fa;
--bs-dark: #212529;
--bs-dark-full: #161c20;

--red-600: #e50030;
--red-800: #a50027;

--black: #000;
  
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


::-webkit-scrollbar {
  width: 3px;
  background: black;
}

::-webkit-scrollbar-thumb {
  background: #6c757d;
  border-radius: 10px;
}
body{
    /* background-color: var(--background); */
    background: url("./image/bg.jpg") no-repeat fixed center;
    background-size:cover;
    font-size: 16;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 0.1em;
    font-family: 'Fredoka One', sans-serif;
    font-weight: 600;
}
input, textarea, button{  
   
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}
h1 , h2 , h3 , h4 , h5 , h6, strong{
    font-weight: 200;
}

button{
    cursor: pointer;
}
[disabled]{
    cursor: not-allowed;
    opacity: 0.6;
}
.modal-style{
    width: 36rem;
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
    margin-right: 0rem;
}

`;
