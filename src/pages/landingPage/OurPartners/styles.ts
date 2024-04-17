import styled from "styled-components";

export const Styles = styled.div`
margin-top: 200px;
.module{
    .content{
        margin-top: 30px;
        .text{
            font-size: 40px;
            span{
                font-weight: 700;
                color: #FF2447;
            }
        }
       
    }
}
.partners{
    margin-top: 60px;
    .data-list{
        display: flex;
        align-items: center;
        gap: 80px;
        .partner{
            width: 240px;
           aspect-ratio: 240/ 68;
           display: flex;
           align-items: center;
           justify-content: center;
           overflow: hidden;
           cursor: pointer;
            img{
                height: 100%;
            }
        }
    }
}

@media only screen and (max-width: 1530px){
    margin-top: 150px;
    .module{
        .content{
            .text{
                font-size: 32px;
            }
        }
    }
}

@media only screen and (max-width: 1280px){
    margin-top: 100px;
    .module{
        .content{
            .text{
                font-size: 24px;
            }
        }
    }
    .partners{
        margin-top: 40px;
        .data-list{
            gap: 40px;
            .partner{
                width: 180px;
            }
        }
    }
}

@media only screen and (max-width: 768px){
    margin-top: 80px;
    .module{
        .content{
            .text{
                font-size: 18px;
            }
        }
    }
    .partners{
        .data-list{
            gap: 34px;
            .partner{
                width: 160px;
            }
        }
    }
}

@media only screen and (max-width: 430px){
    margin-top: 60px;
    .module{
        .content{
            margin-top: 24px;
            .text{
                font-size: 16px;
            }
        }
    }
    .partners{
        .data-list{
            gap: 30px;
            .partner{
                width: 140px;
            }
        }
    }
}
`