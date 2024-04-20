import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`

@font-face {
    font-family: "Montserrat";
    src: url("/fonts/ClashGrotesk-Variable.ttf");
  }

html {
    scroll-behavior: smooth;
}
  
  *{
    box-sizing: border-box;
    font-family: "Montserrat";
    font-weight: 400;
    line-height: 123%;

  }

  body {
    margin: 0;
    padding: 0;
    background: #0A0B0C;
    color: #fff;
  }
  .container{
    width: 100%;
    max-width: 1645px;
    padding: 0 15px;
    margin: 0 auto;
}

p{
  margin: 0;
}

`