import styled from "styled-components";

export const Styles = styled.div`
.layout-content{
    padding-bottom: 120px;
    position: relative;
    z-index: 1;
    background-image: url("/images/bg_layout.png");
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 100%;
}

@media only screen and (max-width: 1280px){
    .layout-content{
        padding-bottom: 80px;
    }
}
`